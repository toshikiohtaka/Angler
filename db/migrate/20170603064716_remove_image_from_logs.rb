class RemoveImageFromLogs < ActiveRecord::Migration[5.0]
  def change
    remove_column :logs, :image, :string
  end
end
