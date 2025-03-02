import Image from "next/image";

export default function Monster({ data }: Readonly<{ data: any }>) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:gap-32">
      <div className="justify-self-end self-start max-w-sm text-gray-900">
        <h2 className="font-bold">{data.name}</h2>
        {data.description.map((desc: string, index: number) => (
          <p key={index} className="mt-4 text-lg">
            {desc}
          </p>
        ))}
      </div>
      <div className="min-w-80 max-w-sm lg:max-w-md h-auto rounded-xl justify-self-center self-start">
        <Image src={data.src} alt={data.name} className="rounded-xl" />
      </div>
    </div>
  );
}
