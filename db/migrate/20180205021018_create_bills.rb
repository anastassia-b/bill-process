class CreateBills < ActiveRecord::Migration[5.1]
  def change
    create_table :bills do |t|
      t.integer :customer_id, null: false
      t.integer :month
      t.integer :year
      t.integer :overage_units
      t.integer :overage_unit_cost
      t.integer :overage_amount
      t.string :status
      t.timestamps
      t.index :customer_id
    end
  end
end
