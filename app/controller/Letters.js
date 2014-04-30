Ext.define("Hackathon.controller.Letters",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			letters:'letters',
    					
    			},
    		control:
    			{
    			 letters:
                    {
                        initialize:'Initialize'
                    }
    			},
                        
                        
        },
        Initialize:function()
            {
               var politicians_names=["Rahul Gandhi","Sonia Gandhi","Nandan Nilekani"];
               var politicians_designation=["AICC Vice President","UPA ChairPerson","MP from South Bangalore"];
               var politicians_images=["rahul.jpg","sonia.jpg","nandan.jpg"]
                   
            for(var i=0;i<3;i++)
            {
            var panel  =    
                {
                        flex:1,
                        items : [
                                {
                                   
                                   style:'background:#388bd1;margin:15px;height:350px;-webkit-transition:width 2s;transition:width 2s;',
                                   layout:'vbox',
                                   id:'front',
                                   items:
                                   [
                                        {
                                            
                                            flex:3,
                                            style:'margin:10px 60px',
                                            id:'politician_image'
                                            
                                        },
                                        {
                                            xtype:'label',
                                            id:'politican_name',
                                            flex:1,
                                            style:'color:white;text-align:center;font-size:24px;margin-bottom:20px'
                                        },
                                        {
                                            xtype:'label',
                                            id:'politician_designation',
                                            flex:1,
                                            style:'color:white;text-align:center;font-size:20px;margin-bottom:20px'
                                        },
                                        {
                                            xtype:'button',
                                            html:'More',
                                            style:'width:50%;margin-left:25%',
                                            id:""+i,
                                            docked:'bottom',
                                            ui:'action',

                                
                                        }
                                        
                                        
                                        
                                   ]
                          
                               }, 
                            
                     ] }
                Ext.getCmp('letters').add(panel);
                Ext.getCmp('politican_name').setHtml(politicians_names[i]);
                Ext.getCmp('politician_designation').setHtml(politicians_designation[i]);
                Ext.getCmp('politician_image').setHtml('<img width="155px" height="150px" src="resources/images/'+politicians_images[i]+'"/>');
                 }
                     }
            

         
});