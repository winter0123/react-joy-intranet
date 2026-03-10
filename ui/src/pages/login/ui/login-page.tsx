import { Form, Input, Button, Card, message } from 'antd';
import { useAuthStore } from '@/features/auth/model/use-auth-store';

interface LoginValues {
    username?: string;
    password?: string;
}

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

const LoginPage = () => {
    const { login } = useAuthStore(); //feature 로그인 기능 가져오기

    //버튼 클릭시 실행되는 함수
    const handleLoginSubmit = (values: LoginValues) => {
        console.log('입력값 확인', values);
        login();
        message.success('로그인 성공');
    }

    return (
        <div style={{
            display: 'flex',            // flex 유연한 박스
            justifyContent: 'center',   // justifyContent 가로정렬
            alignItems: 'center',       // alignItems 세로 정렬
            width: '100vw',             // VH (Viewport Height) 화면 꽉 채우기
            height: '100vh',            // 세로 꽉 채우기
            position: 'fixed',          // 다른 레이아웃의 영향을 받지 않도록 고정
            top: 0,
            left: 0,
            backgroundColor: '#f5f5f5'
        }}>
            <Card title="JOY INTRANET" style={{ width: 350, textAlign: 'center' }}>
                <p style={{ marginBottom: 20, color: '#666' }}>서비스 이용을 위해 로그인해주세요.</p>
                <LoginForm onFinish={handleLoginSubmit} />  {/* 위 입력 폼끝나면 전달 */}
            </Card>
        </div>
    )
};

export default LoginPage;


