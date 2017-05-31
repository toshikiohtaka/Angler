class CreateLogs < ActiveRecord::Migration[5.0]
  def change
    create_table :logs do |t|
      t.string :name, null: false
      t.integer :size
      t.string :place
      t.string :image
      t.integer :geolocation
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
