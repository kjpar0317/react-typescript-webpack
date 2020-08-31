export const menuItems = [
    {
        name: 'w.dashboard',
        icon: 'Dashboard',
        role: ['admin', 'group', 'user'],
        items: [
            {
                name: 'w.service',
                role: ['admin', 'group', 'user'],
                items: [
                    {
                        name: 'w.total',
                        role: ['admin', 'group', 'user'],
                        link: '/dashboard',
                    },
                    {
                        name: 'w.public',
                        role: ['admin', 'group', 'user'],
                        link: '/testdashboard',
                    },
                    {
                        name: 'w.private',
                        role: ['admin', 'group', 'user'],
                        link: '/user',
                    },
                ],
            },
            {
                name: 'Openstack',
                role: ['admin', 'group', 'user'],
                items: [
                    {
                        name: 'w.monitoring w.dashboard',
                        role: ['admin', 'group', 'user'],
                        link: '/user',
                    },
                    {
                        name: 'w.administrator w.dashboard',
                        role: ['admin', 'group', 'user'],
                        link: '/user',
                    },
                ],
            },
            {
                name: 'VMware',
                role: ['admin', 'group', 'user'],
                items: [
                    {
                        id: '10',
                        name: 'w.monitoring',
                        role: ['admin', 'group', 'user'],
                        link: '/user',
                    },
                    {
                        id: '11',
                        name: 'w.administrator w.dashboard',
                        role: ['admin', 'group', 'user'],
                        link: '/user',
                    },
                ],
            },
        ],
    },
    {
        name: 'w.public w.cloud',
        icon: 'Cloud',
        role: ['admin', 'group', 'user'],
        items: [],
    },
    {
        name: 'w.private w.cloud',
        icon: 'CloudCircle',
        role: ['admin', 'group', 'user'],
        items: [],
    },
    {
        name: 'w.authentication w.authority',
        icon: 'VpnKey',
        role: ['admin', 'group'],
        items: [
            {
                name: 'w.group',
                role: ['admin', 'group'],
                link: '/user',
            },
            {
                name: 'w.user',
                role: ['admin', 'group'],
                link: '/user',
            },
            {
                name: 'w.role',
                role: ['admin', 'group'],
                link: '/user',
            },
            {
                name: 'w.authority',
                role: ['admin'],
                link: '/user',
            },
        ],
    },
    {
        name: 'w.management',
        icon: 'Settings',
        role: ['admin'],
        items: [
            {
                name: 'w.setting',
                role: ['admin'],
                link: '/user',
            },
            {
                name: 'w.resource w.approval',
                role: ['admin'],
                link: '/user',
            },
            {
                name: 'w.credential',
                role: ['admin'],
                link: '/user',
            },
            {
                name: 'w.billing',
                role: ['admin'],
                link: '/user',
            },
            {
                name: 'w.spec',
                role: ['admin'],
                link: '/user',
            },
            {
                name: 'w.adminProtectSet',
                role: ['admin'],
                link: '/user',
            },
        ],
    },
];
