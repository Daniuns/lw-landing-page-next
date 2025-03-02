import Image from "next/image";

export default function Monster({ data }: Readonly<{ data: any }>) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="hidden sm:block min-w-80 max-w-sm lg:max-w-md h-auto rounded-xl justify-self-end self-end">
        <Image src={data.src} alt={data.name} className="rounded-xl" />
      </div>
      <div className="justify-self-start self-start max-w-sm text-gray-900">
        <h2 className="font-bold">{data.name}</h2>
        {data.description.map((desc: string, index: number) => (
          <p key={index} className="mt-4 text-lg">
            {desc}
          </p>
        ))}
      </div>
      <div className="block sm:hidden min-w-80 max-w-sm lg:max-w-md h-auto rounded-xl justify-self-start self-start">
        <Image src={data.src} alt={data.name} className="rounded-xl" />
      </div>
    </div>
  );
}
