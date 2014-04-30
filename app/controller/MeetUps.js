Ext.define("Hackathon.controller.MeetUps",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			meetups:'meetups',
    					
    			},
    		control:
    			{
    			 meetups:
                    {
                        initialize:'Initialize'
                    }
    			},
                        
                        
        },
        Initialize:function()
            {
                var MeetUpsStore = Ext.getStore('MeetUps');
                var length=MeetUpsStore.getCount();
                for(var i=0;i<length;i++)
                    {
                    var title=MeetUpsStore.getAt(i).get('Title');
                    var speaker=MeetUpsStore.getAt(i).get('Speaker');
                    var venue=MeetUpsStore.getAt(i).get('Venue');
                    var date=MeetUpsStore.getAt(i).get('date');
                    var time=MeetUpsStore.getAt(i).get('Time');
                    var image=MeetUpsStore.getAt(i).get('image');
                    var No_of_people=MeetUpsStore.getAt(i).get('No_of_people');
                   

            var panel  =    
                {
                    extend: 'Ext.Panel',
                    items: 
                    [
                        {
                            flex:1,
                            style:'margin:25px;border: 3px solid #d4d4d4;background:#e6e6e6;border-radius:25px;padding:20px;padding-right:5px',
                            layout:'hbox',
                                items:
                                    [
                                        {
                                            items:
                                            [
                                                {   
                                                    flex:1,
                                                    html:'',
                                                    id:'meetup_image'
                                                },
                                                {
                                                    xtype:'label',
                                                    style:'font-size:12px;margin-top:12px',
                                                    id:'no_of_people'
                                                },
                                                {
                                                    xtype:'button',
                                                    html:'Attend',
                                                    ui:'action',
                                                    style:'width:100px;font-size:14px;margin-top:5px',
                                                    
                                                }
                                            ]
                                        },
                                        {
                                            flex:2,
                                            cls:'meetups_right',
                                             items:
                                                [
                                                    {
                                                        xtype:'label',
                                                        cls:'meetups_firstheader',
                                                        id:'meetup_title'
                                                    },
                                                    {
                                                        xtype:'label',
                                                        id:'meetup_speaker',
                                                    },
                                                    {
                                                        style:'margin-top:30px',
                                                        xtype:'label',
                                                        id:'meetup_venue',
                                                        cls:'minor_details'
                                                    },
                                                    {
                                                        xtype:'label',
                                                        id:'meetup_date',
                                                        cls:'minor_details'
                                                    },
                                                    {
                                                        xtype:'label',
                                                        id:'meetup_time',
                                                        cls:'minor_details'
                                                    }
                                                    ]
                                            }
                                        ]
                                },    
                            ]
                    
                }
                Ext.getCmp('meet').add(panel);
                Ext.getCmp('meetup_title').setHtml(title);
                Ext.getCmp('meetup_speaker').setHtml(speaker);
                Ext.getCmp('meetup_time').setHtml(time);
                Ext.getCmp('meetup_date').setHtml(date);
                Ext.getCmp('meetup_venue').setHtml(venue);
                Ext.getCmp('meetup_image').setHtml('<img height="100px" width="100px" src="resources/images/services/'+image+'"/>');
                Ext.getCmp('no_of_people').setHtml(No_of_people+"people attending");
            }
            }

         
});