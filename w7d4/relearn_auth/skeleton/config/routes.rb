Links::Application.routes.draw do
  root to: "sessions#new"
  resources :users, only: [:new, :create]
  resources :session, only: [:new, :create, :delete]
end
