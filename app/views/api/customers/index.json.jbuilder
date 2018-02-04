@customers.each do |customer|
  json.set! customer.id do
    json.id customer.id
    json.name customer.name
    json.billing_address customer.billing_address
    json.billing_email customer.billing_email
    json.monthly_api_limit customer.monthly_api_limit
    json.overage_unit_cost customer.overage_unit_cost
    json.start_date customer.start_date
    json.end_date customer.end_date
    json.require_csm_approval customer.require_csm_approval
  end
end
