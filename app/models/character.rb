class Character < ApplicationRecord
  belongs_to :user

  has_many :languages
  has_many :classes
  has_many :races
  has_one :background
  has_one :alignment

  has_many :proficiencies
  has_many :equipment
  has_many :spells  
  has_many :feats
  has_many :conditions
end
