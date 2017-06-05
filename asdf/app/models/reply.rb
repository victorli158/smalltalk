# == Schema Information
#
# Table name: replies
#
#  id         :integer          not null, primary key
#  body       :string
#  tweet_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reply < ActiveRecord::Base
  validates :tweet_id, :tweet, presence: true
  validates :body, presence: true, length: { maximum: 140 }
  belongs_to :tweet
end
