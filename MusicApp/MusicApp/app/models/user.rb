class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :email, presence: true, uniqueness: true
  validates :session_token, presence: true
  after_initialize :ensure_session_token

  attr_reader :password
  def User.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(password)
    @password = password
    password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    @password = password
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def User.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && self.is_password?(password)
    nil
  end
end
