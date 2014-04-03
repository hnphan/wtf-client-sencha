Ext.define('WTF.store.BreakfastMenus', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		autoLoad: 'true',
		proxy: {
			type: 'ajax',
			url: 'http://wtf.hieuphan.com/api/breakfast/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});