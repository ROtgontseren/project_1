import "@/styles/globals.css";
import UserProvider from "@/context";
import { Toast } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
