import React from "react";
import { Form,message } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { LoginUser } from "../../apicalls/users";
import { Link } from "react-router-dom";
function Login() {
  const onFinish = async (values) => {
    try {
      
      const response = await LoginUser(values);
      
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      
      message.error(error.message);
    }
  }
  

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-1">ShareMovies -Login</h1>
        <hr />
        <Form layout="vertical" className="mt-1"
        onFinish={onFinish}>
         
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "please input your email" }]}
          >
            <input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "please input your password" }]}
          >
            <input type="password" />
          </Form.Item>

          <div className="flex flex-col mt-2 gap-1">
            <Button fullwidth title="LOGIN" type="submit" />
            <Link to='/register'
            className="text-primary">
              {" "}
              Don't have an account ? Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
