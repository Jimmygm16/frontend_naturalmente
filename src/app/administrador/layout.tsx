import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrador",
  description: "welcome",
};

function adminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default adminLayout;
