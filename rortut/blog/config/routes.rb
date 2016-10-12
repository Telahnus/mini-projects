Rails.application.routes.draw do
	get 'welcome/index'

  resources :articles # creates a standard set of routes for the named resource, does NOT create the controller

	root 'welcome#index' #sets this as the default index page
end
