import { useForm } from "react-hook-form";
import { authApi } from "../redux/features/auth/authApi";
import verifyToken from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const [login, { error }] = authApi.useLoginMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "0001",
      password: "admin12345",
    },
  });

  console.log("err", error);

  type TUserInfo = {
    id: string;
    password: string;
  };

  const onSubmit = async (data: TUserInfo) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    console.log(userInfo);

    const res = await login(userInfo).unwrap();

    const user = verifyToken(res.data?.accessToken);
    dispatch(setUser({ user, token: res.data?.accessToken }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" {...register("id")} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
