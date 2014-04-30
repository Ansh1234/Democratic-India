Ext.define("Hackathon.model.DiscussionForum",
		{
			extend: 'Ext.data.Model',
			
			
			config:{ 
		fields: [
		         {name:"Title"},
		         {name:"Content"},
		         {name:"date"},
		         {name:"Time"},
		         {name:"Posted"},
		         {name:"UpVotes"},
		         {name:"Sequence"},
		         ]
		         }
		}

);