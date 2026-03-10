import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const EmployeeRegisterPage: React.FC = () => {
    return (
        <Card>
            <Title level={3}>신규 사원 등록</Title>
            <p>사원 정보를 입력하는 양식(Form) 작성 예정</p>
        </Card>
    );
};

export default EmployeeRegisterPage;