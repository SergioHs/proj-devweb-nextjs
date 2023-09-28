import { SessionProvider } from "next-auth/react";
import { CartProvider } from "@/app/contexts/CartContext";

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}
export default App;