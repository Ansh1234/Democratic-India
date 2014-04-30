Ext.define("Hackathon.controller.Attend",
	{
    extend: "Ext.app.Controller",
    config:
    	{
    		refs:
    			{
    				
            attend1:'#attend1',
            attend2:'#attend2',
            attend3:'#attend3',
            attend4:'#attend4',
            attend5:'#attend5',
            attend6:'#attend6',
    					
    			},
    		control:
    			{
    			
                   attend1:
                   {
                      tap:'Attend1'
                   },
                     attend2:
                   {
                      tap:'Attend2'
                   },
                     attend3:
                   {
                      tap:'Attend3'
                   },
                     attend4:
                   {
                      tap:'Attend4'
                   },
                     attend5:
                   {
                      tap:'Attend5'
                   },
                     attend6:
                   {
                      tap:'Attend6'
                   },

    			},
                        
                        
            },
           
         Attend1:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num1').setHtml("235 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num1').setHtml("234 people attending");
            }

         },
            Attend2:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num2').setHtml("4254 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num2').setHtml("4253 people attending");
            }

         },   Attend3:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num3').setHtml("1249 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num3').setHtml("1248 people attending");
            }

         },   Attend4:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num4').setHtml("437 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num4').setHtml("436 people attending");
            }

         },   Attend5:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num5').setHtml("284 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num5').setHtml("283 people attending");
            }

         },   Attend6:function(button)
         {
            var text=button.getHtml();
            if(text=="Attend")
            {
              button.setHtml("Attending")
              Ext.getCmp('num6').setHtml("977 people attending");
            }
            else if(text=="Attending")
            {
              button.setHtml("Attend");
               Ext.getCmp('num6').setHtml("976 people attending");
            }

         },
});