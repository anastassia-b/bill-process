class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user || User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user, new_token)
    user.okta_session_token!(new_token)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

  def require_finance_user
    if !(current_user.role == 'Finance')
      render json: {base: ['Do not have permission']}, status: 401
    end
  end

end
