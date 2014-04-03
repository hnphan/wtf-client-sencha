Ext.define('WTF.store.DinnerMenus', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		autoLoad: true,
		proxy: {
			type: 'ajax',
			url: 'http://wtf.hieuphan.com/api/dinner/',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}
	}
});