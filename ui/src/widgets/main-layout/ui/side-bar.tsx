import { Layout, Menu } from 'antd';
import styles from './side-bar.module.css';
import type { ReactNode } from 'react';

// Layout 안에 있는 Sider만 꺼내서 쓰기 위한 구조 분해
// AntD의 사이드바 레이아웃을 그대로 활용하려고 사용
const { Sider } = Layout;

type MenuItem = {
  key: string;
  label: string;
  icon: ReactNode;
};

type SideBarProps = {
  title: string;
  items: MenuItem[];
  selectedKey: string; //메뉴 클릭 이름 확인용
  onSelect: (key: string) => void; //보고용
  collapsed: boolean;
  onCollapse: (next: boolean) => void;
};



export const SideBar = ({ title, items, selectedKey, onSelect, collapsed, onCollapse }: SideBarProps) => {
  return (
    <Sider
      className={styles.sider}
      width={220}
      collapsedWidth={72}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      theme="light"
    >
      <div style={{ 
        height: 56, 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 16px', 
        fontWeight: 700 
      }}>
      {title}
      </div>
      <Menu
        mode="inline"
        items={items}
        selectedKeys={[selectedKey]}
        onClick={({ key }) => onSelect(String(key))}
      />
    </Sider>
  );
};
