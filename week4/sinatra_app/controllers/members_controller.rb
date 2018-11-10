require( 'sinatra' )
require( 'sinatra/contrib/all' )
require( 'pry-byebug' )
require_relative( '../models/member.rb' )
require_relative( '../models/activity.rb' )
require_relative( '../models/booking.rb' )
also_reload( '../models/*' )


# get '/' do
#   erb(:index)
# end

get '/members' do
  @members = Member.all
  erb(:"members/index")
end


get '/members/:id' do
  @member = Member.find(params['id'])
  erb( :"members/show" )
end

# delete
# post '/members/:id/delete' do
#   member = Member.find(params['id'])
#   member.delete
#   redirect to  '/members'
# end

post '/members/:id/delete' do
  Member.delete(params[:id])
  redirect to("/members")
end
