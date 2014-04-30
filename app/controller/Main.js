Ext.define("Hackathon.controller.Main",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    				gotoregister:'#gotoregister',
                    PrePollsLeftMenu:'prepollsleftmenu',
                    register:'#register',
                    login:'#login',
                    yes:'[cls=yes]',
                    morebutton:'[cls=morebutton]',
                    buttons:'letters button',
                    morebutton1:'#letters button',
                   
                    recentposts:'#recentposts',
                    register_state:'#register_state',
                   
                    
    					
    			},
    		control:
    			{
    				gotoregister:
    					{
    						tap:'GoToRegister'
    					},
                    PrePollsLeftMenu:
                        {
                               itemtap: 'listItemClick'
                        },
                   
                    yes: 
                        {
                            tap: 'Cls'
                        },
                    login:
                        {
                            tap:'Login'
                        },
                    register:
                        {
                            tap:'Register'
                        },
                   
                   
                    morebutton1:
                        {
                            tap:'MoreButton1'
                        },
                   
                    recentposts:
                        {
                           initialize:'RecentPosts'
                        },
                    register_state:
                        {
                            change:'Change_State'
                        },
                   


    			},
                        
                        
            },

       

          Change_State:function(select,newState,oldState)
          {
            
             var store=Ext.getStore('Constituencies');
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
          },
          RecentPosts:function(component,options)
          {

                var discussionStore = Ext.getStore('DiscussionForum');
                var length=discussionStore.getCount();
                            
                          
                          /*   var payeename=payeeStore.getAt(i).get('PayeeName');
                             var accountnumber=payeeStore.getAt(i).get('AccountNumber');
                             var accountbank=payeeStore.getAt(i).get('AccountBank');
                             var accountbranchname=payeeStore.getAt(i).get('AccountBranchName');
                             var accountbranchcode=payeeStore.getAt(i).get('AccountBranchCode');
                     */
        for(var i=length-1;i>=0;i--)
        {
            var title=discussionStore.getAt(i).get('Title');
            var posted=discussionStore.getAt(i).get('Posted');
            var date=discussionStore.getAt(i).get('date');
            var upvotes=discussionStore.getAt(i).get('UpVotes');
            var panel=[
                   {
                        xtype:'panel',
                        cls:'opinionpolls',
                        
                        items:
                            [
                               
                                {
                                    xtype:'label',
                                    id:'title',
                                    
                                    cls:'opinionpolls_title'
                                },
                                {
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                flex:1,
                                                cls:'container',
                                                items:
                                                [
                                                 
                                                    {
                                                         xtype:'button',
                                                         ui:'plain',
                                                         cls:'yes',
                                                         style:'width:60px;height:50px; background: url("resources/images/yes.png") no-repeat;'
                                },
                                                ]
                                            },
                                          {
                                                flex:1,
                                                items:
                                                [
                                                    {
                                                        xtype:'label',
                                                        html:'567',
                                                        cls:'nonumber',
                                                        style:'font-size:14px',
                                                        id:'upvotes'
                                                    },
                                             
                                                ]
                                            },
                                        
                                            {
                                                flex:8
                                            },
                                            {
                                                flex:4,
                                                items:
                                                    [   
                                                        {
                                                            xtype:'label',
                                                            id:'posted',
                                                              style:'font-size:14px'
                                                        },
                                                        {
                                                            xtype:'label',
                                                            id:'date',
                                                              style:'font-size:14px'
                                                        }
                                                    ]
                                            }
                                        ]
                                }
                            ]
                   }
                 ];

                 component.add(panel);
                 Ext.getCmp('title').setHtml(title);
                 Ext.getCmp('posted').setHtml("Posted By:"+posted);
                 Ext.getCmp('date').setHtml("Date"+date);
                 Ext.getCmp('upvotes').setHtml(upvotes);
             }
 
          },
          Update:function(component)
          {
               Ext.getCmp('recentposts').removeAll(true);
              var discussionStore = Ext.getStore('DiscussionForum');
                var length=discussionStore.getCount();
                            
                          
                          /*   var payeename=payeeStore.getAt(i).get('PayeeName');
                             var accountnumber=payeeStore.getAt(i).get('AccountNumber');
                             var accountbank=payeeStore.getAt(i).get('AccountBank');
                             var accountbranchname=payeeStore.getAt(i).get('AccountBranchName');
                             var accountbranchcode=payeeStore.getAt(i).get('AccountBranchCode');
                     */
        for(var i=length-1;i>=0;i--)
        {
            var title=discussionStore.getAt(i).get('Title');
            var posted=discussionStore.getAt(i).get('Posted');
            var date=discussionStore.getAt(i).get('date');
            var upvotes=discussionStore.getAt(i).get('UpVotes');
            var panel=[
                   {
                        xtype:'panel',
                        cls:'opinionpolls',
                        
                        items:
                            [
                               
                                {
                                    xtype:'label',
                                    id:'title',
                                    
                                    cls:'opinionpolls_title'
                                },
                                {
                                    xtype:'panel',
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                                flex:1,
                                                cls:'container',
                                                items:
                                                [
                                                 
                                                    {
                                                         xtype:'button',
                                                         ui:'plain',
                                                         cls:'yes',
                                                         style:'width:60px;height:50px; background: url("resources/images/yes.png") no-repeat;'
                                },
                                                ]
                                            },
                                          {
                                                flex:1,
                                                items:
                                                [
                                                    {
                                                        xtype:'label',
                                                        html:'567',
                                                        cls:'nonumber',
                                                        style:'font-size:14px',
                                                        id:'upvotes'
                                                    },
                                             
                                                ]
                                            },
                                        
                                            {
                                                flex:8
                                            },
                                            {
                                                flex:4,
                                                items:
                                                    [   
                                                        {
                                                            xtype:'label',
                                                            id:'posted',
                                                              style:'font-size:14px'
                                                        },
                                                        {
                                                            xtype:'label',
                                                            id:'date',
                                                              style:'font-size:14px'
                                                        }
                                                    ]
                                            }
                                        ]
                                }
                            ]
                   }
                 ];

                 component.add(panel);
                 Ext.getCmp('title').setHtml(title);
                 Ext.getCmp('posted').setHtml("Posted By:"+posted);
                 Ext.getCmp('date').setHtml("Date"+date);
                 Ext.getCmp('upvotes').setHtml(upvotes);
             }
          },
            Cls:function(button,e,opts)
            {   
                button.up.hide();
            },
            GoToRegister:function()
                {
                
                 //  $('#loginpanel').slideUp(1000);
                   //$('#registerpanel').slideDown(1000);
                   Ext.getCmp('loginpanel').hide();
                   Ext.getCmp('registerpanel').show()
                   Ext.getCmp('gotoregister').hide();
                },

        listItemClick: function(list, index, element, event) 
        {
        
         var record =list.getItemAt(index).getId();
         if(record=='ext-simplelistitem-1')
             {

            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Meet Ups</div>',
              xtype:'meetups'
           });
             }
             
             else if(record=='ext-simplelistitem-2')
             {
            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Post a Problem</div>',
              xtype:'discussionforum'
           });
             }
          else if(record=='ext-simplelistitem-3')
             {
            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Opinion Polls</div>',
              xtype:'opinionpolls'
           });
             }
              else if(record=='ext-simplelistitem-4')
             {
            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Letters</div>',
              xtype:'letters'
           });
             }
               else if(record=='ext-simplelistitem-5')
             {
            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Videos</div>',
              xtype:'videos'
           });
             }
        },

        Register:function()
            {
        Ext.Ajax.on("beforerequest", function()
        {
            $("#spinner").fadeIn('fast');
        });

        Ext.Ajax.on("requestcomplete", function(){
             $("#spinner").hide();
        });

                 var username=Ext.getCmp('register_username').getValue();
                 var password=Ext.getCmp('register_password').getValue();
                 if(username=="" || password=="")
                     Ext.Msg.alert("Message","Enter all fields");
                 else
                 {

                  Ext.Ajax.request({
     url: 'resources/startup/netainfo.php',
    type: 'POST',
    dataType: "json",
    success: function(data){
      responseText=data.responseText;
      responseText_json=JSON.parse(responseText);
      name_array=responseText_json[0].name;
      link_array=responseText_json[1].link;
      for(individual in name_array)
        {
            console.log(name_array[individual]);
            console.log(link_array[individual]);
        }
        var constituency_name= Ext.getCmp('constituency_name').getValue().toUpperCase();
        var index=name_array.indexOf(constituency_name);
        console.log(link_array[index]);


         Ext.Ajax.request(
         {
            url:'resources/startup/cons.php',
            type:"POST",
            dataType:"json",
            params: {"url": link_array[index]},
            success:function(data)
            {
                Ext.Viewport.setActiveItem(Ext.create('Hackathon.view.HomePage'));
                console.log("In success");
                data=data.responseText;
                json=JSON.parse(data);
                var names=json[0].name;
                var party=json[1].party;
                var cases=json[2].cases;
                var education=json[3].education;
                var age=json[4].age;

                for(index in names)
                {
                    console.log(names[index]);
                    console.log(party[index]);
                    console.log(cases[index]);
                    console.log(education[index]);
                    console.log(age[index]);
                }
                
                
            },

         });

    }
   
});
                
               
                // 

           } },
        Login:function()
            {
                var username=Ext.getCmp('login_username').getValue();
                var password=Ext.getCmp('login_password').getValue();
                if(username=="" || password=="")
                    Ext.Msg.alert("Message","Enter all the fields");
                else
                Ext.Viewport.setActiveItem(Ext.create('Hackathon.view.HomePage'));
            },
        MoreButton:function(button)
            {
                alert(button.setText("Voted"));
            },
        MoreButton1:function(button)
            
              {
                  var politicians_names=["Rahul Gandhi","Sonia Gandhi","Nandan Nilekani"];
                var politicians_designation=["AICC Vice President","UPA ChairPerson","MP from South Bangalore"];
             
               //  console.log(button.id);
            Hackathon.app.state='false';
            Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">Letters</div>',
              xtype:'letter1'
           });
             Ext.getCmp('name_politician').setHtml(politicians_names[button.id]);
             Ext.getCmp('designation_politician').setHtml(politicians_designation
             [button.id]);
            },
            
       	
    	
    	
    	


    	
    	
    	

    

   
});