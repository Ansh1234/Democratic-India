Ext.define('Hackathon.view.Register', 
    {
        extend: 'Ext.Panel',
        xtype: 'register',
        config:
            {
                style:'padding:30px',
    	        items:
    	            [
                     {
                   xtype:'panel',
                   html:'<div style="display:none" id="spinner" class="spinner" ;"><img id="img-spinner" src="resources/images/ajax-loader3.GIF" alt="Loading"/></div>'
               },
                    {
    	            	layout:'hbox',
    	            	cls:'border_login_input',
    	            		items:[
    	            		    {
    	            		    	cls:'majorbackground',
    	            		    	xtype:'panel',
    	            		    	html:'<img class="icons" src="resources/images/icons/username.png"></img>',
                                    flex:2
    	            		    },
    	            		    {
    	            		    	xtype:'textfield',
    	            		    	placeHolder:'Enter your Username',
    	            		    	flex:8,
    	            		    	cls:'desktop_internetbanking_textfield',
    	            		    	id:'register_username'
    	            		    }]
    	            },
    	            {
    	            	layout:'hbox',
    	            	cls:'border_login_input',
                            items:[
    	            		    {
    	            		    	cls:'majorbackground',
    	            		    	xtype:'panel',
    	            		    	html:'<img class="icons" src="resources/images/icons/password.png"></img>',
    	            		    	flex:2
    	            		    },
    	            		    {
    	            		    	xtype:'passwordfield',
    	            		    	placeHolder:'Enter your Password',
    	            		    	flex:8,
    	            		    	cls:'desktop_internetbanking_textfield',
    	            		    	id:'register_password'
    	            		    }]
    	            },
                    {
                        layout:'hbox',
                        cls:'border_login_input',
                            items:[
                                {
                                    cls:'majorbackground',
                                    xtype:'panel',
                                    html:'<img class="icons" src="resources/images/services/states.png"></img>',
                                    flex:2
                                },
                                {  
                                    xtype: "selectfield",
                                    store: "States", 
                                    displayField: "State_Name",
                                    valueField: "State_Name" ,
                                    cls:'tablet_internetbanking_textfield',
                                    flex:8,
                                    id:'register_state',
                                }]
                    },
                    {
                        layout:'hbox',
                        cls:'border_login_input',
                            items:[
                                {
                                    cls:'login_fields_individual_image',
                                    xtype:'panel',
                                    cls:'majorbackground',
                                    html:'<img class="icons" src="resources/images/services/states.png"></img>',
                                    flex:2
                                },
                                {  
                                    xtype: "selectfield",
                                    store: "Constituencies", 
                                    displayField: "Constituency_Name",
                                    valueField: "Constituency_Name" ,
                                    cls:'tablet_internetbanking_textfield',
                                    flex:8,
                                    id:'constituency_name',
                    }]
                    },
                    {
                        items:
                            [
                                {
                                    xtype:'button',
                                    html:'<div style="text-align:center;padding:10px;color:white">Register</div>',
                                    flex:1,
                                    id:'register',
                                    style:'margin-top:10px;background:#0A63A1'
                                }]
                    }]
            }
        });