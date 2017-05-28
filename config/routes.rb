Rails.application.routes.draw do
  devise_for :users
  root 'logs#index'
  get '/users', to: redirect("/users/sign_in")
  resources :logs, except: :index
  resources :anglers, only: :show
end
