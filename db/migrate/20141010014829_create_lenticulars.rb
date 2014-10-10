class CreateLenticulars < ActiveRecord::Migration
  def change
    create_table :lenticulars do |t|
      t.string :anchor_hyperlink_reference

      t.timestamps
    end
  end
end
