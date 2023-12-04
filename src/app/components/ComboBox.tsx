import React from "react";

export default function ComboBox(props: {
  elementList: any[];
  value: number;
  onChange: (value: number) => void;
}) {
  const lista = props.elementList;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = parseInt(event.target.value);
    props.onChange(selectedId);
    console.log(selectedId);
  };

  return (
    <select
      className="border border-black mb-2 px-1 p-2 bg-slate-100 focus:border-2 focus:border-green-400 focus:outline-none"
      value={props.value}
      onChange={handleChange}
    >
      {lista.map((item: any) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}
