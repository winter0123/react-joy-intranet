import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useState } from 'react';
import { SideBar } from '@/widgets/main-layout/ui/side-bar';
import { GlobalHeader } from '@/widgets/main-layout/ui/global-header';
import { GlobalFooter } from '@/widgets/main-layout/ui/global-footer';
import styles from './main-layout.module.css';
import { useTranslation } from "react-i18next";
import { HomeOutlined, ProfileOutlined, UserAddOutlined } from "@ant-design/icons";

const { Content } = Layout;

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar
        title="JOY INTRANET"
        items={[
          { key: '/dashboard', label: t('Dashboard'), icon:<HomeOutlined /> },
          { key: '/employees', label: t('Employee'), icon: <ProfileOutlined />},
          { key: '/employees/register', label: t('EmployeeRegister'), icon:<UserAddOutlined /> },
        ]}
        selectedKey={location.pathname}
        onSelect={navigate}
        collapsed={collapsed}
        onCollapse={setCollapsed}
      />

      <Layout>
      <GlobalHeader title="Dashboard" onChangeLanguage={(key) => {i18n.changeLanguage(key)}} />
      <Content className={styles.contentWrapper}>
        <Outlet />
      </Content>
      <GlobalFooter />
      </Layout>

    </Layout>
  );
};
