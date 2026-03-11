import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ProLayout } from '@ant-design/pro-components';
import { HomeOutlined, SolutionOutlined, UserAddOutlined, SmileOutlined } from '@ant-design/icons';
import styled, { createGlobalStyle } from 'styled-components';

const ProLayoutStyleOverride = createGlobalStyle`
  /* 점선 아래 ~ 첫 메뉴 사이 간격 */
  .ant-pro-layout .ant-pro-sider .ant-menu {
    padding-top: 12px; /* 원하는 만큼 늘리기 */
  }

  /* 아이콘 로고 색상 */
  .ant-pro-layout .ant-pro-sider-logo .anticon,
  .ant-pro-layout .ant-pro-sider-logo .anticon svg {
    color: #0ab96d !important;
    fill: #0ab96d !important;
  }

  /* 기본 메뉴 아이템 */
  .ant-pro-layout .ant-menu-item {
    border-radius: 10px;
    padding-left: 12px;
    height: 36px;       
    line-height: 36px;  
    padding: 0 12px;    
  }

  /* 기본 hover (선택되지 않은 항목) */
    .ant-pro-layout .ant-menu-item:hover {
    background: #eeeeee !important;
    color: #1a1f36 !important;
  }


  /* 선택된 메뉴: 배경 제거 + 글자 파란색 */
  .ant-pro-layout .ant-menu-item-selected {
    background: transparent !important;
    color: #0ab96d !important;
    font-weight: 800; /* 선택 시 굵게 */
  }

  /* 선택된 항목 hover는 파란색 유지 */
  .ant-pro-layout .ant-menu-item-selected:hover {
    color: #0ab96d !important;
    background: #e8fcf0 !important; /* 하늘색 */
  }

`;

//React.FC : React Functional Component 리액트의 함수형 컴포넌트
export const MainLayout: React.FC = () => {
  const navigate = useNavigate();       //useNavigate() 페이지 이동 리모컨
  const location = useLocation();       //useLocation() 현재 주소 위치 탐지기
  
  return (
    <>
    <ProLayoutStyleOverride />
    <ProLayout
      layout="side"
      disableMobile
      title="JOY INTRANET"
      logo={<SmileOutlined />}
      location={{ pathname: location.pathname }}
      menuProps={{
        selectedKeys: [location.pathname], //하위 주소 같더라도 하나만 선택
      }}
      route={{ 
        path: '/',
        routes: [
          { path: '/dashboard', name: '대시보드', icon: <HomeOutlined /> },
          { path: '/employees', name: '직원 목록', icon: <SolutionOutlined /> },
          { path: '/employees/register', name: '직원 등록', icon: <UserAddOutlined /> },
        ],
      }}
        menuItemRender={(item, dom) => {
        const path = item.path;
        if (typeof path === 'string') {
            return <span onClick={() => navigate(path)}>{dom}</span>;
        }
        return dom;
        }}
      // 사이드바 톤 조정 
      siderWidth={240}
      token={{
        sider: {
        colorMenuBackground: '#f6f9fc',
        colorTextMenu: '#1a1f36',
        colorTextMenuSelected: '#1a1f36',
        colorBgMenuItemSelected: '#eef1f4',
        },
      }}
    >
      <Outlet />
    </ProLayout>
    </>
  );
};