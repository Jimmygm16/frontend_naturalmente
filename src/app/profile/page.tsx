"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/services/users";
import { User } from "@/types";

export default function ProfilePage(): JSX.Element {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    }

    fetchUser();
  }, []);

  return (
    <>
      <span>
        {user?.name}
      </span>
    </>
  )

}