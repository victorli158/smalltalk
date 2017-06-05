class AddSwagLevel < ActiveRecord::Migration
  def change
    add_column :cats, :swag_level, :integer
    add_index :cats, :swag_level
  end
end
