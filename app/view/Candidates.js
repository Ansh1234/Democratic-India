Ext.define("Hackathon.view.Candidates",
{
    extend: 'Ext.Panel',
    xtype: 'candidates',
    id:'candidates',
    

    config :
    {
    scrollable:
        {
            direction:'vertical'
        },
    style:'width:90%;margin:10px 40px',
    items:[
    {
    layout:'hbox',
    items:
        [
            {
                xtype:'label',
                html:'Name',
                flex:2,
                cls:'header'
            },
            {
                xtype:'label',
                html:'Party',
                flex:1,
                cls:'header'
            },
            {
                xtype:'label',
                html:'Cases',
                flex:1,
                cls:'header'
            },
            {
                xtype:'label',
                html:'Education',
                flex:2,
                cls:'header'
            },
            {
                xtype:'label',
                html:'Age',
                flex:1,
                cls:'header'
            },
        ]},
        {
    layout:'hbox',
    items:
        [
            {
                id:'names',
                flex:2,
                cls:'item',
            },
            {
                id:'party',
                cls:'item',
                flex:1
            },
            {
                id:'cases',
                cls:'item',
                flex:1
            },
            {
                id:'education',
                cls:'item',
                flex:2
            },
            {
                id:'age',
                cls:'item',
                flex:1
            },
        ]}
    
        ]
//    
    
    }});