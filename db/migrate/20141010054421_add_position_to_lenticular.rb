class AddPositionToLenticular < ActiveRecord::Migration
  def change
    add_column :lenticulars, :position, :integer
  end
end
