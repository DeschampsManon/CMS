require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Cms
  class Application < Rails::Application
    I18n.enforce_available_locales = false
		I18n.config.available_locales = :fr
		config.i18n.default_locale = :en
  end
end
