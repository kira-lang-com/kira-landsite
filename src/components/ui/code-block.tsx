type CodeBlockProps = {
  code: string;
  label: string;
};

export function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <div className="my-8 overflow-hidden rounded-[2rem] border border-black/5 bg-white/65 shadow-[0_30px_80px_-35px_rgba(29,29,31,0.25)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-black/5 px-6 py-4 text-sm font-medium text-[#1d1d1f]/50">
        <span>{label}</span>
        <span className="font-mono uppercase tracking-[0.25em]">kira</span>
      </div>
      <pre className="overflow-x-auto px-6 py-7 text-[14px] leading-7 text-[#1d1d1f] md:px-8 md:text-[15px]">
        <code className="font-mono whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}
