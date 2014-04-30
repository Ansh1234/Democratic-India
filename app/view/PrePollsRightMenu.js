Ext.define("Hackathon.view.PrePollsRightMenu",
{
	extend: 'Ext.navigation.View',
	xtype:'prepollsrightmenu',
	height:'100%',
	id:'navigateview_tablet',

	
onBackButtonTap: function (me) 
{
	 

	

	if(Hackathon.app.state=="true")
	{
	Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(true);	
	Ext.getCmp('navigateview_tablet').reset();
}
	else if(Hackathon.app.state=="false")
	{
		
		Ext.getCmp('navigateview_tablet').pop();
		Hackathon.app.state='true;'
	}

	//alert(x);
   // view.pop();
},
	config:
		{
		style:'height:100%',
		navigationBar:
			{
				hidden:true
			},
			layout:'card',
			items:
				[
				{
					layout:'vbox',
					items:[
				

				 {
				 	xtype:'lowerhalf',
				 	flex:4,
				 	style:'padding:10px'
				 }]
				}
				 
				]
		}
		
	});


