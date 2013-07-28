module ApplicationHelper

	def is_active?(page)
		if page == "search"
			if current_page?(controller: 'properties')
				return "<li class='active pill'>"
			else
				return "<li class = 'pill'>"
			end
			
		end
	end

end
