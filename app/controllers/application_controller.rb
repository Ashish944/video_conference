class ApplicationController < ActionController::Base

  before_action :authenticate!

  def authenticate!
    :authenticate_user! if company_signed_in?
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || companies_path
  end
end
