# == Schema Information
#
# Table name: tweets
#
#  id         :integer          not null, primary key
#  title      :string
#  body       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tweet < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :body, length: { maximum: 140 }
  has_many :replies,
    primary_key: :id,
    foreign_key: :tweet_id,
    class_name: "Reply"

  belongs_to :user
end
