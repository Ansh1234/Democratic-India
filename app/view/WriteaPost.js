Ext.define('Hackathon.view.WriteaPost', {
    extend: 'Ext.Panel',
   
    xtype: 'writeapost',

    config:
    {
    style:'margin:25px;padding:25px',
        
         items : [
                    {
                        xtype:'textfield',
                        placeHolder:"Enter the Topic",
                        style:'border:2px solid #0A63A1',
                        id:'writeapost_title'
                    },   
                    {
                        xtype:'textareafield',
                        
                        height:'50%',
                        style:'border:2px solid #0A63A1;margin-top:20px',
                        id:'writeapost_content'
                    },
                    {
                        xtype:'button',
                        text:'Submit',
                        ui:'action',
                        style:'margin-top:15px;height:45px',
                        id:'writeapost'
                    }
                 ]
    }  	
    
});