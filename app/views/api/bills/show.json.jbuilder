json.bill do
  json.extract! @bill, :id, :customer_id, :month, :year, :overage_units,
    :overage_unit_cost, :overage_amount, :status, :created_at, :updated_at
  json.customer @bill.customer.name
end

json.bill_actions do
  @bill.bill_actions.each do |action|
    json.set! action.id do
      json.id action.id
      json.bill_id action.bill_id
      json.stakeholder_id action.stakeholder_id
      json.stakeholder_name action.stakeholder.name
      json.action action.action
      json.comment action.comment
      json.created_at action.created_at
      json.updated_at action.updated_at
    end
  end
end
