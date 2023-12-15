import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const userContext = createContext();

const userProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formUserData, setloginUserData] = useState({
    email: "saraa@gmail.com",
    password: "saraa12345",
    rePassword: "",
    name: "",
    currency_type: "",
    balance: 0,
  });
  const login = async () => {
    console.log("email", formUserData.email);
    console.log("pass", formUserData.password);
    if (!formUserData.email || !formUserData.password) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    if (!formUserData.email.includes("@")) {
      alert("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
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

  const changeFormUserData = (key, value) => {
    setloginUserData({ ...formUserData, [key]: value });
    if (!formUserData.email || !formUserData.password) {
      alert("email or password must check");
      return;
    }
    try {
      setLoading(true);
      const data = axios.post("http://localhost:8008/auth/signup", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    } finally {
      setLoading(false);
    }
  };
  const signup = async () => {
    if (
      !formUserData.name ||
      !formUserData.email ||
      !formUserData.password ||
      !formUserData.rePassword
    ) {
      alert("Хоосон талбаруууд байж болохгүй");
      return;
    }

    if (formUserData.password !== formUserData.rePassword) {
      alert("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        email: formUserData.email,
        password: formUserData.password,
        name: formUserData.name,
      });
      console.log(data);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(`${error.message}`, { autoClose: 3000 });
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        formUserData,
        setloginUserData,
        login,
        signup,
        changeFormUserData,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export default userProvider;
