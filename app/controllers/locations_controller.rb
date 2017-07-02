class LocationsController < ApplicationController
  def index
    @logs = Log.all.includes(:location, :user).order("created_at DESC")
  end

  def create
  end
end
