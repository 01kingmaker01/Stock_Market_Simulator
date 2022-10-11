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

const Signin = () => {
  const reset_value = {
    username: "",
    password: "",
  };
  const [state, setState] = useState(reset_value);

  const onSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log("Submiteed", state);

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
        <SubmitBtn type="submit">Register</SubmitBtn>
      </Form>
    </OuterContainer>
  );
};
export default Signin;
