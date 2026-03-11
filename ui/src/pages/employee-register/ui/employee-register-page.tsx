import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const Container = styled.div`
    width:100%;
`;

export const EmployeeRegisterPage = () => {
    return (
        <Container>
            <Card>
                <Title level={3}>신규 사원 등록</Title>
                <p>사원정보를 입력하는 양식 Form 작성예정</p>
            </Card>
        </Container>
    );
};