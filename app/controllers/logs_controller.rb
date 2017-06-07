class LogsController < ApplicationController

  def index
    @logs = Log.all
  end

  def new
    @log = Log.new
  end

  def create
    @log = current_user.logs.new(log_params)
    if @log.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def log_params
    params.require(:log).permit(:name, :size, :place, :image)
  end

end
