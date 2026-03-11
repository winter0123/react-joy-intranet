import { Card, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const Container = styled.div`
    width:100%;
`;

export const EmployeePage = () => {
    return (
        <Container>
            <Card>
                <Title level={3}>사원리스트조회</Title>
                <p>사원 리스트 조회 Form 작성예정</p>
            </Card>
        </Container>
    );
};