# BillProcess

BillProcess is a full-stack app that lets different internal stakeholders efficiently process monthly customer bills. It is built with Ruby on Rails, PostgreSQL, and React/Redux.

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
customer_ id    | integer   | not null, foreign key (references customers), indexed
month           | integer   |
year            | integer   |
overage_units   | integer   |
overage_unit_cost  | integer |
overage_amount  | integer |
status      | string   |
created_at  | datetime |
updated_at  | datetime |

A bill's overage_unit cost by default will be a customer's overage_unit_cost, but could be altered for flexibility. Therefore, overage_unit_cost is stored in two models.

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

* `GET /api/customers/:customerId`
* `POST /api/customers`
* `PATCH /api/customers/:customerId`

#### Usage


#### Bill
