import React from 'react'
import { Form, Input, Button } from 'antd';
import { toast } from '../../Common/utils';
import { useHistory, Link } from "react-router-dom";
import loginImg from "../../images/2.jpeg"
import "./login.css"
import apiInstance from "../Common/apiInstance";
import { ROLE, ROUTES, TOKEN } from '../../Common/constant';


const Login = (props) => {
    const history = useHistory();
    const onFinish = (values) => {
        apiInstance('/user/login', {
            method: 'POST',
            data: values,
        })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res, 'res')
                    localStorage.setItem(TOKEN, res.data.token)
                    localStorage.setItem(ROLE, res.data.role)
                    toast(res.data.message, 'success')
                    props.history.push(ROUTES.DASHBOARD);
                } else {
                    debugger
                    toast(res.data.message, 'error')
                }

            })
            .catch((err, data) => {
                console.log(err, 'err', data)
                toast(err.message, 'error')
            })
            .finally(() => {
                //   this.setLoading(false);
            });
    };

    const onFinishFailed = (error) => {
        console.log('Failed:', error);
    };

    return (
        <section>
            <div class="container">
                <div class="user signinBx">
                    <div class="imgBx"><img src={loginImg} alt="" /></div>
                    <div class="login-card">
                        <Form
                            name="login"
                            onFinish={onFinish}
                            colon={false}
                            requiredMark={false}
                            onFinishFailed={onFinishFailed}
                        >
                            <h1>Login</h1>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Please enter email!' }]}
                            >
                                <Input type="email" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item >
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Form.Item>
                            <p class="signup">
                                Don't have an account ?
                                <Link to="/register" >Sign Up.</Link>
                              
                            </p>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
