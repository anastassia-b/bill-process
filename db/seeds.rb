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

  User.create!(name: "User1", role: "Sales", password: "password")
  User.create!(name: "User2", role: "Finance", password: "password")
  User.create!(name: "User3", role: "CustomerSuccess", password: "password")
  User.create!(name: "User4", role: "CustomerSuccess", password: "password")

  Customer.create!(
    name: "Customer1",
    billing_address: "1 appian way, Redmond , Washington",
    billing_email: "ap@customer1.com",
    monthly_api_limit: 100000,
    overage_unit_cost: 0.1,
    start_date: "1/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer2",
    billing_address: "2 appian way, Redmond , Washington",
    billing_email: "ap@customer2.com",
    monthly_api_limit: 200000,
    overage_unit_cost: 0.09,
    start_date: "2/1/2017",
    require_csm_approval: true
  )

  Customer.create!(
    name: "Customer3",
    billing_address: "3 appian way, Redmond , Washington",
    billing_email: "ap@customer3.com",
    monthly_api_limit: 300000,
    overage_unit_cost: 0.08,
    start_date: "3/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer4",
    billing_address: "4 appian way, Redmond , Washington",
    billing_email: "ap@customer4.com",
    monthly_api_limit: 400000,
    overage_unit_cost: 0.07,
    start_date: "4/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer5",
    billing_address: "5 appian way, Redmond , Washington",
    billing_email: "ap@customer5.com",
    monthly_api_limit: 500000,
    overage_unit_cost: 0.06,
    start_date: "5/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer6",
    billing_address: "6 appian way, Redmond , Washington",
    billing_email: "ap@customer6.com",
    monthly_api_limit: 600000,
    overage_unit_cost: 0.05,
    start_date: "6/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer7",
    billing_address: "7 appian way, Redmond , Washington",
    billing_email: "ap@customer7.com",
    monthly_api_limit: 700000,
    overage_unit_cost: 0.04,
    start_date: "7/1/2017",
    require_csm_approval: true
  )

  Customer.create!(
    name: "Customer8",
    billing_address: "8 appian way, Redmond , Washington",
    billing_email: "ap@customer8.com",
    monthly_api_limit: 800000,
    overage_unit_cost: 0.03,
    start_date: "8/1/2017",
    require_csm_approval: true
  )

  Customer.create!(
    name: "Customer9",
    billing_address: "9 appian way, Redmond , Washington",
    billing_email: "ap@customer9.com",
    monthly_api_limit: 900000,
    overage_unit_cost: 0.02,
    start_date: "9/1/2017",
    require_csm_approval: false
  )

  Customer.create!(
    name: "Customer10",
    billing_address: "10 appian way, Redmond , Washington",
    billing_email: "ap@customer10.com",
    monthly_api_limit: 1000000,
    overage_unit_cost: 0.01,
    start_date: "10/1/2017",
    require_csm_approval: false
  )

end
