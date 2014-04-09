Ext.define('WTF.controller.Main', {
    extend: 'Ext.app.Controller',    
    config: {
        refs: {
            menuView: 'menuView',
            settingsView: 'settingscard',
            toggleVegan: 'settingscard vegantoggle',
            btnSave: 'settingsView button[action=save]'
        },
        control: {
            'toggleVegan': {
                change: 'onToggle'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log("controller launch function");
        
        // query for menu view
        var menuView = Ext.ComponentQuery.query("menucard")[0];
        
        var curTime = new Date();
        console.log("current time is " + curTime);
        var curHours = curTime.getHours();
        var mealId;
        if (curHours < 10) mealId = 0;
        else if (curHours < 15) mealId = 1;
        else mealId = 2;
        
        // set menu view to meal according to time of day
        menuView.setActiveItem(mealId);

        // load data
        var settingsView = Ext.ComponentQuery.query("settingscard")[0];
        console.log("Data: " + settingsView.getValues());

    }


});
