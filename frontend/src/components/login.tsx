import { Button, Form, Input, message } from "antd";
import logo from "../assets/logo.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createNotification } from "../services";

type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
  //! to display the message

  //!to handle login credentials
  const [login, setLogin] = useState({ username: "", password: "" });
  //! to handle change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  //! to handle submit
  const onFinish = async (values: FieldType) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        values
      );
      const token = response.data.token;
      localStorage.getItem(token);
      localStorage.setItem(token, "token");
      console.log("User logged in :", response.data);

      message.success("User login sucessfull");
      navigate("/");
    } catch (error) {
      message.error("User login unsucessfull");
      // createNotification("error");
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col gap-y-4  mt-[200px] justify-center items-center">
      <img className="w-[380px]" src={logo} />
      <h2 className=" text-center  pb-[10px] text-2xl font-bold  tracking-tight text-gray-900">
        Login to your account
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
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input onChange={handleChange} />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          style={{ width: "400px" }}
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={handleChange} />
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
      <p>
        New to Dev-Talk? <a>register now</a>
      </p>
    </div>
  );
};

export default Login;
