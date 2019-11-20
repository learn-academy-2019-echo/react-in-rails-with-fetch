class Dog < ApplicationRecord
    validates :name, :age, :enjoys, presence: true
end
