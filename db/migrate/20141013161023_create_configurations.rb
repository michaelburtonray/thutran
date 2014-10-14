class CreateConfigurations < ActiveRecord::Migration
  def change
    create_table :configurations do |t|
      t.string :name
      t.string :value

      t.timestamps
    end
    add_index :configurations, :name, unique: true
    add_index :configurations, :value

  end
end
