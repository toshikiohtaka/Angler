class AnglersController < ApplicationController
  def show
    @logs = current_user.logs
  end
end
