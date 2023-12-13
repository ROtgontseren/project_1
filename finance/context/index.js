import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const userContext = createContext();

const userProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loginUserData, setloginUserData] = useState({
    email: "saraa@gmail.com",
    password: "saraa12345",
  });
  const login = async () => {
    console.log("email", loginUserData.email);
    console.log("pass", loginUserData.password);
    if (!loginUserData.email || !loginUserData.password) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: loginUserData.email,
        userPassword: loginUserData.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = () => {};

  const changeLoginUserData = (key, value) => {
    setloginUserData({ ...loginUserData, [key]: value });
    if (!loginUserData.email || !loginUserData.password) {
      alert("email or password must check");
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
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default userProvider;
