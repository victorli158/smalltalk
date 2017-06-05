# == Schema Information
#
# Table name: links
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  title      :string
#  url        :string
#  user_id    :integer
#

class Link < ActiveRecord::Base
  validates :url, :title, presence: true
  validates :user, presence: true

  has_many :comments,
    primary_key: :id,
    foreign_key: :link_id,
    class_name: "Comment"

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
end
