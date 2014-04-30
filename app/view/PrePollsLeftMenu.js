Ext.define("Hackathon.view.PrePollsLeftMenu",
	{
		extend : 'Ext.dataview.List',
		xtype  : 'prepollsleftmenu',
		requires : ['Hackathon.store.PrePollsLeftMenu'],
	defaults: {
	      styleHtmlContent: true
	    },
		config : 
		{
			itemTpl: '<div style="height:50px;padding-top:10px;color:white">{MenuItems}</div>',
			store : 'PrePollsLeftMenu',
			scrollabe: false
			
			
		}
		
	});