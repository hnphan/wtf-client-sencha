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
                instructions: 'WTF? will display dining hall menus according to your specified dietary needs. Dietary data is acquired through Colby dining services website. WTF? is not resposible for the accuracy of the data',
                defaults: {
                    labelWidth: '35%',
                    textAlighment: 'left'
                },
                items: [
                    {
                        xtype: 'togglefield',
                        name: 'gfreetoggle',
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
                        xtype: 'togglefield',
                        name: 'noporktoggle',
                        label: 'No pork'
                    }/*,
                    {
                        xtype: 'button',
                        text: 'Save',
                        action: 'save',
                        margin: '10 5',
                        ui: 'confirm',
                        width: '30%'
                    }*/
                ]
            }
        ]
    }
})