import { App, Button, Card, Form, Input } from 'antd';
import styled from 'styled-components';
import { useAuthStore } from '@/features/auth/model/use-auth-store';
import { useNavigate } from 'react-router-dom';

interface LoginValues {
    username?: string;
    password?: string;
}

// 인라인 스타일 금지 → Styled Components 사용.
const PageWrap = styled.div`
    display: 'flex';            /* flex 유연한 박스 */
    justifyContent: 'center';   /* justifyContent 가로정렬 */
    alignItems: 'center';       /* alignItems 세로 정렬 */
    width: '100vw';             /* VH (Viewport Height) 화면 꽉 채우기 */
    height: '100vh';            /* 세로 꽉 채우기 */
    position: 'fixed';          /* 다른 레이아웃의 영향을 받지 않도록 고정 */
    top: 0;
    left: 0;
    backgroundColor: '#f5f5f5';
`;

const Description = styled.p`
    margin-bottom: 20px;
    color: #666;
`;


const LoginForm = ({ onFinish }: { onFinish: (values: LoginValues) => void}) => ( 
    <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name ="username" rules={[{ required: true, message: '아이디를 입력하세요'}]}>
            <Input placeholder="아이디 입력" size="large" />
        </Form.Item>

        <Form.Item name="password" rules={[{ required:true, message: '비밀번호를 입력하세요'}]}>
            <Input.Password placeholder="비밀번호" size="large" />
        </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block >
                로그인
            </Button>
        </Form.Item>
    </Form>
);

// export default 금지 → Named export
export const LoginPage = () => {
    const { login } = useAuthStore(); //feature 로그인 기능 가져오기

    // static message 사용 금지 → App.useApp() 사용
    const { message } = App.useApp();;

    const navigate = useNavigate();

    //버튼 클릭시 실행되는 함수
    const handleLoginSubmit = (values: LoginValues) => {
        console.log('입력값 확인', values);
        login();
        message.success('로그인 성공');
        navigate('/dashboard');
    };

    return (
        <PageWrap>
            <Card title={'JOY INTRANET'} style={{ width: 350, textAlign: 'center' }}>
                <Description>{'서비스 이용을 위해 로그인해주세요'}</Description>
                <LoginForm onFinish={handleLoginSubmit} />  {/* 위 입력 폼끝나면 전달 */}
            </Card>
        </PageWrap>
    );
};
