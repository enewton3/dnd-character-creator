class CreateConditions < ActiveRecord::Migration[6.1]
  def change
    create_table :conditions do |t|
      t.string :index
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
