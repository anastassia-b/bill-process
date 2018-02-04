@usage.each do |monthly_usage|
  json.set! monthly_usage.id do
    json.id monthly_usage.id
    json.customer_id @customer.id
    json.month monthly_usage.month
    json.year monthly_usage.year
    json.api_usage monthly_usage.api_usage
  end
end
