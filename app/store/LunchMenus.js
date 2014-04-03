Ext.define('WTF.store.LunchMenus', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'http://wtf.hieuphan.com/api/lunch/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});