class AnglersController < ApplicationController
  def show
    @logs = current_user.logs.order("created_at DESC")
  end
end
