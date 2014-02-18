Ext.define('WTF.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'menucard',
            }
        ]
    }
});
