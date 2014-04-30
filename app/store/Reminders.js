Ext.define('WTF.store.Reminders', {
	extend: 'Ext.data.Store',
	requires: ['WTF.model.Reminder'],
    config: {
    	model: 'WTF.model.Reminder',
    	autoLoad: true
	}
});