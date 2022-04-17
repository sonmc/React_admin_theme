import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';
// project imports
import Loadable from 'ui-component/Loadable';
import { Outlet } from 'react-router';
import MainLayout from 'layout/MainLayout';
import config from 'config';

const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));
// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/dashboard')));
// sample page routing
const StudentPage = Loadable(lazy(() => import('views/student-page')));
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes(
        [
            {
                path: '/',
                element: <Outlet />,
                children: [
                    {
                        path: '/login',
                        element: <AuthLogin3 />
                    },
                    {
                        path: '/register',
                        element: <AuthRegister3 />
                    }
                ]
            },
            {
                path: '/',
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <Dashboard />
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: '/students',
                        element: <StudentPage />
                    }
                ]
            }
        ],
        config.basename
    );
}
