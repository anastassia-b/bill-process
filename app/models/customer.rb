class Customer < ApplicationRecord
  has_many :usage, inverse_of: 'customer'
end
