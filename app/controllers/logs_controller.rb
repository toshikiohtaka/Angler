class LogsController < ApplicationController

  def index
    @logs = Log.all.order("created_at DESC")
  end

  def new
    @log = Log.new
  end

  def create
    @log = current_user.logs.new(log_params)
    if @log.save
      if params[:lat] || params[:lng]
        Map.create(lat: params[:lat], lng: params[:lng], log_id: @log.id)
      end
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
