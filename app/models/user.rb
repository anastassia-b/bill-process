class User < ApplicationRecord
  validates :name, :password_digest, :session_token, presence: true
  validates :name, uniqueness: true
  validates :password, length: { minimum: 8 }, allow_nil: true

  attr_reader :password

  after_initialize :ensure_session_token
  # before_validation :ensure_session_token_uniqueness

  #want this association only if user.role = "Customer Success"
  has_many :customers,
    primary_key: :id,
    foreign_key: :csm_id,
    class_name: "Customer"

  has_many :bill_actions, inverse_of: :stakeholder

  def self.find_by_credentials(name, password)
    user = User.find_by(name: name)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def okta_session_token!(new_token)
    self.session_token = new_token
    self.save
    self.session_token
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save
    self.session_token
  end

  private

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  # def ensure_session_token_uniqueness
  #   while User.find_by(session_token: self.session_token)
  #     self.session_token = new_session_token
  #   end
  # end
end
