class BillAction < ApplicationRecord
  belongs_to :bill

  belongs_to :stakeholder,
    foreign_key: :stakeholder_id,
    class_name: "User"
    
end
