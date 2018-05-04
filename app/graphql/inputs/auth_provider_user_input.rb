Inputs::AuthProviderUserInput = GraphQL::InputObjectType.define do
    name 'AUTH_PROVIDER_USER'
  
    argument :name, !types.String
    argument :password, !types.String
  end