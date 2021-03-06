Ext.define('DashboardExtJS.view.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],

    stores: {
        hddusage: {
            autoLoad: true,
            model: 'DashboardExtJS.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/area'
            }

        },
        quarterlyGrowth: {
            autoLoad: true,
            model: 'DashboardExtJS.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/bar'
            }
        },
        earnings: {
            autoLoad: true,
            model: 'DashboardExtJS.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/line'
            }
        },
        servicePerformance: {
            autoLoad: true,
            model: 'DashboardExtJS.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/qg/pie'
            }            

        },
        topMovies: {
            autoLoad: true,
            model: 'DashboardExtJS.model.DataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/movies'
            }
        },
        networkData: {
            autoLoad: true,
            model: 'DashboardExtJS.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/full'
            }
        },
        visitors: {
            autoLoad: true,
            model: 'DashboardExtJS.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/visitor'
            }
        },
        bounces: {
            autoLoad: true,
            model: 'DashboardExtJS.model.MultiDataXY',
            proxy: {
                type: 'api',
                url: '~api/dashboard/counce'
            }
        },
        subscriptions: {
            autoLoad: true,
            model: 'DashboardExtJS.model.Subscription',
            proxy: {
                type: 'api',
                url: '~api/subscriptions'
            }
        },
        todos: {
            autoLoad: true,
            fields: [
                {
                    type: 'int',
                    name: 'id'
                },
                {
                    type: 'string',
                    name: 'task'
                },
                {
                    type: 'boolean',
                    name: 'done'
                }
            ],
            proxy: {
                type: 'api',
                url: '~api/dashboard/tasks'
            }            
        }
    }
});
