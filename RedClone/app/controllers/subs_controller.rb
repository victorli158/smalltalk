class SubsController < ApplicationController
  before_action :require_login, except: [:index, :show]
  before_action :users_sub?, only: [:edit, :update]

  def new
    @sub = Sub.new
  end

  def create
    @sub = Sub.new(sub_params)
    @sub.user_id = current_user.id
    if @sub.save
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  def show
    @sub = Sub.find(params[:id])
  end

  def index
    @subs = Sub.all
  end

  def edit
    @sub = Sub.find(params[:id])
  end

  def update
    @sub = Sub.find_by(params[:id])
    if @sub.update_attributes(sub_params)
      redirect_to sub_url(@sub)
    else
      flash.now[:errors] = @sub.errors.full_messages
      render :new
    end
  end

  private
  def sub_params
    params.require(:sub).permit(:title, :description)
  end

  def users_sub?
    @sub = Sub.find(params[:id])
    if current_user.id != @sub.user_id
      flash.now[:errors] = ["This isn't your sub to edit."]
      redirect_to sub_url(@sub)
    end
  end
end
