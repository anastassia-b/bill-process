class Usage < ApplicationRecord
  belongs_to :customer,
    primary_key: :id,
    foreign_key: :customer_id,
    class_name: 'Customer'

end
