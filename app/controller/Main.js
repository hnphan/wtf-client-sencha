Ext.define('WTF.controller.Main', {
    extend: 'Ext.app.Controller',    
    config: {
        stores: 'WTF.store.Settings',
        refs: {
            menuView: 'menuView',
            settingsView: 'settingscard',
            toggleVegan: 'settingscard togglefield[name=vegantoggle]',
            btnSave: 'settingscard button[action=save]'
        },
        control: {
            'toggleVegan': {
                change: 'onVeganToggle'
            },
            'btnSave': {
            	tap: 'onSave'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {        
        // query for menu view
        WTF.utils.Functions.setMenu();
    },
    
    onSave: function() {
    	console.log("Saving..");
    },
    
    onVeganToggle: function(toggleField) {
    	if (toggleField.getValue() === 0) console.log("Vegan OFF");
    	else console.log("Vegan ON");
    }


});
