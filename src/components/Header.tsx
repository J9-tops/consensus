type Props = { title: string };

export default function Header({ title }: Props) {
  return (
    <header className="flex flex-wrap justify-between gap-3 border-b border-slate-200/10 p-4">
      <h2 className="tracking-light text-[24px] leading-tight font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
    </header>
  );
}
