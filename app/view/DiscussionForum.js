Ext.define("Hackathon.view.DiscussionForum",
{
	extend: 'Ext.tab.Panel',
	xtype:'discussionforum',
	height:'100%',
        id:'discussionforum',
	
	config:
		{
		
		
			
                	    	  
                	     
                	    	  
                	    	   items: [
                	    	          
                	    	         {
                                                   title: "<div style='font-size:17px;padding:0px 5px'>Popular Posts</div>",
                                                       xtype:'popularposts',
                                                        style:'height:100%'
                                                                         
                                                },      {
                	    	        	   title: "<div style='font-size:17px;padding:0px 5px'>Recent Posts</div>",
                	    	        	 	xtype:'recentposts',
                	    	        	 	style:'height:100%'
                	    	        	   			 
                	    	           	},
                	    	               {
                                                        title:"<div style='font-size:17px;padding:0px 5px'>Write a Post</div>",
                                                        xtype:'writeapost',
                                                        style:'height:100%;padding:25px'
                                                }
                                                ]
                	    
              
}	});


