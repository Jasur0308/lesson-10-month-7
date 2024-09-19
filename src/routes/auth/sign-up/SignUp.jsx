import { Button, Form, Input, Typography, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { signUp } from "../../../redux/slices/authSlice";
import { useSignUpMutation } from "../../../redux/api/authApi";

const { Title, Text } = Typography;

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUpRequest, { data, isSuccess }] = useSignUpMutation();

  const onFinish = (values) => {
    signUpRequest(values);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(signUp({ token: data.payload.token }));
      notification.success({
        message: "Successfully signed up! Go ahead 😊",
      });
      navigate("/profile");
    }
  }, [isSuccess, dispatch, data, navigate]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <Title level={2} className="text-center text-gray-800 mb-6">
          Sign Up
        </Title>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please input your firstname!",
              },
            ]}
          >
            <Input className="border-gray-300 rounded-md" />
          </Form.Item>

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

          <Form.Item
            label="Photo URL"
            name="photo_url"
            rules={[
              {
                required: true,
                message: "Please input your photo URL!",
              },
            ]}
          >
            <Input type="url" className="border-gray-300 rounded-md" />
          </Form.Item>

          <Form.Item>
            <Button
              className="w-full bg-blue-500 text-white hover:bg-blue-600 transition duration-200 ease-in-out"
              type="primary"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </Form.Item>

          <div className="text-center mt-4">
            <Text className="text-gray-600">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </Text>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;