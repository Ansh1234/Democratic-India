Ext.define("Hackathon.view.HomePage",
{
	extend: 'Ext.Container',
	
    xtype: 'homepage',
    id:'homepage',
    cls:'appbackground',
    config :

	{
	layout: 'hbox',

	
    	items: [
         {
                    xtype: 'toolbar',
                    layout:'hbox',
                    style:'padding:10px;height:60px;',
                    
                    docked:'top',
                    items:
                        [
                            {
                                xtype:'panel',
                                html:'<div style="margin-left:40px"><img height="47px" width="100px" style="float:left;margin-left:17px" src="resources/images/services/applogo.png"/></div>',
                                flex:1
                            },
                            {
                                xtype:'panel',
                            html:'<div style="font-size:22px;padding-top:5px;color:white;text-align:center;font-weight:bold">Democratic India</div>',
                            flex:12
                            }
                            
                         ]
                
                    
                },
    	  
              { 
                	flex:3,
                	
                	xtype: 'prepollsleftmenu',
                  style:'background:#0A63A1;color:white'
                	

              },
              {
                	xtype:'prepollsrightmenu',
                	flex:9,
                  style:''
              }
                
                
                
                         	        
                	        ]
	
	}});