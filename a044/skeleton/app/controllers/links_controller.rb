class LinksController < ApplicationController
  before_action :require_login

  def new
    @link = Link.new
  end

  def create
    @link = Link.new(link_params)
    @link.user_id = current_user.id
    if @link.save
      redirect_to link_url(@link)
    else
      flash.now[:errors] = @link.errors.full_messages
      render :new
    end
  end

  def index
    @links = Link.all
  end

  def show
    @link = Link.find_by(params[:id])
  end

  def edit
    @link = Link.find_by(params[:id])
  end

  def update
    @link = current_user.links.find_by(params[:id])
    if @link && @link.update_attributes(link_params)
      redirect_to link_url(@link)
    else
      if @link
        flash.now[:errors] = @link.errors.full_messages
        render :edit
      else
        flash.now[:errors] = ["Can't do that"]
        render :edit
      end
    end
  end

  private
  def link_params
    params.require(:link).permit(:title, :url)
  end
end
