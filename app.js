
Ext.application({
    name: 'Hackathon',

    requires: [
        'Ext.MessageBox'
    ],

views:['Main','Register','HomePage','PrePollsLeftMenu','PrePollsRightMenu','News1'],
controllers:['Videos','Letters','OpinionPolls','MeetUps','Main','PopularPosts',],
stores:['OpinionPolls','MeetUps','States','Constituencies','PrePollsLeftMenu','News','DiscussionForum'],
models:['OpinionPolls','MeetUps','States','Constituencies','PrePollsLeftMenu','News','DiscussionForum'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    stateobj:'',
    launch: function() {

        Ext.Viewport.add(Ext.create('Hackathon.view.Main'));

        Ext.Ajax.on("beforerequest", function()
        {
            $("#spinner").fadeIn('fast');
        });

        Ext.Ajax.on("requestcomplete", function(){
             $("#spinner").hide();
        });

        Ext.Ajax.request({
            url: 'resources/startup/php/state_constituency_list.php',
            type: 'POST',
            dataType: "json",
            success: function(data)
                {
                    var store=Ext.getStore('States');
                    var json_string=data.responseText;
                    console.log(json_string);
                    var json_object=JSON.parse(json_string);
                    var only_states=JSON.parse(json_object.only_states);
                    var all_the_detail=JSON.parse(json_object.all_the_detail);
                    Hackathon.app.stateobj=all_the_detail;
                    console.log(only_states.all_names);
                    console.log(all_the_detail);
                    console.log(typeof(only_states));
                    console.log(typeof(all_the_detail));
                    for(individual_state_name in only_states.all_names)
                        {
                            var myitem={"State_Name":only_states.all_names[individual_state_name]};
                            store.add(myitem);
                            console.log(only_states.all_names[individual_state_name]);
                            var y=only_states.all_names[individual_state_name];
                            var details=JSON.parse(all_the_detail[individual_state_name][y]);
                            for(x in details)
                                console.log(details[x].constituency_name);
                        }

       
    }
   
});

    },
    state:'true',
    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
