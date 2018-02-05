Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :customers, only: [:index, :show] do
      resources :usages, only: [:index]
    end
    resources :bills, only: [:index, :show, :create]
  end

end
