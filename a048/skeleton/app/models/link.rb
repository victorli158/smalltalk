# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  title      :string
#  url        :string
#  user_id    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Link < ActiveRecord::Base
  validates :title, :url, :user_id, :user, presence: true

  belongs_to :user
  has_many :comments
end
