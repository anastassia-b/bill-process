Types::BillActionType = GraphQL::ObjectType.define do
    name "BillActionType"
    field :id, !types.ID
    field :bill_id, !types.ID
    field :stakeholder_id, !types.Int
    field :action, types.String 
    field :comment, types.String
end
  