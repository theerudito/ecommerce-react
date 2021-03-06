import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, goRegister } from "../../store/slices/account/account";
import { LoginAPI } from "../Helpers/Api";
import { RoutesApps } from "../Router/Routers";

export const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: imput }) => {
    setData({ ...data, [imput.name]: imput.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToken = await LoginAPI(data);

    dispatch(getUser(localStorage.setItem("token", JSON.stringify(dataToken))));
    const token = JSON.parse(localStorage.getItem("token"));
    setError(true)
    if (token) {
      navigate(RoutesApps.account);
      window.location.reload();
    }
  };

  return (
    <>
      <article className="containerDataLoginUser">
        <div className="containerLogoLogin">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/Avatares%2FCategories%2Flogo1.svg?alt=media&token=29b3a6cc-833a-4fa7-b739-fa02027db8bf"
            alt="logo"
            className="logoLogin"
          />
        </div>

        <div className="containerLogin">
          <p>Login </p>
          <form onSubmit={handleSubmit}>
            <input
              value={data.email}
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
            <input
              value={data.password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />

            <button type="submit"  >
              Login
            </button>
            <button type="submit" onClick={() => dispatch(goRegister(true))}>
              Register
            </button>
          </form>
        </div>
      </article>
    </>
  );
};
