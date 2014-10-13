class RemoveLenseFromLenticulars < ActiveRecord::Migration
  def self.up
    remove_attachment :lenticulars, :lense
    remove_column :lenticulars, :lense_dimensions
  end

  def self.down
    change_table :lenticulars do |t|
      t.attachment :lense
    end
    add_column :lenticulars, :lense_dimensions, :string
  end
end