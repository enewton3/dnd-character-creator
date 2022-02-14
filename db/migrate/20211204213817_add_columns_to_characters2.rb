class AddColumnsToCharacters2 < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :hit_points, :integer
    add_column :characters, :proficiency_bonus, :integer
    add_column :characters, :initiative, :integer
    add_column :characters, :armor_class, :integer
    add_column :characters, :speed, :integer

    add_column :characters, :personality, :string
    add_column :characters, :ideal, :string
    add_column :characters, :bond, :string
    add_column :characters, :flaw, :string
    add_column :characters, :gender, :string
    add_column :characters, :place_of_birth, :string
    add_column :characters, :age, :string
    add_column :characters, :height, :string
    add_column :characters, :weight, :string
    add_column :characters, :hair, :string
    add_column :characters, :eyes, :string
    add_column :characters, :skin, :text
    add_column :characters, :appearance, :text
    add_column :characters, :backstory, :text

    add_column :characters, :spell_slots, :integer, default: 0
  end
end
