// this helper function will be responsible for implemenation of the pub/sub pattern
// and avoid the need to define predefined events for each single component. pub_sub
// helper wll be avialble as custom event throughout the application

//further info: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent

const PubSub = {
  publish: function(channel, payload){
      console.log(`published via channel: ${channel}. payload: ${payload}`);
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function(channel, callback){

    document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
