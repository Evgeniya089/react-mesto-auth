import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      className="auth-form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onLogin({ email, password });
      }}
    >
      <h2 className="auth-form__title">Вход</h2>
      <input
        id="input-name"
        type="email"
        className="auth-form__input auth-form__input_type_email "
        name="email"
        placeholder="Email"
        minLength="2"
        maxLength="40"
        value={email || ""}
        onChange={(evt) => setEmail(evt.target.value)}
        required
      />
      <span className="auth-form__span-error" id="auth-form__span-error"></span>
      <input
        id="input-description"
        type="password"
        className="auth-form__input auth-form__input_type_password"
        name="password"
        placeholder="пароль"
        minLength="2"
        maxLength="200"
        value={password || ""}
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />
      <span className="auth-form__span-error" id="auth-form__span-error"></span>
      <button className="auth-form__button" type="submit">
        Войти
      </button>
    </form>
  );
}
