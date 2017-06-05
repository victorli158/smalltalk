class PostsController < ApplicationController
  before_action :require_login
  before_action :own_post?, only: [:edit, :update]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      redirect_to sub_url(@post.sub_id)
    else
      flash[:errors] = @post.errors.full_messages
      redirect_to sub_url(@post.sub_id)
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      redirect_to sub_url(@post.sub_id)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.delete
    redirect_to sub_url(post.sub_id)
  end

 private
 def post_params
   params.require(:post).permit(:title, :url, :content, :sub_id, sub_ids: [])
 end

 def own_post?
   @post = Post.find(params[:id])
   if @post.user_id != current_user.id
     flash[:errors] = ["This isn't your post to update"]
     redirect_to sub_url(@post.sub_id)
   end
 end
end
