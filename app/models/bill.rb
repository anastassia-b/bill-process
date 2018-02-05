class Bill < ApplicationRecord
  belongs_to :customer

  has_many :bill_actions
end
