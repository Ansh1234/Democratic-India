Ext.define('Hackathon.view.Discussion1', {
    extend: 'Ext.Panel',
   
    xtype: 'discussion1',

    config:
    {
    
        
         items : [
                   {
                        xtype:'panel',
                        
                        
                        items:
                            [
                               
                                {
                                    xtype:'label',
                                    html:'Should NightLife be extended upto 1 am in Bangalore??',
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
                                                        xtype:'label',
                                                        html:'250',
                                                        
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
                                                flex:1,
                                                items:
                                                [
                                                    {
                                                        xtype:'label',
                                                        html:'567',
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
                                        
                                            {
                                                flex:4
                                            },
                                            {
                                                flex:2,
                                                xtype:'label',
                                                html:'Asked 24 hours ago',
                                                style:'font-size:13px;margin-top:25px'
                                            }
                                        ]
                                }
                            ]
                   }
                 ]
    }  	
    
});