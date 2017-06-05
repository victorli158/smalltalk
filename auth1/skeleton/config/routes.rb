Links::Application.routes.draw do
  # get 'comments/create'
  #
  # get 'comments/destroy'

  # get 'links/new'
  #
  # get 'links/create'
  #
  # get 'links/index'
  #
  # get 'links/show'
  #
  # get 'links/edit'

  # get 'sessions/new'
  #
  # get 'sessions/create'
  #
  # get 'sessions/destroy'

  # get 'user/new'
  #
  # get 'user/create'
  resources :users, only: [:create, :new]
  resources :links
  resources :comments
  resource :session

end
