json.customer do
  json.extract! @customer, :id, :name, :billing_address, :billing_email,
    :monthly_api_limit, :overage_unit_cost, :start_date, :end_date,
    :require_csm_approval
end

json.usage do
  @customer.usage.each do |monthly_usage|
    json.set! monthly_usage.id do
      json.id monthly_usage.id
      json.customer_id @customer.id
      json.month monthly_usage.month
      json.year monthly_usage.year
      json.api_usage monthly_usage.api_usage
    end
  end
end

json.bills do
  @customer.bills.each do |bill|
    json.set! bill.id do
      json.id bill.id
      json.month bill.month
      json.year bill.year
      json.overage_amount bill.overage_amount
      json.status bill.status
      json.customer bill.customer.name
    end
  end
end
