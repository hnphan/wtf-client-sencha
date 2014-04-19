Ext.define('WTF.model.Setting', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        fields: [
            { name: 'id', type: 'auto' },
            { name: 'vegan', type: 'boolean' },
            { name: 'veggie', type: 'boolean' },
            { name: 'gfree', type: 'boolean' }
        ],
		proxy: {
		    type: 'localstorage',
		    id: 'dietarysettings'
		}
    }
});
