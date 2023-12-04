"use client";

import IsAuth from "@/app/components/IsAuth";

import { useAuth } from "@/app/Context/AuthContext";

function ProfilePage(): JSX.Element {
  const { authUser, isAuth } = useAuth();

  return (
    <section className="h-screen">
      <span>{authUser?.name}</span>
    </section>
  );
}

export default IsAuth(ProfilePage);
