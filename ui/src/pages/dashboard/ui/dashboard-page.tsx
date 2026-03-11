import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const Container = styled.div`
    width:100%;
`;

export const DashboardPage = () => {
    return (
        <Container>
            <Card>
                <Title level={3}>대시보드</Title>
                <p>대시보드를 입력하는 양식 Form 작성예정</p>
            </Card>
        </Container>
    );
};