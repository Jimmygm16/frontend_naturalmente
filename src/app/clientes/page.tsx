"use client";
import ClientCard from "@/app/components/ClientCard";
import react, { useState, useEffect } from "react";
import { getCustomers } from "@/services/customers";
import { Customer } from "@/types";

export default function page() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  async function fetchCustomers() {
    const customers = await getCustomers();
    setCustomers(customers);
    console.log(customers);
  }

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <>
      <section className="flex flex-row flex-wrap min-h-screen m-8">
        {customers.map((customer: any) => (
          <ClientCard
            key={customer.id}
            name={customer.name}
            email={customer.email}
            phone_number={customer.phone_number}
            address={customer.address}
          />
        ))}
      </section>
    </>
  );
}
