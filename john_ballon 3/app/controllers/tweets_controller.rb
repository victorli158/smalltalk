class TweetsController < ApplicationController
  before_action :require_login

  def new
    @tweet = Tweet.new
  end

  def index
    @tweets = Tweet.all
  end

  def edit
    @tweet = Tweet.find(params[:id])
  end

  def show
    @tweet = Tweet.find(params[:id])
  end

  def update
    @tweet = current_user.tweets.find(params[:id])
    if @tweet.update_attributes(tweet_params)
      redirect_to tweet_url(@tweet)
    else
      flash[:errors] = @tweet.errors.full_messages
      redirect_to edit_tweet_url(@tweet)
    end
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweet.user_id = current_user.id
    if @tweet.save
      redirect_to tweet_url(@tweet)
    else
      flash[:errors] = @tweet.errors.full_messages
      render :new
    end
  end

  def tweet_params
    params.require(:tweet).permit(:title, :body)
  end
end
