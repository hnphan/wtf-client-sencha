Ext.define('WTF.view.About', {
    extend: 'Ext.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List'],
    xtype: 'aboutcard',
    config: {
        title: 'About',
        iconCls: 'info',
        cls: 'menu',
        html: '<h3>What\'s The Food?</h3> <p> Version 0.9 <br/> By Hieu Phan <br/> Comments? Suggestions? <a href = "mailto: me@hieuphan.com"> me@hieuphan.com </a></p>',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'About'
        }]
        /*tabBar: {
            layout: {
                pack: 'center'
            }
        },*/
        //activeItem: 2,
        /*items: [{
                title: 'About',
                //iconCls: 'home',
                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'About'
                },
                {
                    xtype: 'list',
                    store: 'BreakfastMenus',
                    itemTpl: '<h1>{dining_hall}</h1><br/> {menu}',
                    itemCls: 'menu'
                }]
            }
        ]*/
    }
})