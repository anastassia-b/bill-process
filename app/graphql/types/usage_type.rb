Types::UsageType = GraphQL::ObjectType.define do
    name "UsageType"
    field :id, !types.ID
    field :customer_id, !types.Int
    field :status, types.String
    field :month, types.Int
    field :year, types.Int
    field :api_usage, types.Int
end
