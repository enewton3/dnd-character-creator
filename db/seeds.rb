# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# alignments = Alignment.create([{},{}])
# backgrounds = Background.create([{},{}])
# conditions = Condition.create([{},{}])
# equipment = Equipment.create([{},{}])
# feats = Feat.create([{},{}])

puts "#{Language.count} languages removed"
Language.destroy_all

languages = Language.create([

])
puts "#{Language.count} languages added"


# proficiencies = Proficiency.create([{},{}])
# races = Race.create([{},{}])
# spells = Spell.create([{},{}])
