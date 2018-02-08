class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name, null: false
      t.string :billing_address
      t.string :billing_email
      t.integer :monthly_api_limit
      t.float :overage_unit_cost
      t.date :start_date
      t.date :end_date
      t.boolean :require_csm_approval
    end
  end
end
