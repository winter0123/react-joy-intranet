import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/widgets/main-layout/ui/main-layout';
import { LoginPage } from '@/pages/login';
import { DashboardPage } from '@/pages/dashboard';
import { EmployeeRegisterPage } from '@/pages/employee-register';
import { EmployeePage } from '@/pages/employee'

export const AppRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>=
                <Route path='/login' element={<LoginPage />} />
                <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/employees" element={<EmployeePage />} />
                <Route path="/employees/register" element={<EmployeeRegisterPage />} />
                </Route>
                <Route path='/' element={<Navigate to="/login" replace/>} />
            </Routes>
        </BrowserRouter>
    );
};