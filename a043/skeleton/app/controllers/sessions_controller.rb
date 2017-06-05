class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      redirect_to links_url
    else
      flash.now[:errors] = ["Invalid user/pass combination"]
      render :new
    end
  end

  def new
  end

  def destroy
    logout
    redirect_to new_session_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
