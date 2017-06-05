class RepliesController < ApplicationController
  before_action :require_login

  def create
    @reply = Reply.new(reply_params)
    if @reply.save
      redirect_to tweet_url(@reply.tweet_id)
    else
      flash[:errors] = @reply.errors.full_messages
      render :new
    end
  end

  def new
    @reply = Reply.new
  end

  def destroy
    @reply = Reply.find(params[:id])
    @reply.delete
    redirect_to tweet_url(@reply.tweet_id)
  end

  def reply_params
    params.require(:reply).permit(:body, :tweet_id)
  end
end
