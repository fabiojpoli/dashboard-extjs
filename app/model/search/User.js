Ext.define('DashboardExtJS.model.search.User', {
    extend: 'DashboardExtJS.model.Base',

    fields: [
        {
            type: 'int',
            name: 'identifier'
        },
        {
            type: 'string',
            name: 'fullname'
        },
        {
            type: 'string',
            name: 'email'
        },
        {
            name: 'subscription'
        },
        {
            type: 'date',
            name: 'joinDate'
        },
        {
            type: 'boolean',
            name: 'isActive'
        },
        {
            name: 'profile_pic'
        }
    ]
});
