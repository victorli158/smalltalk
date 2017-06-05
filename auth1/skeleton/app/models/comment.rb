# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  body       :string
#  user_id    :integer
#  link_id    :integer
#

class Comment < ActiveRecord::Base
  validates :body, presence: true
  validates :user, :link, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"

  belongs_to :link,
    primary_key: :id,
    foreign_key: :link_id,
    class_name: "Link"
end
