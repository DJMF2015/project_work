require('sinatra')
require('sinatra/contrib/all') if development?
require_relative('./models/game')
# require_relative('./public/style')
also_reload('./models/*')

get '/:hand1/:computer' do
  player1 = { choice: "You", hand: params[:hand1]}
  player2 = { choice: "computer", hand: params[:computer]}
  @result = Game.play_game(player1, player2)
  erb(:result)
end

get '/' do
  erb(:home)
end

get 'rock/:computer' do
  erb(:result)
end

get 'paper/rock' do
  erb(:result)
end

get 'scissors/paper' do
  erb(:result)
end
