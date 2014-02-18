Ext.define('WTF.store.Meals', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		data: [
			{
				name: 'Breakfast',
				menu: 'Egg & Toast',
				date: '0'
			},
			{
				name: 'Lunch',
				menu: 'Soup & Bread',
				date: '0'
			},
			{
				name: 'Dinner',
				menu: 'Pizza',
				date: '0'
			}
		]
	}
});