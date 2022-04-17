import { IconDashboard, IconBrandChrome } from '@tabler/icons';

const icons = { IconDashboard, IconBrandChrome };

const menuItems = {
    items: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'group',
            children: [
                {
                    id: 'dashboard',
                    title: 'Thống kê',
                    type: 'item',
                    url: '/dashboard',
                    icon: icons.IconDashboard,
                    breadcrumbs: false
                },
                {
                    id: 'employee-page',
                    title: 'Quản lí giáo viên',
                    type: 'item',
                    url: '/sample-page',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true
                },
                {
                    id: 'student-page',
                    title: 'Quản lí học sinh',
                    type: 'item',
                    url: '/students',
                    icon: icons.IconBrandChrome,
                    breadcrumbs: true
                }
            ]
        }
    ]
};
export default menuItems;
