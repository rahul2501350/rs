class PropertiesController < ApplicationController
  def index

    @ki = cookies[:ki]
  	@list = cookies[:list]
  	@properties = Property.search(params)
  	@json = Property.search(params).to_gmaps4rails
  end

  def show
  end
end
