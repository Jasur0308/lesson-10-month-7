import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../../../redux/api/authApi";
import { logIn } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const { Title, Text } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInRequest, { data, isSuccess }] = useLogInMutation();

  const onFinish = (values) => {
    logInRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(logIn({ token: data.payload.token }));
      notification.success({
        message: "Successfully logged in! Go ahead 😊",
      });
      navigate("/profile");
    }
  }, [isSuccess, dispatch, data, navigate]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Form
        className="max-w-md w-full bg-white shadow-md rounded-lg p-8"
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Title level={2} className="text-center text-gray-800 mb-6">Login</Title>
        
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="border-gray-300 rounded-md" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password className="border-gray-300 rounded-md" />
        </Form.Item>

        <Form.Item>
          <Button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <div className="text-center mt-4">
          <Text className="text-gray-600">Don't have an account? <Link to="/auth/signup" className="text-blue-500 hover:underline">Sign Up</Link></Text>
        </div>
      </Form>
    </div>
  );
};

export default Login;