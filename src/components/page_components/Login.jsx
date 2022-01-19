import tw from "twin.macro";
import Link from "next/link";
import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button as MuiButton,
} from "@mui/material";

import { Button } from "../TailwindStyles";
import Show from "../../../public/svg/show.svg";
import Hide from "../../../public/svg/hide.svg";
import TwoSectionsLayout from "../TwoSectionsLayout";
import { login, forgotPassword } from "../../firebase/auth.firebase";

const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [forgotPasswordShown, setForgotPasswordShown] = useState(false);

  const handleLogIn = () => {
    login(usernameEmail, password);
  };

  const handleForgotPassword = () => {
    forgotPassword(usernameEmail).then((res) => {
      res && setForgotPasswordShown(false);
    });
  };

  return (
    <TwoSectionsLayout>
      {!forgotPasswordShown && (
        <div css={[tw`max-w-sm`]}>
          <Title>Log in with email</Title>

          <Form>
            {/* Username */}
            <TextField
              label="Email Address/Username"
              type="text"
              variant="outlined"
              value={usernameEmail}
              fullWidth
              onChange={(e) => setUsernameEmail(e.target.value)}
              required
            />

            {/* password */}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={passwordShown ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPasswordShown(!passwordShown)}
                      edge="end"
                    >
                      {passwordShown ? <Hide /> : <Show />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Form>

          <ForgotPassword onClick={() => setForgotPasswordShown(true)}>
            Forgot Password?
          </ForgotPassword>

          <ButtonWrapper onClick={handleLogIn} className="smallBold">
            Continue
          </ButtonWrapper>

          <AlternateText>
            Don&apos;t have an account?{" "}
            <Link href="/signup" passHref>
              <Anchor>Sign Up</Anchor>
            </Link>
            `
          </AlternateText>
        </div>
      )}

      {forgotPasswordShown && (
        <div css={[tw`max-w-sm`]}>
          <Title>Forgot Password?</Title>

          <Form>
            {/* Username */}
            <TextField
              label="Email Address"
              type="email"
              variant="outlined"
              value={usernameEmail}
              fullWidth
              onChange={(e) => setUsernameEmail(e.target.value)}
            />
          </Form>

          <ButtonWrapper onClick={handleForgotPassword} className="smallBold">
            Continue
          </ButtonWrapper>

          <MuiButton
            sx={{ textDecoration: "underline", marginTop: 4 }}
            onClick={() => setForgotPasswordShown(false)}
            color="primary"
          >
            Back
          </MuiButton>
        </div>
      )}
    </TwoSectionsLayout>
  );
};

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const ButtonWrapper = tw(
  Button
)`cursor-pointer text-white w-full rounded-full bg-primary-darkest py-5 px-10 mt-10 duration-300 transition-all`;
const Form = tw.form`mt-20 space-y-12 w-full`;
const ForgotPassword = tw.button`w-full text-left mt-9 text-secondary-darkest`;
const Span = tw.span``;
const AlternateText = tw.p`text-textBg-light mt-9 `;
const Anchor = tw.a`text-secondary-darkest font-semibold tracking-wider cursor-pointer`;

export default Login;
