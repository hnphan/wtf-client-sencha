Ext.define('WTF.view.Settings', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.FieldSet', 'Ext.field.Toggle'],
    xtype: 'settingscard',
    config: {
        title: 'Settings',
        iconCls: 'settings',
        styleHtmlContent: true,
        items: [{
            docked: 'top',
            xtype: 'toolbar',
            title: 'Settings'
        },
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            title: 'Dietary info',
            instructions: 'WTF? will display dining hall menus according to your specified dietary needs.',
            defaults: {
                labelWidth: '35%',
                textAlighment: 'left'
            },
            items: [
                {
                    xtype: 'togglefield',
                    name: 'gftoggle',
                    label: 'Gluten free'
                },
                {
                    xtype: 'togglefield',
                    name: 'vegantoggle',
                    label: 'Vegan'
                },
                {
                    xtype: 'togglefield',
                    name: 'veggietoggle',
                    label: 'Vegetarian'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    action: 'save',
                    margin: '10 5',
                    ui: 'confirm',
                    width: '30%'
                }
            ]
        }]
    }
})