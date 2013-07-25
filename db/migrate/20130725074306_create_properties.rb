class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name	
      t.string :address
      t.decimal :price
      t.integer :bedrooms
      t.boolean :gmaps
      t.float :longitude
      t.float :latitude	

      t.timestamps
    end
  end
end
