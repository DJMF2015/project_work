require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )
require_relative( '../models/member.rb' )
require_relative( '../models/activity.rb' )
require_relative( '../models/booking.rb' )
also_reload( '../models/*' )


get '/' do
  erb(:index)
end

#FIND ALL
get '/members' do
  @members = Member.all
  erb(:"members/index")
end

#CREATE
get '/members/new' do
  erb(:"members/new")
end

#SAVE
post '/members' do
  Member.new(params).save
  redirect to '/members'
end

# get '/members/:id' do
#   @member = Member.find(params['id'])
#   erb( :"members/show" )
# end

#FIND BY ID
get '/members/:id/edit' do
  @member = Member.find(params['id'])
  erb( :"members/edit" )
end

#MODIFY/UPDATE
post '/members/:id' do
  member = Member.new(params)
  member.update
  redirect to "/members/#{params['id']}"
end

#DELETE
post '/members/:id/delete' do
  Member.delete(params[:id])
  redirect to("/members")
end
