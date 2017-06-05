class AddAssociations < ActiveRecord::Migration
  def change
    add_column :links, :user_id, :integer
    add_column :comments, :user_id, :integer
    add_column :comments, :link_id, :integer
  end
end
