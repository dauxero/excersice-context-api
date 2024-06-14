import React, { useContext } from "react";
import { Context } from "../context/Context";
export const Home = () => {
  //? estructuracion
  const { user } = useContext(Context);
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>
        Hola Bienvenid@ <strong>{user.name}</strong>, a mi tienda!!
      </p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};
