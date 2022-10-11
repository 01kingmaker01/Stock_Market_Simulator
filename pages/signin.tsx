import { GetServerSideProps } from "next";
import Image from "next/image";
import { useState } from "react";
import {
  OuterContainer,
  Form,
  InnCon,
  Label,
  Input,
  SubmitBtn,
} from "./signup";
import nookies from "nookies";
import axios from "axios";
import { useRouter } from "next/router";

const Signin = () => {
  interface reset_type {
    username: string;

    password: string;
  }

  const reset_value: reset_type = {
    username: "",
    password: "",
  };
  const [state, setState] = useState(reset_value);

  const router = useRouter();

  const onSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/api/user/login", {
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        if (response) {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
        <SubmitBtn type="submit">Log In</SubmitBtn>
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

export default Signin;
