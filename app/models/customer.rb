class Customer < ApplicationRecord
  has_many :usage, inverse_of: 'customer'

  belongs_to :customer_success_manager,
    primary_key: :id,
    foreign_key: :csm_id,
    class_name: "User"

  has_many :bills
end
