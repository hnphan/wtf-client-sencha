var timeAgoInWords = function(date) {
    try {
        var now = Math.ceil(Number(new Date()) / 1000),
            dateTime = Math.ceil(Number(new Date(date)) / 1000),
            diff = now - dateTime,
            str;

        if (diff < 60) {
            return String(diff) + ' seconds ago';
        } else if (diff < 3600) {
            str = String(Math.ceil(diff / (60)));
            return str + (str == "1" ? ' minute' : ' minutes') + ' ago';
        } else if (diff < 86400) {
            str = String(Math.ceil(diff / (3600)));
            return str + (str == "1" ? ' hour' : ' hours') + ' ago';
        } else if (diff < 60 * 60 * 24 * 365) {
            str = String(Math.ceil(diff / (60 * 60 * 24)));
            return str + (str == "1" ? ' day' : ' days') + ' ago';
        } else {
            return Ext.Date.format(new Date(date), 'jS M \'y');
        }
    } catch (e) {
        return '';
    }
};

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
                    docked: 'top',
                    store: 'Dates',
                    itemTpl: 'Hello {dateString}',
                    itemCls: 'menu'
                },
                {
                    xtype: 'list',
                    plugins: [
                        { xclass: 'Ext.plugin.PullRefresh' }
                    ],
                    store: 'BreakfastMenus',
                    itemTpl: '<h1>{dining_hall}</h1><br/> {menu}',
                    itemCls: 'menu',
                    masked: {
                        xtype: 'loadmask',
                        message: 'Please wait. WTF? is contacting Pam for today\'s lunch menu...'
                    }
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
                    plugins: [
                        { xclass: 'Ext.plugin.PullRefresh' }
                    ],
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
                    plugins: [
                        { xclass: 'Ext.plugin.PullRefresh' }
                    ],
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