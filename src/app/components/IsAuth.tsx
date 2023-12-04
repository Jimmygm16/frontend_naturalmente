"use client";
import { useAuth } from "@/app/Context/AuthContext";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function IsAuth(Component: React.ComponentType<JSX.Element>) {
  return function IsAuth(props: any) {
    const auth = useAuth();

    useLayoutEffect(() => {
      if (!auth.isAuth) return redirect("/");
    }, []);

    if (!auth.isAuth) return null;

    return <Component {...props} />;
  };
}
