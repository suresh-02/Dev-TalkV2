import { Button, Form, Input } from "antd";
import logo from "../assets/logo.png";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
type FieldType = {
  email?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const Login = () => {
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
      <p>
        New to Dev-Talk? <a>register now</a>
      </p>
    </div>
  );
};

export default Login;
