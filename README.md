# 🚀 SpaceX App – Proyecto Final Módulo 8

Aplicación desarrollada con **React + Vite** que consume la API de **SpaceX**, incluye **autenticación simulada**, **rutas protegidas**, validaciones de formularios con **React Hook Form + Zod** y manejo de estado global con **Context API**.  

Este proyecto corresponde al **módulo 8**, integrando todo lo aprendido: GitHub, Git Flow, React, autenticación, rutas privadas y despliegue en **Vercel**.

---

## 📦 Tecnologías utilizadas
- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Zustand / Context API](https://react.dev/learn/scaling-up-with-reducer-and-context)
- [Vercel](https://vercel.com/)

---

## ⚙️ Instalación y ejecución local

Clona este repositorio y entra en la carpeta:

```bash
git clone https://github.com/andylbtt/spacex-app.git
cd spacex-app
```

Instala las dependencias:

```bash
npm install
```

Ejecuta el proyecto en modo desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🌐 Demo en Vercel
👉 [Ver aplicación desplegada](https://TU-LINK-VERCEL.vercel.app)

---

## 📂 Estructura del proyecto
```
/src
  /components
    LaunchCard.jsx
  /context
    AuthContext.jsx
  /hooks
    useFetchLaunches.js
  /pages
    Home.jsx
    Launches.jsx
    Login.jsx
  /routes
    PrivateRoute.jsx
  main.jsx
  styles.css
```

---

## 🔑 Funcionalidades
✅ **Login con validación** (email válido y password mínimo 6 caracteres).  
✅ **Rutas protegidas** (`/launches` solo accesible tras login).  
✅ **Consumo de la API SpaceX** (listado de lanzamientos dinámicos).  
✅ **Manejo de estado global** con Context API.  
✅ **Lazy loading** de páginas con React Suspense.  
✅ **Deploy en Vercel** conectado a GitHub.  

---



