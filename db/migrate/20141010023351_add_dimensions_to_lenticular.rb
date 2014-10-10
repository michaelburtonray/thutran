class AddDimensionsToLenticular < ActiveRecord::Migration
  def self.up
    add_column :lenticulars, :image_dimensions, :string
    add_column :lenticulars, :lense_dimensions, :string
  end

  def self.down
    remove_column :lenticulars, :image_dimensions
    remove_column :lenticulars, :lense_dimensions
  end
end