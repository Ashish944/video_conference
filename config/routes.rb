Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'companies#new'

  devise_for :companies, :skip => [:registration], controllers: { confirmations: 'confirmation' }
  as :company do
    get 'companies/new' => 'companies#new', :as => 'new_company_registration'
    post 'companies' => 'companies#create', :as => 'company_registration'
  end

  resources :companies, only: [:index, :show]
end
