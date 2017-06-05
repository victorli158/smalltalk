Links::Application.routes.draw do
  get 'sessions/create'

  get 'sessions/new'

  get 'sessions/destroy'

  get 'session/Comments'

  resources :users
  resources :links
  resource :session
  resources :comments
end
