Links::Application.routes.draw do
  resources :links
  resources :comments
  resources :users
  resource :session
end
