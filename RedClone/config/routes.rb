Rails.application.routes.draw do
  resources :comments, except: [:new]
  resources :posts, except: [:index] do
    resources :comments, only: [:new]
  end
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :subs, except: [:destroy]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
