Ext.define('WTF.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    xtype: 'main',
    config: {
        cls: 'menu',
        fullscreen: true,
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'menucard'           
            },
            {
                xtype: 'aboutcard'
            }
        ]
    }
});
