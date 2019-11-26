Rails.application.routes.draw do
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }

  resources :dogs  # All the Javascript dog restful routes

  root to: 'pages#root'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
