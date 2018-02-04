class CreateUsages < ActiveRecord::Migration[5.1]
  def change
    create_table :usages do |t|
      t.integer :customer_id, null: false
      t.integer :month
      t.integer :year
      t.integer :api_usage
      t.index :customer_id
    end
  end
end
