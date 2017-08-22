class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: params
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render json: use
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  def create
    user = User.new(params[:user].permit(:user_attributes_here))
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end
end
