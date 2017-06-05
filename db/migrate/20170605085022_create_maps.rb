class CreateMaps < ActiveRecord::Migration[5.0]
  def change
    create_table :maps do |t|
      t.integer :geolocation
      t.timestamps
    end
  end
end
