Ext.define('WTF.store.Meals', {
	extend: 'Ext.data.Store',
	config: {
		model: 'WTF.model.Meal',
		autoLoad: true,
		data: [
			{
				dining_hall: 'Foss',
				meal_name: 'Breakfast',
				menu: '<p><strong>The Grill<br \/>\n<\/strong>Turkey Burger<br \/>\n(V)Eggplant Parmesan Flatbread Melt<br \/>\n(GF)French Fries<br \/>\n<br \/>\n<strong>Made-to-Order Deli<\/strong><br \/>\nAssorted&nbsp;Made&nbsp;To&nbsp;Order&nbsp;Sandwiches<br \/>\n(VG)With Potato Chips & Dill Pickles<br \/>\n(GF)Gluten Free Bread is Available<br \/>\n<br \/>\n<strong>Classic Comfort Food<br \/>\n<\/strong>Italian Melt<br \/>\nPotato Chips<br \/>\n<br \/>\n<br \/>\n<strong>Pizza & Pasta<br \/>\n<\/strong>(V)Cheese Pizza<br \/>\n(P) Fresh Dough Pepperoni Pizza&nbsp;&nbsp;<br \/>\n(P)Bacon Spinach Alfredo Pizza<br \/>\n(V) Herb Seasoned Bread Sticks w\/Marinara<br \/>\n<br \/>\nPenne Carbonara W\/Chicken<br \/>\nBreadsticks<br \/>\n<\/p>',
				date: '0'
			},
			{
				dining_hall: 'Dana',
				meal_name: 'Breakfast',
				menu: 'Soup & Bread',
				date: '0'
			},
			{
				dining_hall: 'Bobs',
				meal_name: 'Breakfast',
				menu: 'Pizza',
				date: '0'
			}
		]
		/*proxy: {
			type: 'ajax',
			url: 'url',
			reader: {
				type: 'json',
				rootProperty: 'results'
			}
		}*/
	}
});