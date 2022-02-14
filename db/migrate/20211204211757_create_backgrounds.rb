class CreateBackgrounds < ActiveRecord::Migration[6.1]
  def change
    create_table :backgrounds do |t|
      t.string :index
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
