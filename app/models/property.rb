class Property < ActiveRecord::Base
   attr_accessible :name, :address, :bedrooms,:price, :gmaps, :longitude, :latitude

   acts_as_gmappable

   def gmaps4rails_address
   	"#{self.address}"
   	
   end

   def gmaps4rails_infowindow
      # add here whatever html content you desire, it will be displayed when users clicks on the marker
      "#{self.address}"
   end

   def self.search(query)
	   	if (query[:search].present?)
	        where('address LIKE ?', "%#{query[:search]}%")
	    else
	    	all    
	    end    
   end

end
