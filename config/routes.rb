Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :customers, only: [:index, :show] do
      resources :usages, only: [:index]
    end
    resources :bills, only: [:index, :show, :create, :update]

  end

  patch '/api/bills/:id/approve', :to => 'api/bills#approve'
  patch '/api/bills/:id/reject', :to => 'api/bills#reject'
end
