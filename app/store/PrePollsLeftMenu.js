 Ext.define("Hackathon.store.PrePollsLeftMenu",
	{
		extend : 'Ext.data.Store',
		initialize: function()
		{
		
		},
		
		config : 
		{
			model: 'Hackathon.model.PrePollsLeftMenu',
			data : [
					{MenuItems: "Candidates"},
			        {MenuItems: "Meet Ups"},
			        {MenuItems: "Post a Problem"},
			        {MenuItems: "Opinion Polls"},
			        {MenuItems: "Letters"},
			        {MenuItems: "Videos"},
			        {MenuItems: "Political News"},
			        {MenuItems: "Change Password"},
			        {MenuItems: "Logout"},
			    
			        
			
			       ]
		}
		
	}
	
	);