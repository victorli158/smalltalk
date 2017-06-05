class AddLinkInfo < ActiveRecord::Migration
  def change
    add_column :links, :title, :string
    add_column :links, :url, :string
  end
end
