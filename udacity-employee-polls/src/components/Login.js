import { Button, Form, Input, Select, Divider, Image } from "antd";
import { useState } from "react";
import { connect } from "react-redux";
import "../css/App.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const Login = (props) => {
  console.log("login props", props.users);
  const selectOptions = [];
  props.users.forEach(([key, value]) => {
    selectOptions.push({ value: value.id, label: value.id });
    console.log("selectOptions", selectOptions);
  });

  return (
    <div>
      <img className="image" src="images/people.png" />
      <Divider />

      <Form
        name="basic"
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: "80%",
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
          <Select
            showSearch
            placeholder="Select a user"
            optionFilterProp="children"
            options={selectOptions}
          />
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  loading: authedUser === null,
  users: Object.entries(users),
});

export default connect(mapStateToProps)(Login);
