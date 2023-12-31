"use client";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Model from "../Model";
import useLoginModel from "../hooks/useLoginModel";
import useRegisterModel from "../hooks/useRegisterModel";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";

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

      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response) {
        if (response.error) {
          toast.error("Failed to login");
        } else {
          toast.success("Login successful");
          loginModel.onClose();
        }
      } else {
        toast.error("No response received from the server");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while logging in");
    } finally {
      setIsLoading(false);
    }
  }, [loginModel, email, password]);

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
        type="password"
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
