# BillProcess

BillProcess is a full-stack app that lets different internal stakeholders efficiently process monthly customer bills. It is built with Ruby on Rails, PostgreSQL, and React/Redux.

To run this app locally:
  * `git clone https://github.com/anastassia-b/bill-process.git`
  * `bundle install`
  * `npm install`
  * `rails s`
  * Visit `localhost:3000/#/welcome` in your browser!

## Features
* Complete user authentication with BCrypt gem.
* Multiple Account types (Finance, Customer Success, Sales) allow for specialized permissions and views.
* Bill tracks the history of actions on it, allowing for documentation and reversibility.

## Database Schema

### Users (stakeholders)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
email           | string    |
role            | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

### Customers

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
csm_id    | integer | foreign key (references users), indexed
name            | string    |
billing_address | string    |  
billing_email   | string    |
monthly_api_limit | integer   |
overage_unit_cost  | integer |
start_date | date |
end_date | date |
require_csm_approval | boolean |


### Usage

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
customer_id     | integer   | not null, foreign key (references customers), indexed
month           | integer   |
year            | integer   |
api_usage       | integer   |

### Bill

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
customer_id    | integer   | not null, foreign key (references customers), indexed
month           | integer   |
year            | integer   |
overage_units   | integer   |
overage_unit_cost  | integer |
overage_amount  | integer |
status      | string   |
created_at  | datetime |
updated_at  | datetime |

A bill's overage_unit cost by default will be a customer's overage_unit_cost, but could be altered for flexibility. Therefore, overage_unit_cost is stored in two models.

### Bill Actions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
bill_id         | integer   | not null, foreign key (references bills), indexed
stakeholder_id  | integer   | not null, foreign key (references users), indexed
action          | string    |
comment         | string    |
created_at      | datetime  | not null
updated_at      | datetime  | not null

## Routes

### HTML API

* `GET /` - loads React web app

### JSON API

#### User

* `GET /api/users/:userId`
* `POST /api/users`

#### Session

* `POST /api/session`
* `DELETE /api/session`

#### Customer

* `GET /api/customers`
* `GET /api/customers/:customerId`

#### Usage

* `GET /api/usage`
(Pass customerId, etc as parameters. Not using this route on frontend currently.)

#### Bill
* `GET /api/bills`
* `GET /api/bills/:billId`
* `POST /api/bills/`

### Frontend Routes

* `/welcome` - Login and Signup Page
* `/dashboard` - Main Dashboard with Overage Bill Index
* `/bills/:id` - Bill Show Page
* `/customers` - Customer Index
* `/customers/:id` - Customer Show Page with Usage

### In Progress
The following requires only 2-3 more hours to complete:

* Finalize business logic on creating a bill (checking over 3 months, verifying overage calculations).
* Give Finance users the permission to submit a FINAL bill.
* Give Customer Success and Sales "APPROVE" and "REJECT" actions.

### Future Implementation
* Error handling tied to thunk actions
* Testing
* Customer show page with usage graph

### Time Breakdown
As of Monday, February 5, 2018, 2:47am:
* Fully functioning implementation in only `12 hours and 5 minutes`!

![time-breakdown](/app/assets/images/time.png)

### Screenshots

![welcome](/app/assets/images/welcome.png)

![dashboard](/app/assets/images/dashboard.png)
