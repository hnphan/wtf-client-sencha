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
        items: [
            	{
                title: 'Breakfast',
                layout:'fit',
                //iconCls: 'home',
                items: [
                {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Breakfast Menu'
                },
                {
                	xtype: 'list',
                	store: 'Meals',
                	itemTpl: '{name}, {menu}'
                }
        	]
                /*html: [
                    "Breakfast menu will be here"
                ].join(""),*/

                /*initialize: function() {
                    console.log("init breakfast");
                    var xmlhttp = new XMLHttpRequest();
                    xmlhttp.open("GET", "http://www.colby.edu/communications/feeds/dining-Dana.xml");
                    xmlhttp.send();
                    xmlDoc=xmlhttp.responseXML;
                    this.update(xmlDoc);
                }*/
            },
            {
                title: 'Lunch',
                //iconCls: 'home',


                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Lunch Menu'
                }

                /*html: [
                    "Lunch menu will be here"
                ].join("")*/
            },
            {
                title: 'Dinner',
                //iconCls: 'home',

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Dinner Menu'
                }

                /*html: [
                    "Dinner menu will be here"
                ].join("")*/
            },
        ]
    }
})