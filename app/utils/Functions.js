Ext.define('WTF.utils.Functions', {
  	singleton: true,
	//copy and paste these contents into Utils.Functions static class.

	requires: [
	],

	setMenu: function() {
		var menuView = Ext.ComponentQuery.query("menucard")[0];
        // set view according to time of the day
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