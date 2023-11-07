export default function ComboBox(props:{elementList: any[]}) {
    const lista = props.elementList;
    return (
        <select className="border border-black mb-2 px-1 p-2">
            {lista.map((item:any)=>(
                <option key={item.id} value={item.name}>{item.name}</option>
            ))}
        </select>
    );
}