class LinksController < ApplicationController
  def new
    if current_user
      @link = Link.new
      render :new
    else
      redirect_to new_session_url
    end
  end

  def create
    if !logged_in?
      redirect_to new_session_url
    else
      @link = Link.new(link_params)
      @link.user_id = current_user.id
      if @link.save
        redirect_to link_url(@link)
      else
        flash[:errors] = @link.errors.full_messages
        render :new
      end
    end


  end

  def index
    @links = Link.all
  end

  def show
    if !logged_in?
      redirect_to new_session_url
    else
      debugger
      @link = Link.find_by(params[:id])
      render :show
    end
  end

  def edit
    @link = Link.find(params[:id])
  end

  def update
    @link = current_user.links.find(params[:id])
    if @link.update_attributes(link_params)
      redirect_to link_url(@link)
    else
      flash.now[:errors] = @link.errors.full_messages
      render :edit
    end
  end

  private
  def link_params
    params.require(:link).permit(:title, :url, :user_id)
  end
end
