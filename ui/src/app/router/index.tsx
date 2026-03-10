import { createBrowserRouter, Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/shared/ui/layout/MainLayout';
import LoginPage from '@/pages/login/ui/login-page';
import EmployeeRegisterPage from '@/pages/employee-register';

/**
 * 1. [작은 지도] 메인 서비스 구역 (로그인 후 접근 가능한 곳) 
 * MainLayout 안의 <Outlet /> 자리에 들어갈 자식들을 정의
 */
const mainRoutes: RouteObject[] = [
    {
        path: '',
        element: <div>대시보드 화면</div>,
    },
    {
        path: 'employees',
        element: <div>직원 목록 화면</div>,
    },
    {
        path: 'employees/register', 
        element: <EmployeeRegisterPage />,
    },
];

/**
 * 2. [큰 지도] 라우터 생성 함수
 * 로그인 상태에 따라 export 다름
 */
export const getRouter = (isLoggedIn: boolean) => {
    const routes: RouteObject[] = [
        {
            path: '/login',
            element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" replace />,
        },
        {
            path: '/',
            //로그인을 했다면 MainLayout, 안했다면 login페이지로 강제소환
            element: isLoggedIn ? <MainLayout /> : <Navigate to="/login" replace />, 
            children: mainRoutes,
        },
        {
            //예외처리
            path: '*',
            element: <Navigate to="/" replace />
        },
    ];

    // 설정된 routes를 가지고 실제 라우터 객체 생성
    return createBrowserRouter(routes);
}