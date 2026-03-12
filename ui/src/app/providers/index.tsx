import { App, ConfigProvider } from 'antd';
import { AppRouter } from './router/app-router';
import './i18n';

export const AppProviders = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                colorPrimary: '#0ab96d',  // 기본색을 교체하여 지정
                },
            }}
        >
        <App>
            <AppRouter/>
        </App>
        </ConfigProvider>
    );
};