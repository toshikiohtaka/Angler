class MapsController < ApplicationController

  def index
    @logs = Log.all.includes(:map).order("created_at DESC")
  end

  def create
  end

end
