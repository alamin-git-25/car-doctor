import { Inter } from "next/font/google";
import "../globals.css";
import NavbarAvatar from "./component/nav";
import connectDB from "./lib/Database/Database";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from "./lib/models/User.model";
import { ServiceProvider } from "./Provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children}) {
  await connectDB();

  return (
    <html lang="en" className="scrollbar-hide">
      <body data-theme="" className={inter.className}>
        <AuthProvider>
         <ServiceProvider>
         <NavbarAvatar />
          <main className="pt-[15vh] ">
            {children}
          </main>
   
          <Footer />
         </ServiceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
