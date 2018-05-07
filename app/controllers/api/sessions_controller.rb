class Api::SessionsController < ApplicationController
  # add require logged out
  
  def create
    @user = User.find_by_credentials(
      params[:user][:name],
      'password'
    )

    if @user
      token = params[:user][:token]
      if token 
        login(@user, params[:user][:token])
        ExampleMailer.sample_email(@user).deliver

        render "api/users/show"
      else 
        render json: ["No session token provided"], status: 401
      end
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["No one is logged in"], status: 404
    end
  end
end
