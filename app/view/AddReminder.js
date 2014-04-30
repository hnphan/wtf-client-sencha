Ext.define('WTF.view.AddReminder', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.FieldSet', 'Ext.field.Toggle', 'Ext.field.Select'],
    xtype: 'addReminderView',
    config: {
        title: 'New Reminder',
        styleHtmlContent: true,
        items: [{
                docked: 'top',
                xtype: 'toolbar',
                title: 'New Reminder',
                items: [{
                    xtype: 'button',
                    text: 'Back',
                    ui: 'back',
                    name: 'bttnBack'
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    ui: 'action',
                    name: 'bttnSave'
                }]
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                items: [{xtype: 'spacer'},
                    {
                    xtype: 'button',
                    iconCls: 'trash',
                    iconMask: true
                }]
            },
            {
                xtype: 'textfield',
                name: 'food',
                label: 'Food',
                required: true
            },
            {
                xtype: 'selectfield',
                name: 'dining_hall',
                label: 'Where?',
                options: [
                    {
                        text: 'All dining halls',
                        value: 0
                    },
                    {
                        text: 'Bobs',
                        value: 1
                    },
                    {
                        text: 'Dana',
                        value: 2
                    },   
                    {
                        text: 'Foss',
                        value: 3
                    }                
                ]
            },
            {
                xtype: 'selectfield',
                name: 'meal',
                label: 'When?',
                options: [
                    {
                        text: 'All meals',
                        value: 0
                    },
                    {
                        text: 'Lunch',
                        value: 1
                    },
                    {
                        text: 'Dinner',
                        value: 2
                    }             
                ]
            }
        ]
    }
})