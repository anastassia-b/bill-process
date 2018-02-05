class CreateBillActions < ActiveRecord::Migration[5.1]
  def change
    create_table :bill_actions do |t|
      t.integer :bill_id, null: false
      t.integer :stakeholder_id, null: false
      t.string :new_status
      t.string :comment
      t.timestamps
      t.index :bill_id
      t.index :stakeholder_id
    end
  end
end
