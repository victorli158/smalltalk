Links::Application.routes.draw do

  # get 'links/new'
  #
  # get 'links/create'
  #
  # get 'links/index'
  #
  # get 'links/show'
  #
  # get 'links/edit'
  #
  # get 'links/update'

  resources :users
  resources :links
  resources :comments
  resource :session
end
