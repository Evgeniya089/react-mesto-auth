import React from "react";
import logo from "../images/header-logo.svg";
import { Link, Route, Routes } from "react-router-dom";

export default function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <div className="header__flex">
        <div>
          <img className="header__logo" src={logo} alt="Логотип" />
        </div>
        <div>
          {email && <span className="header__email">{email}</span>}
          <Routes>
            <Route
              path="/sign-up"
              element={
                <Link className="header__link" to={"/sign-in"}>
                  Войти
                </Link>
              }
            ></Route>
            <Route
              path="/sign-in"
              element={
                <Link className="header__link" to={"/sign-up"}>
                  Регистрация
                </Link>
              }
            ></Route>
            <Route
              path="/"
              element={
                <Link
                  className="header__link"
                  to={"/sign-in"}
                  onClick={onSignOut}
                >
                  Выйти
                </Link>
              }
            ></Route>
          </Routes>
        </div>
      </div>
    </header>
  );
}
