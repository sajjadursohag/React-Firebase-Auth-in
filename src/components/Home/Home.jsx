import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";

const Home = () => {
  const authInfo = use(AuthContext);
  console.log(authInfo)
    return <div>
      <h3>This is Home</h3>
  </div>;
};

export default Home;
