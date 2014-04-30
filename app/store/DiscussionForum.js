Ext.define("Hackathon.store.DiscussionForum",
	{
		extend : 'Ext.data.Store',
		initialize: function()
		{
		
		},
		
		config : 
		{
			model: 'Hackathon.model.DiscussionForum',
		data : [
        {Title: "Electricity not there in Murgeshpalya for past 24 hours", Content:"", date: "21 Feb 2014", time: "10:00 PM", Posted:"Anshul", UpVotes:"345", Sequence:"1"},
        {Title: "Facing Water Problems in Kormangla for nearly a month", Content:"", date: "21 Feb 2014", time: "10:00 PM", Posted:"Anshul", UpVotes:"5463", Sequence:"2"},
        {Title: "The condition of Roads is very bad from Domlur to Marathahalli", Content:"", date: "21 Feb 2014", time: "10:00 PM", Posted:"Anshul", UpVotes:"64", Sequence:"3"},

        ]
		
		}
		
	}
	
	);