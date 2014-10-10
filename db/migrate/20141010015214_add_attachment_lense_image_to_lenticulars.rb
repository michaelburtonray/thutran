class AddAttachmentLenseImageToLenticulars < ActiveRecord::Migration
  def self.up
    change_table :lenticulars do |t|
      t.attachment :lense
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :lenticulars, :lense
    remove_attachment :lenticulars, :image
  end
end
