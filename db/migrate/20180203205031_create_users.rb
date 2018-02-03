class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email
      t.string :role
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end

    add_index :users, :name, unique: true
    add_index :users, :session_token, unique: true
  end
end
