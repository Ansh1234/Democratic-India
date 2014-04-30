Ext.define('Hackathon.view.Register', {
    extend: 'Ext.Panel',
    xtype: 'register',
    style:'padding:30px;margin:30px',
    config:
    {
    style:'padding:30px',
    	 items:
    	            		   [
    	            		    
    	            		  {
                                    layout:'hbox',
                                    style:'margin-top:0px',
                                    height:'25%',
                                    cls:'login_fields_individual',
                                    style:'border:2px solid #0A63A1',
                                        items:[
                                                {
                                                    cls:'majorbackground',
                                                    xtype:'panel',
                                                html:'<img width="40px" height="40px" style="margin-left:30px;margin-top:5px" src="resources/images/services/user.png"></img>',

                                                

flex:2
                                                },
                                                {
                                                    xtype:'textfield',
                                                    placeHolder:'Enter your Name',
                                                    flex:8,
                                                    cls:'desktop_internetbanking_textfield',
                                                    id:'register_name'
                                                }
                 
                                                ]
                                },
    	            		    {
    	            		    	layout:'hbox',
    	            		    	style:'margin-top:0px',
    	            		    	height:'25%',
    	            		    	cls:'login_fields_individual',
                                    style:'border:2px solid #0A63A1',
    	            		    		items:[
    	            		    		       	{
    	            		    		       		cls:'majorbackground',
    	            		    		       		xtype:'panel',
    	            		    		       	html:'<img width="40px" height="40px" style="margin-left:30px;margin-top:5px" src="resources/images/icons/username.png"></img>',

    	            		    		       	

flex:2
    	            		    		       	},
    	            		    		       	{
    	            		    		       		xtype:'textfield',
    	            		    		       		placeHolder:'Enter your Username',
    	            		    		       		flex:8,
    	            		    		       		cls:'desktop_internetbanking_textfield',
    	            		    		       		id:'register_username'
    	            		    		       	}
    	         
    	            		    		       	]
    	            		    },
    	            		    {
    	            		    	layout:'hbox',
    	            		    	style:'margin-top:0px',
    	            		    	height:'25%',
    	            		    	cls:'login_fields_individual',
                                    style:'border:2px solid #0A63A1',
    	            		    		items:[
    	            		    		       	{
    	            		    		       	cls:'majorbackground',
    	            		    		       		xtype:'panel',
    	            		    		       		html:'<img width="40px" height="40px" style="margin-left:30px;margin-top:5px" src="resources/images/icons/password.png"></img>',
    	            		    		       		flex:2
    	            		    		       	},
    	            		    		       	{
    	            		    		       		xtype:'passwordfield',
    	            		    		       		placeHolder:'Enter your Password',
    	            		    		       		flex:8,
    	            		    		       		cls:'desktop_internetbanking_textfield',
    	            		    		       		id:'register_password'
    	            		    		       	}
    	         
    	            		    		       	]
    	            		    },
                                            
    	            	      {
                                    layout:'hbox',
                                    style:'margin-top:0px',
                                    height:'25%',
                                   cls:'majorbackground',
                                   style:'border:2px solid #0A63A1',
                                        items:[
                                                {
                                                    cls:'login_fields_individual_image',
                                                    xtype:'panel',
                                                    html:'<img width="40px" height="40px" style="margin-left:30px;margin-top:5px" src="resources/images/services/states.png"></img>',
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
                          listeners:
                      {
                            change :function(select,newState,oldState)
                                {
                                     var store=Ext.getStore('MadhyaPradesh');
                        console.log(Hackathon.app.stateobj);    
                        console.log(typeof(Hackathon.app.stateobj));
                        for (obj in Hackathon.app.stateobj)
                        {
                            console.log(Hackathon.app.stateobj[obj]);
                            var x= Hackathon.app.stateobj[obj][newState];
                            console.log(x);
                            console.log(typeof(x));
                            if(typeof(x)==='undefined')
                                console.log("false");
                            else
                            {
                                var k=JSON.parse(x);
                            store.removeAll();
                            store.sync();
                                for(l in k)
                                {
                                    console.log(k[l].constituency_name);
                                   
                                    var myitem={"Constituency_Name":k[l].constituency_name};
                                    store.add(myitem);
                                }
                            }
                        }
                            
                            Ext.getCmp('constituency_name').setStore(newState);
                             Ext.getCmp('constituency_name').setDisplayField(Constituency_Name);
                       // //     Ext.getCmp('constituency_name').setValue("anshul");
                            
                       //      var statesStore = Ext.getStore('States');
                       //      var i =0;
                       //      var statesname = 0;
                       //      while(statesename != newState){
                       //       statesname = statesStore.getAt(i).get('State_Name');
                       //       i+=1;
                       //       }
                                          }
                       }
                         }
                 
                                                ]
                                },
                                {
                                    layout:'hbox',
                                    style:'margin-top:0px',
                                    height:'25%',
                                  cls:'majorbackground',
                                  style:'border:2px solid #0A63A1',
                                        items:[
                                                {
                                                    cls:'login_fields_individual_image',
                                                    xtype:'panel',
                                                    html:'<img width="40px" height="40px" style="margin-left:30px;margin-top:5px" src="resources/images/services/state.png"></img>',
                                                    flex:2
                                                },
                                               {  
                             xtype: "selectfield",
                             store: "MadhyaPradesh", 
                             displayField: "Constituency_Name",
                             valueField: "Constituency_Name" ,
                             cls:'tablet_internetbanking_textfield',
                             flex:8,
                             id:'constituency_name',
                          listeners:
                      {
                            change :function(select,newPayeeName,oldPayeeName)
                                {
                            var payeeStore = Ext.getStore('Payees');
                                                         }
                       }
                         }
                 
                                                ]
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
                            },
                             
                        ]
                },
               
    	            	]
    }


 });