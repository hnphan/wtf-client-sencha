Ext.define('WTF.view.Menu', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List'],
    xtype: 'menucard',
    config: {
        title: 'Menu',
        iconCls: 'home',
        tabBar: {
            layout: {
                pack: 'center'
            }
        },
        //activeItem: 2,
        items: [{
                title: 'Breakfast',
                layout: 'fit',
                //iconCls: 'home',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Breakfast Menu'
                },
                {
                    xtype: 'list',
                    store: 'BreakfastMenus',
                    itemTpl: '<h1>{dining_hall}</h1><br/> {menu}',
                    itemCls: 'menu',
                    indicator: true,                    
                }]
            },
            {
                title: 'Lunch',
                layout: 'fit',
                //iconCls: 'home',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Lunch Menu'
                },
                {
                    xtype: 'list',
                    store: 'LunchMenus',
                    itemTpl: '<h1>{dining_hall}</h1><br/> {menu}',
                    itemCls: 'menu',
                    masked: {
                        xtype: 'loadmask',
                        message: 'Please wait. WTF? is contacting Pam for today\'s lunch menu...'
                    }
                }]
            },
            {
                title: 'Dinner',
                layout: 'fit',
             //iconCls: 'home',

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Dinner Menu'
                },
                {
                    xtype: 'list',
                    store: 'DinnerMenus',
                    itemTpl: '<h1>{dining_hall}</h1><br/> {menu}',
                    itemCls: 'menu',
                    masked: {
                        xtype: 'loadmask',
                        message: 'Please wait. WTF? is contacting Miss Mary for today\'s dinner menu...'
                    }
                }]

                /*html: [
                    "Dinner menu will be here"
                ].join("")*/
            },
        ]
    }
})