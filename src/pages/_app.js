import { UserProvider } from "@/context/userContext";
import GlobalLayout from "@/layouts/global";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
