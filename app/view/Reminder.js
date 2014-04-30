Ext.define('WTF.view.Reminder', {
    extend: 'Ext.form.Panel',
    requires: ['Ext.TitleBar', 'Ext.dataview.List', 'Ext.form.FieldSet', 'Ext.field.Toggle'],
    xtype: 'remindercard',
    config: {
        title: 'Reminder',
        iconCls: 'favorites',
        styleHtmlContent: true,
        items: [{
                docked: 'top',
                xtype: 'toolbar',
                title: 'Reminder',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'New',
                        ui: 'action',
                        name: 'bttnNew'
                    }
                ]
            }
            /*{
                xtype: 'toolbar',
                ui: 'neutral',
                docked: 'top',
                scrollable: false,
                defaults: {
                    iconMask: true,
                    ui: 'plain'
                },
                items: [
                    {iconCls: 'add'},
                    {iconCls: 'compose'},
                    {iconCls: 'delete'}
                ],
                layout: {
                    pack: 'center',
                    align: 'center'
                }
            }*/
        ]
    }
})