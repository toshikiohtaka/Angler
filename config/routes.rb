Rails.application.routes.draw do
  devise_for :users
  root 'logs#index'
  get '/users', to: redirect("/users/sign_in")
  get '/logs', to: redirect("/logs/new")
  get '/location' => 'locations#index'
  post '/location' => 'locations#create'
  resources :logs, except: :index
  resources :anglers, only: :show
end
