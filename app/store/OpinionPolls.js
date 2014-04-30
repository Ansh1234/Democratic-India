Ext.define("Hackathon.store.OpinionPolls",
	{
		extend : 'Ext.data.Store',
		initialize: function()
		{
		
		},
		
		config : 
		{
			model: 'Hackathon.model.OpinionPolls',
		data : 
		[
        	{Question:"Should NightLife be extended upto 1 A.M",upvotes:"230",downvotes:"345",post_time:"About 24 hours ago"},
        	{Question:"Should FDI be brought in retail in India",upvotes:"530",downvotes:"445",post_time:"About 24 hours ago"},
        	{Question:"Should Reservation be done on the basis of caste system in Educational Sector",upvotes:"230",downvotes:"345",post_time:"About 24 hours ago"},
       		{Question:"Should NightLife be extended upto 1 A.M",upvotes:"230",downvotes:"345",post_time:"About 24 hours ago"}
		]
		}
		
	}
	
	);