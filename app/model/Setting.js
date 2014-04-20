Ext.define('WTF.model.Setting', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'vegantoggle', type: 'boolean' },
            { name: 'veggietoggle', type: 'boolean' },
            { name: 'gfreetoggle', type: 'boolean' },
            { name: 'noporktoggle', type: 'boolean'}
        ],
		proxy: {
		    type: 'localstorage',
		    id: 'dietarysettings'
		}
    }
});
