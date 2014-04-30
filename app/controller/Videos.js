Ext.define("Hackathon.controller.Videos",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			videos:'videos',
    					
    			},
    		control:
    			{
    			 videos:
                    {
                        initialize:'Initialize'
                    }
    			},
                        
                        
        },
        Initialize:function()
            {
               var politicians_names=["Rahul Gandhi, AICC President","Sonia Gandhi, UPA ChairPerson","Nandan Nilekani, MP from South Bangalore"];
               var politicians_designation=["AICC Vice President","UPA ChairPerson","MP from South Bangalore"];
               var politicians_images=["rahul_youtube.png","sonia_youtube.png","nandan_youtube.png"]
               var videos_posted=["24 Mar 2014", "25 Feb 2014", "13 Jan 2014"];
               var videos_content=["In this Video Rahul Gandhi, AICC President, The changes brought by Modi in the period 2002–2007 has led to Gujarat being called an attractive investment destination. Aditi Phadnis, author of Political Profiles of Cabals & Kings and columnist in the Business Standard, writes that there was sufficient anecdotal evidence pointing to the fact that corruption had gone down significantly in the state.","In this Video Sonia Gandhi, the UPA ChairPerson, The changes brought by Modi in the period 2002–2007 has led to Gujarat being called an attractive investment destination. Aditi Phadnis, author of Political Profiles of Cabals & Kings and columnist in the Business Standard, writes that there was sufficient anecdotal evidence pointing to the fact that corruption had gone down significantly in the state.","In this Video Nandan Nilekani, MP from South Bangalore, The changes brought by Modi in the period 2002–2007 has led to Gujarat being called an attractive investment destination. Aditi Phadnis, author of Political Profiles of Cabals & Kings and columnist in the Business Standard, writes that there was sufficient anecdotal evidence pointing to the fact that corruption had gone down significantly in the state."]    
            for(var i=0;i<3;i++)
            {
            var panel  =    
                {
                        xtype:'panel',
                        style:'margin-top:35px;border:2px solid black',
                        layout:'hbox',
                        items:
                            [
                                {
                                    xtype:'panel',
                                    html:'<img src="resources/images/rahul_youtube.png" width="400px" height="250px"/>',
                                    flex:1,
                                    id:'politician_image'
                                },
                                {
                                    xtype:'panel',
                                    flex:1,
                                    items:
                                        [
                                            {
                                                xtype:'label',
                                                id:'politician_name',
                                                html:'Rahul Gandhi, AICC Vice President',
                                                style:'margin-bottom:20px;margin-top:20px;padding-top:10px;font-weight:bold'
                                            },
                                            {
                                                xtype:'label',
                                                html:'Posted on: 24 Mar 2014',
                                                id:'video_posted',
                                                docked:'bottom',
                                                style:'margin-top:25px;font-size:14px'
                                            },
                                            {
                                                xtype:'label',
                                                id:'video_content',
                                                style:'font-size:16px',
                                                html:'In this Video Rahul Gandhi, the AICC Vice President, The changes brought by Modi in the period 2002–2007 has led to Gujarat being called an attractive investment destination. Aditi Phadnis, author of Political Profiles of Cabals & Kings and columnist in the Business Standard, writes that "there was sufficient anecdotal evidence pointing to the fact that corruption had gone down significantly in the state... '
                                            }
                                        ]
                                }
                            ]
                    };
                Ext.getCmp('videos').add(panel);
                Ext.getCmp('politician_image').setHtml('<img src="resources/images/'+politicians_images[i]+'" width="400px" height="250px"/>');
                Ext.getCmp('politician_name').setHtml(politicians_names[i]);
                Ext.getCmp('video_posted').setHtml(videos_posted[i]);
                Ext.getCmp('video_content').setHtml(videos_content[i]);
                  }
                     }
            

         
});