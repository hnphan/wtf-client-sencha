Ext.define('WTF.controller.Main', {
    extend: 'Ext.app.Controller',    
    config: {
        stores: 'WTF.store.Settings',
        refs: {
            menuView: 'menuView',
            settingsView: 'settingscard',
            toggleVegan: 'settingscard togglefield[name=vegantoggle]',
            toggleVeggie: 'settingscard togglefield[name=veggietoggle]',
            toggleGFree: 'settingscard togglefield[name=gfreetoggle]',
            toggleNoPork: 'settingscard togglefield[name=noporktoggle]'
            //btnSave: 'settingscard button[action=save]'
        },
        control: {
            'toggleVegan': {
                change: 'onVeganToggle'
            },
            'toggleVeggie': {
                change: 'onVeggieToggle'
            },
            'toggleGFree': {
                change: 'onGFreeToggle'
            },
            'toggleNoPork': {
                change: 'onNoPorkToggle'
            },
            /*'btnSave': {
            	tap: 'onSave'
            }*/
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {        
        // query for menu view
        WTF.utils.Functions.loadData();
        WTF.utils.Functions.setMenu();
    },
    
    saveSettings: function() {
    	console.log("Saving..");

        var store = Ext.getStore('Settings');
        //remove previous settings
        store.removeAll();
        store.sync();

        var model = Ext.create("WTF.model.Setting", {});
        this.getSettingsView().updateRecord(model);
        store.add(model.getData());
        store.sync();
    },
    
    onVeganToggle: function(toggleField) {
    	if (toggleField.getValue() === 0) console.log("Vegan OFF");
    	else console.log("Vegan ON");
        this.saveSettings();
        // Refactor later: loadData does more than it needs
        WTF.utils.Functions.loadData();
    },

    onVeggieToggle: function(toggleField) {
        if (toggleField.getValue() === 0) console.log("Veggie OFF");
        else console.log("Veggie ON");
        this.saveSettings();
        WTF.utils.Functions.loadData();
    },

    onGFreeToggle: function(toggleField) {
        if (toggleField.getValue() === 0) console.log("GFree OFF");
        else console.log("GFree ON");
        this.saveSettings();
        WTF.utils.Functions.loadData();
    },

    onNoPorkToggle: function(toggleField) {
        if (toggleField.getValue() === 0) console.log("No Pork OFF");
        else console.log("No Pork ON");
        this.saveSettings();
        WTF.utils.Functions.loadData();

    }



});
