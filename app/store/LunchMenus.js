Ext.define('WTF.store.LunchMenus', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		autoLoad: false,
		proxy: {
			type: 'ajax',
			url: 'http://localhost:5000/api/lunch/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});