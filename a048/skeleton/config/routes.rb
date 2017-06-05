Links::Application.routes.draw do
  get 'comments/create'

  get 'comments/destroy'

  resources :users
  resources :links
  resource :session
  resources :comments
end
