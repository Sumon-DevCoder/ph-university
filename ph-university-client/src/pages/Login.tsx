import { FieldValues } from "react-hook-form";
import { authApi } from "../redux/features/auth/authApi";
import verifyToken from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Button } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = authApi.useLoginMutation();

  //     id: "0001",
  //     password: "admin12345",

  const defaultValues = {
    id: "0001",
    password: "admin12345",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      console.log(userInfo);

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data?.accessToken) as TUser;
      dispatch(setUser({ user, token: res.data?.accessToken }));

      toast.success("logged In", { id: toastId, duration: 2000 });

      console.log(user);

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <PHInput type="text" name="id" label="ID:" />
      <PHInput type="text" name="password" label="Password:" />
      <Button htmlType="submit">Login</Button>
    </PHForm>
  );
};

export default Login;
