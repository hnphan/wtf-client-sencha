Ext.define('WTF.controller.CtrlAddReminder', {
    extend: 'Ext.app.Controller',    
    config: {
        refs: {
            reminderView: 'remindercard',
            bttnNew: 'remindercard button[name=bttnNew]',
            bttnBack: 'addReminderView button[name=bttnBack]'
        },
        control: {
            'bttnNew': {
                tap: 'onNew'
            },
            'bttnBack': {
                tap: 'onBack'
            }

        }
    },
    
    onNew: function() {
    	console.log("New button tapped");
        Ext.Viewport.animateActiveItem('addReminderView', 'slide');
    },

    onBack: function() {
        console.log("Back button tapped");
        Ext.Viewport.animateActiveItem('main', {type: 'slide', direction: 'right'});
    }

});
