import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
  staticStyle?: boolean;
}

export default function MainLayout({
  children,
  staticStyle = false,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--primary-light)]/5">
      <Header staticStyle={staticStyle} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
