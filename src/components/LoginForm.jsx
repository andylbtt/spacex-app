import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext.jsx";

const schema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export default function LoginForm() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    login(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 8 }}>
      <input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <small>{errors.email.message}</small>}

      <input type="password" placeholder="Password" {...register("password")} />
      {errors.password && <small>{errors.password.message}</small>}

      <button disabled={isSubmitting} type="submit">Entrar</button>
    </form>
  );
}
