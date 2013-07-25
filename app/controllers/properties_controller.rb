class PropertiesController < ApplicationController
  def index
  	@json = Property.all.to_gmaps4rails
  end

  def show
  end
end
