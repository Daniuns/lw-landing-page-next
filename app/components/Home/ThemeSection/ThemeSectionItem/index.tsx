import { ReactNode } from "react";

export default function ThemeSectionItem({ title, subTitle, description, icon }: Readonly<{ title: string; subTitle: string; description: string; icon: ReactNode }>) {
  return <article className="w-full rounded-2xl border border-white/10 bg-white/[.04] p-7 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:border-lightGolden/40"><div className="mb-6 inline-flex rounded-full bg-lightGolden/15 p-3 text-lightGolden">{icon}</div><p className="mb-2 text-sm font-bold uppercase tracking-[.16em] text-lightGolden">{title}</p><h3 className="mb-3 text-2xl text-white">{subTitle}</h3><p className="font-sans leading-relaxed text-slate-300">{description}</p></article>;
}
