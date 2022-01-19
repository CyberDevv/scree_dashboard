import { useState } from "react";

import TwoSectionsLayout from "../TwoSectionsLayout.jsx";
import SignUpMethods from "../../components/SignupMethods.jsx";
import SignUpMethodEmail from "../../components/SignUpMethodEmail.jsx";

const Signup = () => {
  const [signupClicked, setSignupClicked] = useState(false);

  return (
    <TwoSectionsLayout>
      {!signupClicked && <SignUpMethods setSignupClicked={setSignupClicked} />}
      {signupClicked && (
        <SignUpMethodEmail setSignupClicked={setSignupClicked} />
      )}
    </TwoSectionsLayout>
  );
};

// Tailwind Styles

export default Signup;
