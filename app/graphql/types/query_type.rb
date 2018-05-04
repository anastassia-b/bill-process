Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :customers, !types[Types::CustomerType] do
    resolve -> (obj, args, ctx) {
      Customer.all
    }
  end

  field :usage, !types[Types::UsageType] do 
    resolve -> (obj, args, ctx) {
      Usage.all
    }
  end

  field :bills, !types[Types::BillType] do 
    resolve -> (obj, args, ctx) {
      Bill.all
    }
  end

  field :users, !types[Types::UserType] do 
    resolve -> (obj, args, ctx) {
      User.all
    }
  end

  field :bill_actions, !types[Types::BillActionType] do 
    resolve -> (obj, args, ctx) {
      BillAction.all
    }
  end

 
  field :testField, types.String do
    description "An example field added by the generator"
    resolve ->(obj, args, ctx) {
      "Hello World!"
    }
  end
end

# field :customer do 
#   type CustomerType
#   argument :id, !types.ID 
#   description "Find a customer by ID"
#   resolve ->(obj, args, ctx) { Customer.find(args["id"])}
# end