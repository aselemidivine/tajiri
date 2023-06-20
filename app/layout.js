import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { Providers } from "./providers";
import { AuthProvider } from "./(nonRoutes)/(context)/AuthContext";
import { CartContext } from "./(nonRoutes)/(context)/CartContext";
import { DataProvider } from "./(nonRoutes)/(context)/DataContext";

const noto_sans = Noto_Sans({ subsets: ["latin"], weight: ["400","500", "600", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>
      <AuthProvider>
      <CartContext>
        <DataProvider>
          <Providers>{children}</Providers>
        </DataProvider>
      </CartContext>
    </AuthProvider>
        
      </body>
    </html>
  );
}
