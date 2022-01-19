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
  Button as MUIButton,
  CircularProgress,
} from "@mui/material";

import Show from "../../public/svg/show.svg";
import Hide from "../../public/svg/hide.svg";
import { register } from "../firebase/auth.firebase";
import { Button } from "../components/TailwindStyles.jsx";
import { useDispatch } from "react-redux";
import { login } from "../features/userSllice";

const SignUpMethodEmail = ({ setSignupClicked }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    setLoading(true);

    register(username, email, password).then((res) => {
      setLoading(false);
      dispatch(login(res));
    });
  };

  return (
    <div css={[tw`max-w-sm`]}>
      <Title>Sign up with email </Title>

      <Form>
        {/* Username */}
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          fullWidth
          required
        />

        {/* Email */}
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* password */}
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Enter Sign in PIN</InputLabel>
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
            label="Enter Sign in PIN"
          />
        </FormControl>
      </Form>

      <AgreementText className="small">
        By signing up, you agree to the <Span>Terms</Span> and{" "}
        <Span>Conditions</Span> and <Span>Privacy Policy</Span>
      </AgreementText>

      <SignUpButton
        className="smallBold"
        onClick={handleSignIn}
        disabled={loading ? true : false}
      >
        {!loading && <span>Continue</span>}
        {loading && <CircularProgress size={20} color="info" />}
      </SignUpButton>

      <AlternateText>
        Already have an account?{" "}
        <Link href="/login" passHref>
          <Anchor>Login</Anchor>
        </Link>
        `
      </AlternateText>

      <MUIButton
        className="tiny"
        sx={{ marginTop: 3, textDecoration: "underline" }}
        onClick={() => setSignupClicked(false)}
      >
        Back
      </MUIButton>
    </div>
  );
};

// Tailwind Styles
const Title = tw.h3`text-primary-dark`;
const SignUpButton = tw(
  Button
)` cursor-pointer text-white w-full rounded-full bg-primary-darkest py-5 px-10 mt-10 duration-300 transition-all flex items-center justify-center`;
const Form = tw.form`mt-16 space-y-12`;
const AgreementText = tw.p`text-textBg-light text-left mt-14`;
const Span = tw.span`text-secondary-darkest`;
const AlternateText = tw.p`text-textBg-light mt-9 `;
const Anchor = tw.a`text-secondary-darkest font-semibold tracking-wider cursor-pointer`;

export default SignUpMethodEmail;
