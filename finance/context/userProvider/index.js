import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const userContext = createContext();

const userProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loginUserData, setloginUserData] = useState({
    email: "saraa@gmail.com",
    password: "saraa12345",
  });
  const login = () => {};

  const signup = () => {};

  const changeLoginUserData = (key, value) => {
    setloginUserData({ ...loginUserData, [key]: value });
    if (!loginUserData.email || !loginUserData.password) {
      alert("eamil or password must check");
      return;
    }
    try {
      const data = axios.post("http://localhost:8008/auth/signup", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
      });
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        loginUserData,
        setloginUserData,
        login,
        signup,
        changeLoginUserData,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default userProvider;
