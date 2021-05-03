Ext.define('DashboardExtJS.data.Simulated', {
    requires: [
        'Ext.ux.ajax.JsonSimlet',
        'Ext.ux.ajax.SimManager'
    ],

    onClassExtended: function (cls, data) {
        var url = data.$className.replace(/\./g, '/').
                    replace(/^DashboardExtJS\/data/, '~api').toLowerCase(),
            simlet = {
                type: 'json',
                data: data.data
            },
            registration = {};

        registration[url] = simlet;

        Ext.ux.ajax.SimManager.register(registration);
    }
},
function () {
    Ext.ux.ajax.SimManager.init({
        defaultSimlet: null
    });
});
