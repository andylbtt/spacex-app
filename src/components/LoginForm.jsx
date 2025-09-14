import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
const schema = z.object({
email: z.string().email("Invalid email format"),
password: z.string().min(6, "Password must be at least 6 characters"),
});
const LoginForm = () => {
const {
register,
handleSubmit,
formState: { errors },
} = useForm({ resolver: zodResolver(schema) });
const onSubmit = (data) => {
console.log("Login Data:", data);
};
return (
<form onSubmit={handleSubmit(onSubmit)}>
<input type="email" {...register("email")}
placeholder="Email" />
<p>{errors.email?.message}</p>
<input type="password" {...register("password")}
placeholder="Password" />

Unset
<p>{errors.password?.message}</p>
<button type="submit">Login</button>
</form>
);
};
export default LoginForm;
