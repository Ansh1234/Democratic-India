Ext.define("Hackathon.model.MeetUps",
		{
			extend: 'Ext.data.Model',
			
			
			config:{ 
		fields: [
		         {name:"Title"},
		         {name:"Speaker"},
		         {name:"Venue"},
		         {name:"date"},
		         {name:"Time"},
		         {name:"image"},
		         {name:"No_of_people"},
		         ]
		         }
		}

);