import { Dropdown, Button } from 'antd';
import { DownOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './global-header.module.css';
import { useState } from 'react';

type GlobalHeaderProps = {
  title: string;
  onChangeLanguage: (key: string) => void;
};

export const GlobalHeader = ({ title, onChangeLanguage }: GlobalHeaderProps) => {
  
    const [lang, setLang] = useState<'한국어'|'English'>('한국어');
    const langMenu = {
    items: [
      { key: 'ko', label: '한국어' },
      { key: 'en', label: 'English' },
    ],
    onClick: ({ key }: { key: string }) => {
        setLang(key === 'ko' ? '한국어' : 'English');
        onChangeLanguage(key);  
    }
  };

  return (
    <header className={styles.headerWrap}>
      <div className={styles.title}>{title}</div>
      <div className={styles.right}>
        <Dropdown menu={langMenu} placement="bottomRight">
          <Button type="text" icon={<GlobalOutlined />}>
            {lang} <DownOutlined />
          </Button>
        </Dropdown>
      </div>
    </header>
  );
};
