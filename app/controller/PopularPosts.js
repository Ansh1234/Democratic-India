Ext.define("Hackathon.controller.PopularPosts",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    				
                    popularposts:'#popularposts',
                     writeapost:'#writeapost',
                     discussionforum:'#discussionforum'
    					
    			},
    		control:
    			{
    			
                    popularposts:
                        {
                            initialize:'PopularPosts',
                            

                        },
                    writeapost:
                        {
                            tap:'WriteaPost'
                        },
                    discussionforum:
                        {
                           itemtap:'PopularPost',
                           activeitemchange:'Check'
                         //  :'PopularPost'
                        }

    			},
                        
                        
            },
            Check:function(tabPanel,newtab,oldtab)
            {
              var name=newtab.config.title;
           

              if(name=="<div style='font-size:17px;padding:0px 5px'>Popular Posts</div>")
              {
                
                var options;
                Hackathon.app.getController('Hackathon.controller.PopularPosts').Update(newtab);
              }
              else if(name=="<div style='font-size:17px;padding:0px 5px'>Recent Posts</div>")
              {
                
                Hackathon.app.getController('Hackathon.controller.Main').Update(newtab);
              }
            },

          WriteaPost:function()
          {
            var title=Ext.getCmp('writeapost_title').getValue();
            var content=Ext.getCmp('writeapost_content').getValue();
            
            var myStore=Ext.getStore('DiscussionForum'); //storing the payee names in the store
            var storeitem={ 
                            Title: title,
                            Content:content,
                            UpVotes: 0,
                        
                            };
                        myStore.add(storeitem);
            Ext.Msg.alert("Message","Posted");
          },
          Update:function(component)
          {
          
            
            Ext.getCmp('popularposts').removeAll(true);
                var discussionStore = Ext.getStore('DiscussionForum');
                var len=discussionStore.getCount();
               
                var up_votes=new Array();
                var titles=new Array();
                var posted=new Array();
                var date =new Array();
                for(var i=0;i<len;i++)
                      {
                          up_votes[i]=discussionStore.getAt(i).get('UpVotes');
                          posted[i]=discussionStore.getAt(i).get('Posted');
                          date[i]=discussionStore.getAt(i).get('date');
                          titles[i]=discussionStore.getAt(i).get('Title');
                      }
                    
                for(var i=0;i<len;i++)
                      {
                        for( var j=0;j<len;j++)
                        {
                          if(Number(up_votes[i])<Number(up_votes[j]))
                          {
                            var temp=up_votes[i];
                            up_votes[i]=up_votes[j];
                            up_votes[j]=temp;

                             var temp=titles[i];
                            titles[i]=titles[j];
                            titles[j]=temp;

                            var temp=posted[i];
                            posted[i]=posted[j];
                            posted[j]=temp;

                             var temp=date[i];
                            date[i]=date[j];
                            date[j]=temp;
                          }
                        }
                      }
                 
                            
                          
                          /*   var payeename=payeeStore.getAt(i).get('PayeeName');
                             var accountnumber=payeeStore.getAt(i).get('AccountNumber');
                             var accountbank=payeeStore.getAt(i).get('AccountBank');
                             var accountbranchname=payeeStore.getAt(i).get('AccountBranchName');
                             var accountbranchcode=payeeStore.getAt(i).get('AccountBranchCode');
                     */
        for(var i=len-1;i>=0;i--)
        {
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
                 Ext.getCmp('title').setHtml(titles[i]);
                 Ext.getCmp('posted').setHtml("Posted By:"+posted[i]);
                 Ext.getCmp('date').setHtml("Date"+date[i]);
                 Ext.getCmp('upvotes').setHtml(up_votes[i]);
             }
 
        //     Ext.getCmp('popularposts').removeAll();
          },
          PopularPosts:function(component,options)
          {
       
            
                var discussionStore = Ext.getStore('DiscussionForum');
                var len=discussionStore.getCount();
               
                var up_votes=new Array();
                var titles=new Array();
                var posted=new Array();
                var date =new Array();
                for(var i=0;i<len;i++)
                      {
                          up_votes[i]=discussionStore.getAt(i).get('UpVotes');
                          posted[i]=discussionStore.getAt(i).get('Posted');
                          date[i]=discussionStore.getAt(i).get('date');
                          titles[i]=discussionStore.getAt(i).get('Title');
                      }
                    
                for(var i=0;i<len;i++)
                      {
                        for( var j=0;j<len;j++)
                        {
                          if(Number(up_votes[i])<Number(up_votes[j]))
                          {
                            var temp=up_votes[i];
                            up_votes[i]=up_votes[j];
                            up_votes[j]=temp;

                             var temp=titles[i];
                            titles[i]=titles[j];
                            titles[j]=temp;

                            var temp=posted[i];
                            posted[i]=posted[j];
                            posted[j]=temp;

                             var temp=date[i];
                            date[i]=date[j];
                            date[j]=temp;
                          }
                        }
                      }
                 
                            
                          
                          /*   var payeename=payeeStore.getAt(i).get('PayeeName');
                             var accountnumber=payeeStore.getAt(i).get('AccountNumber');
                             var accountbank=payeeStore.getAt(i).get('AccountBank');
                             var accountbranchname=payeeStore.getAt(i).get('AccountBranchName');
                             var accountbranchcode=payeeStore.getAt(i).get('AccountBranchCode');
                     */
        for(var i=len-1;i>=0;i--)
        {
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
                 Ext.getCmp('title').setHtml(titles[i]);
                 Ext.getCmp('posted').setHtml("Posted By:"+posted[i]);
                 Ext.getCmp('date').setHtml("Date"+date[i]);
                 Ext.getCmp('upvotes').setHtml(up_votes[i]);
             }
 
          },
         
});