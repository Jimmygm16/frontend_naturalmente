"use client";

import { useAuth } from "@/app/Context/AuthContext";

export default function ProfilePage(): JSX.Element {
  const { authUser, isAuth } = useAuth();

  return (
    <section className="h-screen">
      <span>{authUser?.name}</span>
    </section>
  );
}
