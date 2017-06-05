class CommentsController < ApplicationController
  before_filter :require_signed_in!


  def create
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    comment.save
    flash[:errors] = comment.errors.full_messages
    redirect_to link_url(comment.link)
  end

  def create
    comment = Comment.new(comment_params)
    comment.user_id = current_user.id
    comment.save
    flash[:errors] = comment.errors.full_messages
    redirect_to link_url(comment.link)
  end

#comment.link works because we set up the associations
#this means that all model objects have access to the model objects
#that they have associations with.
#Because a link has many comments, in the link show, you could iterate through
#link.comments and display each comment
#what would be even more useful is to create a button beneath each comment
#that allows you to call the destroy action on it
#in order to create this button, you would need to do something like this
#within the link.comments.each iteration
<% @links.each do |link| %>
  <% link.comments.each do %>
    <%= comment %>
    <%= button_to "Remove Comment", comment_url(comment), method: :destroy  %>
  <% end %>
<% end %>


  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to link_url(comment.link_id)
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :link_id)
  end
end

before_filter :require_signed_in
#router receives request of http verb and URI pattern
#if there is a match, the router will match the request to the
#controller action and put together the correct params
#once in the controller action, the controller has access to
#whatever is in the hash

def current_user
  User.find_by(session_token: session[:session_token])
end

def signed_in?
  !!current_user
end

def sign_out
  current_user.reset_token
  session[:session_token] = nil
end
