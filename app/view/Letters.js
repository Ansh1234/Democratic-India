Ext.define('Hackathon.view.Letters', {
    extend: 'Ext.Panel',
   
    xtype: 'letters',
    config:
        {
        
            items:[
            {
                layout:'hbox',
                id:'letters',
                    items:[
                      
                            
                   ]  
                    },
                       {
                           
style:'background:#7FC242;margin:15px;height:350px;display:none',
layout:'vbox',
id:'back',
items:
[
    {
        xtype:'label',
        html:'Account Details',
        style:'font-weight:bold;color:white;font-size:20px;text-align:center;margin-top:10px'
    },
    
  
    
    
    {
        xtype:'button',
        html:'Back',
        style:'width:50%;margin-left:25%',
        id:'backbutton',
        docked:'bottom',
        ui:'action'
    }
    
    
]

}, 




]
            }
    
});