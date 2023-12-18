import { Button, Form, Input } from "antd";
import logo from "../assets/logo.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const Register = () => {
  const [, setLoading] = useState(false); //! loading useState.

  const navigate = useNavigate(); //! useNavigate hook.

  //! onSubmit function
  const onFinish = async (values: FieldType) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/users/register",
        values
      );
      console.log("User Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("User Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = async (error: any) => {
    console.log("Failed:", error);
  };

  return (
    <div className="flex flex-col gap-y-4  mt-[200px] justify-center items-center">
      <img className="w-[380px]" src={logo} />
      <h2 className=" text-center  pb-[10px] text-2xl font-bold  tracking-tight text-gray-900">
        Register your account,
        <br />
        contribue to the community
      </h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          style={{ width: "400px" }}
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          style={{ width: "400px" }}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          style={{ width: "400px" }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 10 }}>
          <Button
            style={{ background: "#AC26ED", color: "white", width: "190px" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
