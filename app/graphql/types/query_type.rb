Types::QueryType = GraphQL::ObjectType.define do
  name "Query"

  field :customers, !types[Types::CustomerType] do
    resolve -> (obj, args, ctx) {
      Customer.all
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