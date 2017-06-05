class RemoveGeolocationFromLogs < ActiveRecord::Migration[5.0]
  def change
    remove_column :logs, :geolocation, :integer
  end
end
