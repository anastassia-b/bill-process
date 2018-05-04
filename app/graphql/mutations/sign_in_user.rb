class Mutations::SignInUser < GraphQL::Function 

    argument :user, !Inputs::AuthProviderUserInput

    type do 
        name 'SignInPayload'

        field :token, types.String 
        field :user, Types::UserType
    end

    def call(obj, args, ctx)
        input = args[:user]
        return unless input 

        user = User.find_by(name: input[:name])
        return unless user 
        # return unless user.authenticate(input[:password])

        OpenStruct.new({
            token: AuthToken.token(user),
            user: user
        })
    end

end