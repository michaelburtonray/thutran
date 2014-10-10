class AddUseAsBackgroundToLenticulars < ActiveRecord::Migration
  def change
    add_column :lenticulars, :use_as_background, :boolean
  end
end
