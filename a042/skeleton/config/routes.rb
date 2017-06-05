Links::Application.routes.draw do
  # get 'links/new,'
  #
  # get 'links/create,'
  #
  # get 'links/index,'
  #
  # get 'links/show,'
  #
  # get 'links/edit,'
  #
  # get 'links/update'
  resources :comments
  resource :session
  resources :links
  resources :users
end
