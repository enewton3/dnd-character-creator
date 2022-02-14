class CreateAlignments < ActiveRecord::Migration[6.1]
  def change
    create_table :alignments do |t|
      t.string :index
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
