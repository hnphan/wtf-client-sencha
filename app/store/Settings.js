Ext.define('WTF.store.Settings', {
	extend: 'Ext.data.Store',
	requires: ['WTF.model.Setting'],
    config: {
    	model: 'WTF.model.Setting',
    	autoLoad: true
	}
});