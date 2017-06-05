class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if !logged_in?
      redirect_to new_session_url
    else
      @comment.user = current_user
      if @comment.save
        redirect_to link_url(@comment)
      else
        flash[:errors] = @comment.errors.full_messages
      end
    end
  end

  def destroy
    if !logged_in?
      redirect_to new_session_url
    else
      @comment = Comment.find_by(params[:id])
      link_id = @comment.link_id
      @comment.delete
      redirect_to link_url(link_id)
    end

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :link_id)
  end
end
