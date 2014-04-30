Ext.define("Hackathon.controller.Candidates",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    			candidates:'candidates',
    					
    			},
    		control:
    			{
    			 candidates:
                    {
                        initialize:'Initialize'
                    }
    			},
                        
                        
        },
        Initialize:function()
            {
                var CandidatesStore = Ext.getStore('Candidates');
                var length=CandidatesStore.getCount();
                for(var i=0;i<length;i++)
                    {
                    var name=CandidatesStore.getAt(i).get('Name');
                    var party=CandidatesStore.getAt(i).get('Party');
                    var cases=CandidatesStore.getAt(i).get('Cases');
                    var education=CandidatesStore.getAt(i).get('Education');
                    var age=CandidatesStore.getAt(i).get('Age');
                    var label={xtype:'label',html:name};
                    Ext.getCmp('names').add(label);
                    var label={xtype:'label',html:party};
                    Ext.getCmp('party').add(label);
                    var label={xtype:'label',html:cases};
                    Ext.getCmp('cases').add(label);
                    var label={xtype:'label',html:education};
                    Ext.getCmp('education').add(label);
                    var label={xtype:'label',html:age};
                    Ext.getCmp('age').add(label);

                    }
            }

         
});