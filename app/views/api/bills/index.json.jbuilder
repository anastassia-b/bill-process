@bills.each do |bill|
  json.set! bill.id do
    json.id bill.id
    json.customer_id bill.customer_id
    json.customer bill.customer.name
    json.month bill.month
    json.year bill.year
    json.overage_units bill.overage_units
    json.overage_unit_cost bill.overage_unit_cost
    json.overage_amount bill.overage_amount
    json.status bill.status
    json.created_at bill.created_at
    json.updated_at bill.updated_at
  end
end
