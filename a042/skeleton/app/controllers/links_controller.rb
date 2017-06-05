class LinksController < ApplicationController
  def new
    if !logged_in?
      redirect_to new_session_url
    else
      @link = Link.new
      render :new
    end
  end

  def create
    debugger
    if !logged_in?
      redirect_to new_session_url
    else
      @link = Link.new(link_params)
      if @link.save
        redirect_to link_url(@link)
      else
        flash.now[:errors] = @link.errors.full_messages
      end
    end
  end

  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  private
  def link_params
    params.require(:link).permit(:title, :url, :user_id)
  end
end
