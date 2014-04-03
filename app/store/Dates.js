Ext.define('WTF.store.Dates', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Date',
		autoLoad: 'true',
		data: [
			{
				id: '99',
				dateString: String(new Date())
			}
		]
	}
});