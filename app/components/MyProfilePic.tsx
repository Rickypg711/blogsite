import Image from "next/image";

export default function MyProfilePic() {
  return (
<section className="w-full mx-auto">
    <Image
    className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    src='/images/68633037352__6D71CECC-FDAA-4CC8-8C1A-B7E6370000CF.jpeg'
    width={200}
    height={200}
    alt='Ricardo Paredes'
    priority={true}


    />
</section>  
)
}
