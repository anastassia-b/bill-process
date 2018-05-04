Types::CustomerType = GraphQL::ObjectType.define do
    name "CustomerType"
    field :id, !types.ID
    field :name, !types.String
    field :billing_address, types.String
    field :bills, types[Types::BillType]
    field :usage, types[Types::UsageType]
end
  
# query_string = 
# { 
#     customer(id: 1) {
#         id 
#         name 
#         billing_address 
#         bills
#     }
# }

# query_string = "{ customers { id } }"

# query_string = "
# {
#     customers {
#         id
#     }
# }
# "