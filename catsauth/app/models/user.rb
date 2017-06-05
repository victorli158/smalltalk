class User < ActiveRecord::Base
  attr_reader :password
  def reset_session_token!
    session_token = nil
    session_token = SecureRandom.base64(16)
    save!
  end

  def password=(password)
    pass = BCrypt::Password.create(password)
    password_digest = pass
    save!
  end

  def self.find_by_credientials(user_name, password)
    pass = BCrypt::Password.create(password)

    user1 = User.find_by(user_name: user_name)
  end
end
