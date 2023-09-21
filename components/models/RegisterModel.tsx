"use client";

import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import useLoginModel from "../hooks/useLoginModel";
import useRegisterModel from "../hooks/useRegisterModel";

const RegisterModel = () => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModel.onClose();
    loginModel.onOpen();
  }, [isLoading, registerModel, loginModel]);

  // const onSubmit = async () => {
  //   try {
  //     setIsLoading(true);
  //     console.log("useRegister");

  //     const resposnse = await fetch("/api/register", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         name: name,
  //         username: username,
  //         email: email,
  //         password: password,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // const data = resposnse.json();
  //     if (!resposnse.ok) {
  //       throw new Error("something went wong !");
  //     }
  //     // await axios.post("/api/register", {
  //     //   name: name,
  //     //   username: username,
  //     //   email: email,
  //     //   password: password,
  //     // });

  //     toast.success("Account created");

  //     // await signIn("credentials", {
  //     //   email,
  //     //   password,
  //     // });
  //     registerModel.onClose();
  //   } catch (error) {
  //     console.error("error at useRegister", error);
  //     toast.error("Something went wrong");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log("useRegister");

      await axios.post("/api/registers/", {
        name,
        username,
        email,
        password,
      });

      toast.success("Account created");

      // await signIn("credentials", {
      //   email,
      //   password,
      // });
      registerModel.onClose();
    } catch (error) {
      console.error("error at useRegister", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModel, name, username, email, password]);

  const bodyContent = (
    <div className="flex flex-col gap-3">
      <Input
        placeHolder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />

      <Input
        placeHolder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />

      <Input
        placeHolder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeHolder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4 ">
      <p>
        Already an account?{" "}
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          sign in
        </span>
      </p>
    </div>
  );

  return (
    <Model
      titleImage="/logo.webp"
      disabled={isLoading}
      isOpen={registerModel.isOpen}
      title="Create an account"
      actionLable="Register"
      onClose={registerModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModel;
