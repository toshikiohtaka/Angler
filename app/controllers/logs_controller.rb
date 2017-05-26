class LogsController < ApplicationController

  before_action :authenticate_user!, except: :index

  def index
  end

  def new
  end

  private
  def move_to_index
    redirect_to "devise/sessions/new.html" unless user_signed_in?
  end
end
