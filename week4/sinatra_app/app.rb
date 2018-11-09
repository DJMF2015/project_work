require( 'sinatra' )
require( 'sinatra/contrib/all' )
require_relative('controllers/member_controller')
require_relative('controllers/activity_controller')
require_relative('controllers/admin_controller')

#index
get '/' do
  erb( :index )
end
