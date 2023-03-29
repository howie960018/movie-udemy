import React from "react";
import { Form } from "antd";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
function Login() {
  const onFinish = (values) => {
    console.log("success",values);
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
            <Button fullwidth title="REGISTER" type="submit" />
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
