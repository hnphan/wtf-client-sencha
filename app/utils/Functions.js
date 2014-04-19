Ext.define('WTF.utils.Functions', {
  	singleton: true,
	//copy and paste these contents into Utils.Functions static class.

	requires: [
	],

	loadData: function() {
		console.log("Loading local storage data...")
		var me = this;

		Ext.getStore('Settings').load({
			callback: function(records, operation, success) {

				if (records.length > 0) {

					//Load details from settings
					var vegan = records[0].get('vegantoggle');
					var veggie = records[0].get('veggietoggle');
					var gfree = records[0].get('gfreetoggle');
					
					Ext.ComponentQuery.query('settingscard togglefield[name=veggietoggle]')[0].setValue(veggie);
					Ext.ComponentQuery.query('settingscard togglefield[name=vegantoggle]')[0].setValue(vegan);
					Ext.ComponentQuery.query('settingscard togglefield[name=gfreetoggle]')[0].setValue(gfree);
				}
			}
		});
	},
	setMenu: function() {
		console.log("Setting default view to menu according to current system time...")
		var menuView = Ext.ComponentQuery.query("menucard")[0];
        // set view according to time of the day
        var curTime = new Date();

        var curHours = curTime.getHours();
        var mealId;
        if (curHours < 10) mealId = 0;
        else if (curHours < 15) mealId = 1;
        else mealId = 2;
        
        // set menu view to meal according to time of day
        menuView.setActiveItem(mealId);

        // load data
        var settingsView = Ext.ComponentQuery.query("settingscard")[0];
	}
});