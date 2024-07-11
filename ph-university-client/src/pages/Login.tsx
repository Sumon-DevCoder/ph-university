import { useForm } from "react-hook-form";
import { authApi } from "../redux/features/auth/authApi";

const Login = () => {
  const [login, { error }] = authApi.useLoginMutation();
  const { register, handleSubmit } = useForm();

  console.log("err", error);

  type TUserInfo = {
    id: string;
    password: string;
  };

  const onSubmit = (data: TUserInfo) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };

    console.log(userInfo);

    // const res = await login(userInfo);
    // console.log(res);
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
