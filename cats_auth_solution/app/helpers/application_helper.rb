module ApplicationHelper
  def auth_token
    "<input
      type='hidden'
      name='authenticity_token'
      value='#{form_authenticity_token}'>".html_safe
  end



  def highlight(text)
    "<strong>#{h(text)}</strong>".html_safe
  end

  def long_quote(author, &block)
    text = capture(&block)
    html = "<blockquote cite=\"#{h(author)}\">"
    html += text
    html += "</blockquote>"

    html.html_safe
  end
end
