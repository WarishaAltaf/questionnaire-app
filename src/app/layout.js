import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/redux/StoreProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cheetah Test Task",
  description: "Questionnaire for users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <div
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
