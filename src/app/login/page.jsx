'use client'
import { Button, Checkbox, Form, Input, Flex,message } from 'antd';
import {login} from '@/lib/action'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
         const data = await login(values)
         console.log(data)
         if (data.succees ){
            router.push('/addList')
         }else{
          message.error(data.error)

         }

      };
    return (
            <Form
            name="login"
            initialValues={{
            remember: true,
            }}
            style={{
            maxWidth: 360,
            }}
            onFinish={onFinish}
        >
            <Form.Item
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your Username!',
                },
            ]}
            >
            <Input  placeholder="Username" />
            </Form.Item>
            <Form.Item
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your Password!',
                },
            ]}
            >
            <Input  type="password" placeholder="Password" />
            </Form.Item>
            <Form.Item>
            <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
            
            </Flex>
            </Form.Item>

            <Form.Item>
            <Button block type="primary" htmlType="submit">
                Log in
            </Button>
        
            </Form.Item>
        </Form>

    )

}

export default Login