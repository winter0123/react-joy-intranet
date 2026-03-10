import React from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { DashboardOutlined, TeamOutlined, LogoutOutlined, UserAddOutlined } from '@ant-design/icons';
import { useAuthStore } from '@/features/auth/model/use-auth-store';

const { Header, Content, Sider } = Layout;

//React.FC : React Functional Component 리액트의 함수형 컴포넌트
export const MainLayout: React.FC = () => {
  const navigate = useNavigate();       //useNavigate() 페이지 이동 리모컨
  const location = useLocation();       //useLocation() 현재 주소 위치 탐지기
  const { logout } = useAuthStore();    //useAuthStore() 직접만든 로그인 상태 저장소
  
  //colorBgContainer 컨테이너 배경색, borderRadiusLG 둥글기(Large)
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  // 왼쪽 메뉴 구성(자바스크립트 방식)
  // key: 고유 주소, icon: <글자 앞에 붙을 아이콘,>, label: '실제 화면에 보일 글자'
  const menuItems = [
    { key: '/', icon: <DashboardOutlined />, label: '대시보드' },
    { key: '/employees', icon: <TeamOutlined />, label: '직원 목록' },
    { key: '/employees/register', icon: <UserAddOutlined /> , label: '사원 등록'}
  ];

  return (
    //  전체 레이아웃이 화면의 가로/세로를 꽉 채우도록 설정
    <Layout style={{ minHeight: '100vh', width: '100vw' }}>

      {/* 좌측 사이드바 (Sider) */}
      <Sider>
            <div style={{ height: 32, margin: 16, background: 'rgba(255,255,255,.2)', color: 'white', textAlign: 'center' }}>JOY 인트라넷</div>
            <Menu
                theme="dark"
                mode="inline"                           //mode:메뉴나열방식 = inline(아래로)/horizontal(옆으로나열)/vertical(팝업처럼 옆으로)
                selectedKeys={[location.pathname]}      //같은 주소를 선택
                items={menuItems}                       //위에서 만든 메뉴 데이터를 넣음
                onClick={({ key }) => navigate(key)}    //클릭시 해당 주소로 이동
            />
        </Sider>

        {/* 3. 우측 전체 구역 (Header + Content) */}
        <Layout>
            <Header style={{ background: colorBgContainer, textAlign: 'right', paddingRight: 20 }}>
                <Button type="link" danger icon={<LogoutOutlined />} onClick={() => { logout(); navigate('/login'); }}>
                    로그아웃
                </Button>
            </Header>

            {/* 실제 우측 내용이 들어가는 구역 */}
            <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer, borderRadius: borderRadiusLG, minHeight: 280 }}>
                {/* 주소에 따라 바꿔질 페이지 자리 */}
            <Outlet />
            </Content>
        </Layout>

    </Layout>
  );
};