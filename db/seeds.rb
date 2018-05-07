# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Customer.destroy_all
  Usage.destroy_all
  Bill.destroy_all
  BillAction.destroy_all

  User.create!(name: "User1", role: "Sales", password: "password")
  User.create!(name: "User2", role: "Finance", password: "password")
  User.create!(name: "User3", role: "CustomerSuccess", password: "password")
  User.create!(name: "User4", role: "CustomerSuccess", password: "password")
  User.create!(name: "email.anastassia@gmail.com", email: 'email.anastassia@gmail.com', role: "Finance", password: "password")
  User.create!(name: "Anastassia", email: 'anastassia@segment.com', role: "", password: "password")

  csm1_id = User.find_by(name: "User3").id
  csm2_id = User.find_by(name: "User4").id

  Customer.create!(
    name: "Customer1",
    billing_address: "1 Appian Way, Redmond, Washington",
    billing_email: "ap@customer1.com",
    monthly_api_limit: 100000,
    overage_unit_cost: 0.1,
    start_date: "1/1/2017",
    require_csm_approval: false,
    csm_id: csm1_id
  )

  Customer.create!(
    name: "Customer2",
    billing_address: "2 Appian Way, Redmond, Washington",
    billing_email: "ap@customer2.com",
    monthly_api_limit: 200000,
    overage_unit_cost: 0.09,
    start_date: "2/1/2017",
    require_csm_approval: true,
    csm_id: csm1_id
  )

  Customer.create!(
    name: "Customer3",
    billing_address: "3 Appian Way, Redmond, Washington",
    billing_email: "ap@customer3.com",
    monthly_api_limit: 300000,
    overage_unit_cost: 0.08,
    start_date: "3/1/2017",
    require_csm_approval: false,
    csm_id: csm1_id
  )

  Customer.create!(
    name: "Customer4",
    billing_address: "4 Appian Way, Redmond, Washington",
    billing_email: "ap@customer4.com",
    monthly_api_limit: 400000,
    overage_unit_cost: 0.07,
    start_date: "4/1/2017",
    require_csm_approval: false,
    csm_id: csm1_id
  )

  Customer.create!(
    name: "Customer5",
    billing_address: "5 Appian Way, Redmond, Washington",
    billing_email: "ap@customer5.com",
    monthly_api_limit: 500000,
    overage_unit_cost: 0.06,
    start_date: "5/1/2017",
    require_csm_approval: false,
    csm_id: csm1_id
  )

  Customer.create!(
    name: "Customer6",
    billing_address: "6 Appian Way, Redmond, Washington",
    billing_email: "ap@customer6.com",
    monthly_api_limit: 600000,
    overage_unit_cost: 0.05,
    start_date: "6/1/2017",
    require_csm_approval: false,
    csm_id: csm2_id
  )

  Customer.create!(
    name: "Customer7",
    billing_address: "7 Appian Way, Redmond, Washington",
    billing_email: "ap@customer7.com",
    monthly_api_limit: 700000,
    overage_unit_cost: 0.04,
    start_date: "7/1/2017",
    require_csm_approval: true,
    csm_id: csm2_id
  )

  Customer.create!(
    name: "Customer8",
    billing_address: "8 Appian Way, Redmond, Washington",
    billing_email: "ap@customer8.com",
    monthly_api_limit: 800000,
    overage_unit_cost: 0.03,
    start_date: "8/1/2017",
    require_csm_approval: true,
    csm_id: csm2_id
  )

  Customer.create!(
    name: "Customer9",
    billing_address: "9 Appian Way, Redmond, Washington",
    billing_email: "ap@customer9.com",
    monthly_api_limit: 900000,
    overage_unit_cost: 0.02,
    start_date: "9/1/2017",
    require_csm_approval: false,
    csm_id: csm2_id
  )

  Customer.create!(
    name: "Customer10",
    billing_address: "10 Appian Way, Redmond, Washington",
    billing_email: "ap@customer10.com",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01,
    start_date: "10/1/2017",
    require_csm_approval: false,
    csm_id: csm2_id
  )


  usage_data = [
    [
      24000,
      45000,
      450000,
      650000,
      400000,
      360000,
      0,
      234000,
      25000,
      320000,
      425000,
      360000
    ],
    [
      350000,
      250000,
      450000,
      10000,
      800000,
      700000,
      0,
      356000,
      28000,
      230000,
      300000,
      450000
    ],
    [
      350000,
      250000,
      450000,
      10000,
      800000,
      700000,
      0,
      356000,
      340000,
      230000,
      567000,
      790000
    ],
    [
      350000,
      345000,
      450000,
      10000,
      800000,
      700000,
      0,
      356000,
      28000,
      230000,
      300000,
      450000
    ]
  ]

  4.times do |i|
    customer_id = Customer.find_by(name: "Customer#{i+1}").id

    12.times do |j|
      Usage.create!(
        customer_id: customer_id,
        month: (j+1),
        year: 2017,
        api_usage: usage_data[i][j]
      )
    end
  end

  Bill.create!(
    customer_id: Customer.first.id,
    month: 10,
    year: 2017,
    overage_units: 220000,
    overage_unit_cost: 0.01,
    overage_amount: 2200,
    status: "SENT"
  )

  finance_user_id = User.find_by(name: "User2").id
  sales_user_id = User.find_by(name: "User1").id
  csm_user_id = User.find_by(name: "User3").id

  BillAction.create!(
    bill_id: Bill.first.id,
    stakeholder_id: finance_user_id,
    action: "DRAFT"
  )

  BillAction.create!(
    bill_id: Bill.first.id,
    stakeholder_id: csm_user_id,
    action: "APPROVE",
    comment: "Customer Success has approved this bill."
  )

  BillAction.create!(
    bill_id: Bill.first.id,
    stakeholder_id: sales_user_id,
    action: "APPROVE",
    comment: "Sales has also approved this bill."
  )

  BillAction.create!(
    bill_id: Bill.first.id,
    stakeholder_id: finance_user_id,
    action: "SENT"
  )

end
