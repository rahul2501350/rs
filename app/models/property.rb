class Property < ActiveRecord::Base
   attr_accessible :name, :address, :bedrooms

   acts_as_gmappable

   def gmaps4rails_address
   	"#{self.address}"
   	
   end
end
