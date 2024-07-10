"use client";
import React, { useState } from "react";
import { useActionState } from "react";
import { handleUsernamePasswordLogin } from "./actions";

const SignInForm = () => {
  const [state, formAction] = useActionState(handleUsernamePasswordLogin, { error: "" });
  return (
    <form action={formAction}>
      <input type='text' name='username' placeholder='Username' required />
      <input type='password' name='password' placeholder='Password' required />

      <p>{state.error}</p>
      <button type='submit'>Login</button>
    </form>
  );
};

export default SignInForm;
