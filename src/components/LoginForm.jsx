import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "../context/AuthContext";

const schema = z.object({
  email: z.string().email("Correo inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
});

export default function LoginForm() {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    login(data.email); // Guardamos el usuario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <input type="email" {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} placeholder="Contraseña" />
      <p>{errors.password?.message}</p>

      <button type="submit">Ingresar</button>
    </form>
  );
}

