require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative( 'models/film' )
require_relative( 'models/customer' )
require_relative( 'models/ticket')
# require( 'pry-byebug' )
also_reload( './models/*' )


get '/' do
  redirect to '/films'
end

get '/films' do
  @films = Film.all#FIND ALL
  erb(:index)
end

#Below "show" route 'picks-up' id to displays & avoids
# treating the :id as a string when searching. Avoids conversion error
get '/films/new' do  # NEW
  erb (:new)
end

# use params[:id] in the block that defines the route.
get '/films/:id' do  #   SHOW
  @film= Film.find( params['id'])
  erb(:show)
end

# #sinatra reads top-down. update method accepts :id from create
get '/films/:id/edit' do #EDIT
  @film = Film.find(params[:id])#or ['id']?
  erb (:edit)
end

# Now pass params hash to store in @film variable &
# 'pass to our 'POST' route to :create for display following 'update'
post '/films/:id' do # UPDATE
  Film.new( params ).update
  redirect to '/films' #{params['id']}
end

post '/films' do  # CREATE
  @film = Film.new(params)
  @film.save() #s'id'
  @time = Time.new()
  erb (:create)
end

post '/films/:id/delete' do # DELETE
  @film= Film.find( params[:id]) #or ['id']?
  @film.delete()
  redirect to '/films'
end
