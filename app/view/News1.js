/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('Hackathon.view.News1', {
    extend: 'Ext.Container',
    
    xtype:'news1',
    config: 
    {
        style:'margin-left:15px;margin-right:15px',
        items:
            [
                {
                    xtype:'panel',
                    layout:'hbox',
                    items:
                        [
                           {
                    flex:7,
                    xtype:'label',
                    html:'Barmer is now a prestige battle at multiple levels. For the 76-year-old former defence, external affairs and finance minister, this is a personal struggle. He has claimed he was backstabbed by party leaders, has contended that the party is no longer in touch with reality, that the NaMo chants are in poor taste.The partys constitution provides for the immediate expulsion of any member contesting against an official party candidate, the letter reasoned,Despite its air of calm, the Bharatiya Janata Party would have certainly felt the jitters while making public the letter expelling veteran leader Jaswant Singh from the party.',
                    style:'margin:10px'

                },
                            {
                                flex:3,
                                html:'<img style="margin-top:10px" width="200px" height="200px" src="resources/images/services/jaswant.jpg"/>'

                            }
                        ]
                },
                {
                    xtype:'label',
                    html:'Despite its air of calm, the Bharatiya Janata Party would have certainly felt the jitters while making public the letter expelling veteran leader Jaswant Singh from the party.',
                    style:'margin:10px'

                },
                {
                    xtype:'label',
                    html:''
                },
                {
                    xtype:'label',
                    html:'The partys constitution provides for the immediate expulsion of any member contesting against an official party candidate, the letter reasoned, expelling Singh and his close confidante Subhash Maharia who were busy campaigning in Barmer, Rajasthan, even as the expulsion order was released.',
                    style:'margin:10px'

                },
                 {
                    xtype:'label',
                    html:'Barmer is now a prestige battle at multiple levels. For the 76-year-old former defence, external affairs and finance minister, this is a personal struggle. He has claimed he was backstabbed by party leaders, has contended that the party is no longer in touch with reality, that the NaMo chants are in poor taste.',
                    style:'margin:10px'

                } ,
                    {
                    xtype:'label',
                    html:'For the BJPs Rajasthan Chief Minister Vasundhara Raje, this is a battle for vindication. It is her choice of a candidate for the Barmer Lok Sabha seat, after all, that led to Jaswant Singhs rebellion. Col Sonaram Chowdhry, who actually lost the Assembly election in December while contesting on a Congress ticket against a BJP candidate in Rajasthan, was considered a significant acquisition when he jumped ship and joined the BJP. A win for Sonaram -- against Jaswant who has had nine terms as MP -- will boost Vasundharas brand considerably and she is taking no chances, not only joining Sonaram as he filed his nomination papers but addressing a rally in Barmer almost simultaneously as Jaswant Singh addressed his supporters after filing his nomination papers.',

                    style:'margin:10px'


                } ,
                  {
                    xtype:'label',
                    html:'Barmer is now a prestige battle at multiple levels. For the 76-year-old former defence, external affairs and finance minister, this is a personal struggle. He has claimed he was backstabbed by party leaders, has contended that the party is no longer in touch with reality, that the NaMo chants are in poor taste.',
                    style:'margin:10px'

                } ,      
            ]       
    }
});
