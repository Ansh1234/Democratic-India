Ext.define('Hackathon.view.Letter1', {
    extend: 'Ext.Panel',
   
    xtype: 'letter1',

    config:
    {
    scrollable:{direction:'vertical'},
    style:'margin: 10px 20%;border:2px solid black;padding:10px',
        
         items : [
                   {
                        xtype:'panel',
                        
                        items:
                            [
                                {
                                    xtype:'label',
                                    html:"Dear Bangaloreans",
                                    style:'margin-bottom:10px;font-size:20px;font-weight:bold'
                                },
                                {

                                },
                                {

                                },
                                {

                                },
                               
                                {
                                    xtype:'label',
                                    style:'text-align:justify',
                                    html:'I received a lot of your complaints regarding the safety of women in your constituency. It is to inform you that women safety is of utmost importance to our party. We are taking necessary steps to ensure that every woman feels safe in the city',
                                     style:'margin-bottom:10px'
                                },
                                 {
                                    xtype:'label',
                                    style:'text-align:justify',
                                    html:'We are working towards achieving equality among women. Our primary motive is women empowerment. We advise all the women to undergo self defense training. We will be organizing some workshops for this purpose. We are looking into the matter and we assure you that all the women will be safe.  We advise all the women to undergo self defense training. We will be organizing some workshops for this purpose.Our primary motive is women empowerment. We advise all the women to undergo self defense training. '
                                },
                                  {
                                    xtype:'label',
                                    style:'text-align:justify',
                                    style:'margin-top:10px',
                                    html:' We advise all the women to undergo self defense training. We will be organizing some workshops for this purpose. We are looking into the matter and we assure you that all the women will be safe.  We advise all the women to undergo self defense training. We will be organizing some workshops for this purpose.  We are looking into the matter and we assure you that all the women will be safe.  We advise all the women to undergo self defense training. We will be organizing some workshops for this purpose. '
                                },
                                 {
                                    xtype:'label',
                                    html:'Regards:',
                                    style:'margin-top:40px'
                                },
                                {
                                    xtype:'label',
                                    
                                    id:"name_politician"
                                },
                                {
                                    xtype:'label',
                                    html:'Congress Vice President',
                                    
                                    id:'designation_politician'

                                },
                              
                                                          ]
                   }
                 ]
    }  	
    
});