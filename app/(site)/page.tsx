import Image from "next/image";
import React from "react";
import AuthForm from "./components/AuthForm";

const page = () => {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-grey-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="logo"
          height="60"
          width="60"
          className="mx-auto w-auto"
          src="/images/logo.webp"
        />
        <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <AuthForm />
      </div>
    </div>
  );
};

export default page;
