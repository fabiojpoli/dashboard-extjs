Ext.define('DashboardExtJS.model.faq.Category', {
    extend: 'DashboardExtJS.model.Base',

    fields: [
        {
            type: 'string',
            name: 'name'
        }
    ],

    hasMany: {
        name: 'questions',
        model: 'faq.Question'
    }
});
