Ext.define('Hackathon.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
   
    config: {
    cls:'appbackground', 

        items: 
        [
            {
                    xtype: 'toolbar',
                    layout:'hbox',
                    cls:'homepage_toolbar',
                    
                    docked:'top',
                    items:
                        [
                            {
                                xtype:'panel',
                                html:'<div class="homepage_toolbar_div"><img class="home_toolbar_image" src="resources/images/services/applogo.png"/></div>',
                                flex:1
                            },
                            {
                                xtype:'panel',
                                html:'<div class="homepage_toolbar_title">Democratic India</div>',
                                flex:12
                            }
                            
                         ]
                
                    
                },
       
            {
                xtype:'panel',
                layout:'hbox',
                cls:'homepage',
                items:
                    [
                        {
                            xtype:'panel',
                            flex:1,
                            html: "<div id='homepage_div'><img src='resources/images/123.png' id='homepage_image'></img></div>"
                        },
                       {
                        xtype:'register',
                        style:'padding:30px;',
                        id:'registerpanel',
                        flex:1
                        }  
                    ]
                

            }
          
         
        ]
    }
});
