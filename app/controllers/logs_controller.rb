class LogsController < ApplicationController

  def index
    @logs = Log.all.order("created_at DESC")
  end

  def new
    @log = Log.new
  end

  def create
    @log = current_user.logs.new(log_params)
    if params[:lat] || params[:lng]
      if @log.save
        Location.create(lat: params[:lat], lng: params[:lng], log_id: @log.id)
      end
      redirect_to root_path
    else
      redirect_to new_log_path, notice: "位置情報が取得できませんでした。"
    end
  end

  private

  def log_params
    params.require(:log).permit(:name, :size, :place, :image)
  end

end
