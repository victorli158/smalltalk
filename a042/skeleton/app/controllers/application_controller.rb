class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    User.find_by(session_token: session[:session_token])
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logged_in?
    !current_user.nil?
  end
end
