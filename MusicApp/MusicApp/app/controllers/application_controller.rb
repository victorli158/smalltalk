class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    User.find_by_credentials(params[:user][:email], params[:user][:password])
  end

  def logged_in?
    current_user.session_token
  end

  def log_in_user!(user)
    user.reset_session_token!
    user.session[:session_token] = user.session_token
  end

end
