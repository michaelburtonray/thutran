class RemoveUseAsBackgroundFromLenticulars < ActiveRecord::Migration
  def change
    remove_column :lenticulars, :use_as_background
  end
end
