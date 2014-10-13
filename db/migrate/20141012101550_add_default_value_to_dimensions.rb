class AddDefaultValueToDimensions < ActiveRecord::Migration
  def up
    change_column :lenticulars, :image_dimensions, :string, :default => [0, 0]
  end
end
