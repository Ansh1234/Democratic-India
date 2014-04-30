Ext.define("Hackathon.store.MeetUps",
	{
		extend : 'Ext.data.Store',
		initialize: function()
		{
		
		},
		
		config : 
		{
			model: 'Hackathon.model.MeetUps',
		data : 
		[
        	{Title: "HealthCare", Speaker:"Dr. Bhushan Kumar, Health Minister", Venue: "Marathahalli", date: "Apr 04 2014", Time:"10:00 AM", image:"healthcare.png", No_of_people:"345"},
        	{Title: "Donate Online", Speaker:"Dr. Arun Kumar, Welfare Minister", Venue: "Total Mall, Domlur", date: "May 05 2014", Time:"10:00 AM", image:"donateonline.png", No_of_people:"236"},
        	{Title: "Globalization", Speaker:"Dr. Bhushan Kumar, Health Minister", Venue: "Marathahalli", date: "Apr 04 2014", Time:"10:00 AM", image:"globalization.png", No_of_people:"345"},
        	{Title: "Technology", Speaker:"Dr. Bhushan Kumar, Health Minister", Venue: "Marathahalli", date: "Apr 04 2014", Time:"10:00 AM", image:"technology2.png", No_of_people:"345"},
        	{Title: "Women Safety", Speaker:"Dr. Bhushan Kumar, Health Minister", Venue: "Marathahalli", date: "Apr 04 2014", Time:"10:00 AM", image:"women.png", No_of_people:"345"},
        	{Title: "Leadership", Speaker:"Dr. Bhushan Kumar, Health Minister", Venue: "Marathahalli", date: "Apr 04 2014", Time:"10:00 AM", image:"leadership.png", No_of_people:"345"},
      
        ]
		
		}
		
	}
	
	);