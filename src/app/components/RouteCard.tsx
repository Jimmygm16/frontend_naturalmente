"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function RouteCard(props: { name: string, img: StaticImport, route?: string }) {
    const router = useRouter();

    const routerManager = (e:any) => {
        if (props.route) {
            router.push(props.route);
        }
    }

    return (
        <>
            <div
                className="m-4 border-2 border-black rounded-2xl p-4 w-96 h-40 flex flex-row 
                items-center justify-between cursor-pointer hover:shadow-2xl bg-green-200"
                onClick={routerManager}
            >
                <h1 className="uppercase text-4xl">{props.name}</h1>
                <Image className="w-24" src={props.img} alt="" />
            </div>
        </>
    );
}
