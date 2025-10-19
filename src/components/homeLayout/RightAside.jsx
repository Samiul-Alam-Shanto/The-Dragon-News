import React, { use } from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import { AuthContext } from "../../provider/AuthProvider";

const RightAside = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      {user ? "" : <SocialLogin />}
      <FindUs />
      <QZone />
    </div>
  );
};

export default RightAside;
