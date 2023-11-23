import { Outfit } from "next/font/google";
import { StoreProvider } from "./components/store/StoreProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SwiftInvoice",
  description: "A Payment management system built with Next JS 14.",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={outfit.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
