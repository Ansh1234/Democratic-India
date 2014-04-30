Ext.define("Hackathon.controller.OpinionPolls",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			opinionpolls:'opinionpolls',
    					
    			},
    		control:
    			{
    			 opinionpolls:
                    {
                        initialize:'Initialize_Polls'
                    }
    			},
                        
                        
        },
        Initialize_Polls:function()
            {
                
                var OpinionPollsStore = Ext.getStore('OpinionPolls');
                var length=OpinionPollsStore.getCount();
                for(var i=0;i<length;i++)
                    {
                    var question=OpinionPollsStore.getAt(i).get('Question');
                    var upvotes=OpinionPollsStore.getAt(i).get('upvotes');
                    var downvotes=OpinionPollsStore.getAt(i).get('downvotes');
                    var post_time=OpinionPollsStore.getAt(i).get('post_time');
                    console.log(question);
                    var panel =
                    {
                        extend:'Ext.Panel',
                        style:'margin:10px; border:2px solid black; padding: 5px 7px',
                        items:
                            [
                               {
                                    xtype:'label',
                                    id:'opinionpolls_title',
                                    cls:'opinionpolls_title'
                                },
                                {
                                    layout:'hbox',
                                    items:
                                        [
                                            {
                                               items:
                                                [
                                                     {
                                                        xtype:'label',
                                                        id:'upvotes',
                                                        cls:'yesnumber'
                                                    },
                                                    {
                                                         xtype:'button',
                                                         ui:'plain',
                                                         cls:'yes',
                                                         style:'width:60px;height:50px; background: url("resources/images/yes.png") no-repeat;'
                                                    },
                                                ]                                           
                                            },
                                             {
                                               items:
                                                [
                                                     {
                                                        xtype:'label',
                                                        id:'downvotes',
                                                        cls:'nonumber'
                                                    },
                                                    {
                                                         xtype:'button',
                                                         ui:'plain',
                                                         cls:'no',
                                                         style:'width:60px;height:50px; background: url("resources/images/no.png") no-repeat;'
                                                    },
                                                ]                                           
                                            },
                                         
                                        ]

                                }
                            ]
                    };

                    Ext.getCmp('polls').add(panel);
                    Ext.getCmp('opinionpolls_title').setHtml(question);
                    Ext.getCmp('upvotes').setHtml(upvotes);
                    Ext.getCmp('downvotes').setHtml(downvotes);

                    }
            }

         
});