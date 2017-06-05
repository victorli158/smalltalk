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
  has_many :comments
  belongs_to :user

end
