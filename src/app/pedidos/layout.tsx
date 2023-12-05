import { Metadata } from "next";

export const metadata: Metadata = {
  title: "pedidos",
  description: "welcome",
};

function adminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default adminLayout;
