import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EnquirySection from "../sections/EnquirySection";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <EnquirySection />
      <Footer />
    </div>
  );
}
