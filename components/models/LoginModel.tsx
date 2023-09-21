"use client";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useLoginModel from "../hooks/useLoginModel";
import useRegisterModel from "../hooks/useRegisterModel";

const LoginModel = () => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModel.onClose();
    registerModel.onOpen();
  }, [isLoading, registerModel, loginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      loginModel.onClose;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModel]);

  const bodyContent = (
    <div className="flex flex-col gap-3">
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
        don't have an accout ?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          {" "}
          Create
        </span>
      </p>
    </div>
  );

  return (
    <Model
      titleImage="/logo.webp"
      disabled={isLoading}
      isOpen={loginModel.isOpen}
      title="Sign in"
      actionLable="submit"
      onClose={loginModel.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModel;
