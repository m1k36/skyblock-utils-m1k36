import Image from "next/image";

export default function Logo() {
    return (
        <>
            <Image
                src={"/img/Logo.png"}
                alt={"Logo"}
                width={40}
                height={40}
                className={`object-cover`}
            />
        </>
    )
}