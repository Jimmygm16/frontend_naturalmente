"use client";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import { isAdmin } from "@/services/auth";

export default function IsAuth(Component: React.ComponentType<JSX.Element>) {
  return function IsAuthWrapper(props: any) {
    const [isAdminUser, setIsAdminUser] = useState<any | null>(null);

    useEffect(() => {
      const checkAdminStatus = async () => {
        try {
          const admin = await isAdmin();
          setIsAdminUser(admin);
        } catch (error) {
          console.error(
            "Error al verificar el estado de administrador:",
            error
          );
        }
      };

      checkAdminStatus();
    }, []);

    if (isAdminUser === null) return null;

    if (!isAdminUser) {
      redirect("/");
    }

    return <Component {...props} />;
  };
}
