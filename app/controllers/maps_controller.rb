class MapsController < ApplicationController

  def index
    @logs = Log.all.includes(:map)
  end

  def create
  end

end
