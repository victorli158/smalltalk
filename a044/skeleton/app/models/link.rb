# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Link < ActiveRecord::Base
  validates :title, presence: true, uniqueness: true
  validates :url, :user_id, presence: true
  validates :user, presence: true
  has_many :comments
  belongs_to :user
end
