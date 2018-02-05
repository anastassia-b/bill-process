class AddCsmIdToCustomers < ActiveRecord::Migration[5.1]
  def change
    add_column :customers, :csm_id, :integer
  end
end
