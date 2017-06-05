class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(email, password)
    if @user
      @user.reset_session_token
      @user.session[:session_token] = User.generate_session_token
      login!(@user)
      redirect_to users_url
    else
      redirect_to new_sessions_url
    end
  end

  def destroy
    @user = User.find_by_credentials(email, password)
    @user.reset_session_token!
    @user.session[:session_token] = nil
    redirect_to users_url
  end
end
