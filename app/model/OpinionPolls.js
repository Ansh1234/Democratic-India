Ext.define("Hackathon.model.OpinionPolls",
		{
			extend: 'Ext.data.Model',
			
			
			config:{ 
		fields: [
		         {name:"Question"},
		         {name:"upvotes"},
		         {name:"downvotes"},
		         {name:"post_time"},
		        
		         ]
		         }
		}

);