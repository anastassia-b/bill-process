# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180205021818) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bill_actions", force: :cascade do |t|
    t.integer "bill_id", null: false
    t.integer "stakeholder_id", null: false
    t.string "action"
    t.string "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bill_id"], name: "index_bill_actions_on_bill_id"
    t.index ["stakeholder_id"], name: "index_bill_actions_on_stakeholder_id"
  end

  create_table "bills", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.integer "month"
    t.integer "year"
    t.integer "overage_units"
    t.integer "overage_unit_cost"
    t.integer "overage_amount"
    t.string "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_bills_on_customer_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "name", null: false
    t.string "billing_address"
    t.string "billing_email"
    t.integer "monthly_api_limit"
    t.float "overage_unit_cost"
    t.date "start_date"
    t.date "end_date"
    t.boolean "require_csm_approval"
    t.integer "csm_id"
  end

  create_table "usages", force: :cascade do |t|
    t.integer "customer_id", null: false
    t.integer "month"
    t.integer "year"
    t.integer "api_usage"
    t.index ["customer_id"], name: "index_usages_on_customer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email"
    t.string "role"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["name"], name: "index_users_on_name", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
