class UserMailer < ApplicationMailer
  default from: 'ballonj1@tcnj.edu'
 
  def welcome_email(user)
    attachments['cool_pic.jpg'] = File.read('/path/to/filename.jpg')
    attachments['text'] = "That really cool night last summer."
    @user = user
    @url = 'http://www.google.com'
    mail(to: user.email, subject: 'Welcome to My Awesome Site')

  end
end
