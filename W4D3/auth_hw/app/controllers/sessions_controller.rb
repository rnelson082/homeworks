class SessionsController < ApplicationController
  def create ##?
    user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )
    if user.nil?
      render json: 'Credentials were wrong'
    else
      login!(user)
      redirect_to user_usl(user)
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

  def new

  end
end
