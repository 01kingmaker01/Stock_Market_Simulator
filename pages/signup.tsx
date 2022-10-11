import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import tw from "twin.macro";
import nookies from "nookies";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const OuterContainer = tw.div`w-full min-h-screen flex items-center justify-center text-text  `;
export const InnCon = tw.div`flex flex-col`;
export const Form = tw.form`flex flex-col w-96 gap-y-4  shadow p-5 rounded `;
export const Label = tw.label``;
export const Input = tw.input`rounded h-10 pl-4 mt-1 text-searchbarText bg-searchbar border-0 outline-none  `;
export const SubmitBtn = tw.button`bg-main h-10 rounded `;

const Signup = () => {
  interface reset_type {
    username: string;
    email: string;
    fullName: string;
    password: string;
  }

  const reset_value: reset_type = {
    username: "",
    email: "",
    fullName: "",
    password: "",
    // confirmPass: "",
  };
  const [state, setState] = useState(reset_value);

  const router = useRouter();

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/api/user/add-user", {
        email: state.email,
        username: state.username,
        name: state.fullName,
        password: state.password,
      })
      .then((res) => {
        if (res) {
          router.push("/dashboard");
        }
      })
      .catch((e) => console.error(e));
    setState(reset_value);
  };

  const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      [target.name]: target.value, //! for checkbox target.type === "checkbox" ? target.checked :
    }));
  };

  return (
    <OuterContainer>
      <Form onSubmit={onSubmitHandler}>
        <div tw="flex items-center justify-center ">
          <Image
            height="48px"
            width="48px"
            tw="h-12 mx-auto"
            src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
            alt="logo"
          />
        </div>
        <InnCon>
          <Label htmlFor="Username">Username</Label>
          <Input
            type="text"
            id="Username"
            name="username"
            placeholder="johndoe69"
            onChange={onChangeHandler}
            value={state.username}
          />
        </InnCon>
        <InnCon>
          <Label htmlFor="name">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            onChange={onChangeHandler}
            value={state.fullName}
          />
        </InnCon>
        <InnCon>
          <Label htmlFor="Email">Email</Label>
          <Input
            type="email"
            id="Email"
            name="email"
            placeholder="john.doe@gmail.com"
            onChange={onChangeHandler}
            value={state.email}
          />
        </InnCon>
        <InnCon>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Pass@1"
            minLength={6}
            onChange={onChangeHandler}
            value={state.password}
          />
        </InnCon>
        <SubmitBtn type="submit">Register</SubmitBtn>
      </Form>
    </OuterContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  const cookies = nookies.get({ req });

  if (cookies.token) {
    console.log(cookies.token);
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Signup;
