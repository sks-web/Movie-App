import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import CustomInput from "../atoms/customInput/customInput";
const MovieForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFormSubmit = (e) => {
    console.log(e);
    dispatch({ type: "ADD_MOVIES", movie: e });
    form.resetFields();
    alert("Data successfully add!!!");
  };
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
          margin: "auto",
          width: "60%",
          padding: "2rem",
          border: "1px solid grey",
          borderRadius: "10px",
        }}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          autoComplete="off"
          onFinish={onFormSubmit}
        >
          <Form.Item
            label="Movie Name"
            name="name"
            rules={[{ required: true, message: "Please input movie name!" }]}
          >
            <CustomInput placeholder="Enter movie name" />
          </Form.Item>
          <Form.Item
            label="Cast"
            name="cast"
            rules={[{ required: true, message: "Please input cast!" }]}
          >
            <CustomInput placeholder="enter cast name separated by ','" />
          </Form.Item>
          <Form.Item
            label="Similar Movies"
            name="similarMovies"
            rules={[
              { required: true, message: "Please input Similars movies!" },
            ]}
          >
            <CustomInput placeholder="Enter similar movie separated by ','" />
          </Form.Item>
          <Form.Item
            label="Genre"
            name="genre"
            rules={[{ required: true, message: "Please input genre!" }]}
          >
            <CustomInput placeholder="Enter genre" />
          </Form.Item>
          <Form.Item
            label="Language"
            name="language"
            rules={[{ required: true, message: "Please input language!" }]}
          >
            <CustomInput placeholder="Enter orginal language of movie" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <Input.TextArea placeholder="Desribe in 30 words" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              Add Movie
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default MovieForm;
