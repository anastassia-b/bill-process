class Api::UsersController < ApplicationController
  #add require logged out
  
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      Analytics.identify(
        user_id: "#{@user.id}",
        traits: { 
          name: "#{@user.name }",
          role: "#{@user.role }"
        }
        )
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

    # For debugging:
    # Analytics.identify( user_id: "#{user1.id}", traits: { name: "#{ user1.name }", role: "#{ user1.role }"})
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :password, :email, :role)
  end
end
