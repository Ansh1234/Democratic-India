/**
 * Demonstrates how to create a simple List based on inline data.
 * First we create a simple Contact model with first and last name fields, then we create a Store to contain
 * the data, finally we create the List itself, which gets its data out of the Store
 */

Ext.define('Hackathon.view.LowerHalf', {
    extend: 'Ext.Container',
    requires: ['Hackathon.model.News'],
    xtype:'lowerhalf',
    initialize:function()
    {
               console.log("Hello");
              url = 'https://news.google.co.in/news/feeds?pz=1&cf=all&ned=in&hl=en&topic=n&output=rss';
        $.ajax({
        type: "GET",
        url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=15&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        error: function(){
            alert('Unable to load feed, Incorrect path or invalid feed');
        },
        success: function(xml){
            values = xml.responseData.feed.entries;
            console.log(typeof(values));
            console.log(values);
            
            var store=Ext.getStore('News');
            for(entry in values)
            {
            var storeItem={MenuItems:values[entry].title};
            store.add(storeItem);
            }

        }
    });
    },
    config: {
        layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
            type: 'vbox',
            
            pack: 'center'
        },
        style:"border:2px solid blue;padding:20px",
       // cls: 'demo-list',
        items: [
        {
            xtype:'label',
            html:'Current News',
            style:'text-align:left;margin-left:10px;margin-bottom:10px;font-weight:bold;font-size:22px'
        },
        {
            width: Ext.os.deviceType == 'Phone' ? null : '100%',
            height: Ext.os.deviceType == 'Phone' ? null : '80%',
            xtype: 'list',
            id:'mainlist',
            onItemDisclosure: function(record, btn, index) {
                  Ext.getCmp('navigateview_tablet').getNavigationBar().setHidden(false);
            Ext.getCmp('navigateview_tablet').push({
             title: '<div style="font-size:16px">News</div>',
              xtype:'news1'
           });
            },
            store: 'News',
            itemTpl: '{MenuItems}'
        }
        ]
    }
});
