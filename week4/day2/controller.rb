require('sinatra')
require('sinatra/contrib/all') if development?
require_relative('./models/game')
# require_relative('./public/style')
also_reload('./models/*')

get '/:hand1/:computer' do
  player1 = { player_no: 1, hand: params[:hand1]}
  player2 = { player_no: 2, hand: params[:computer]}
  @result = Game.play_game(player1, player2)
  erb(:result)
end

get '/' do
  erb(:home)
end

get 'rock/scissors' do
  erb(:result)
end

get 'paper/rock' do
  erb(:result)
end

get 'scissors/paper' do
  erb(:result)
end
