class PropertiesController < ApplicationController
  def index
  	@json = Property.search(params).to_gmaps4rails
  end

  def show
  end
end
