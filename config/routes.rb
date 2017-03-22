Rails.application.routes.draw do
	root 'home#index'
	get 'home/index'
	# get 'page_builder/index'

	resources :page_builder do
		collection do
			get "change_columns_layout"
		end
	end
end
