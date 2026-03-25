import Image from "next/image";

type KiraLogoProps = {
  className?: string;
};

export function KiraLogo({ className = "h-15 w-20" }: KiraLogoProps) {
  return (
    <div className={`${className} relative shrink-0`}>
      <Image
        src="/KiraNameIcon.png"
        alt="Kira logo"
        fill
        sizes="120px"
        className="scale-[1.22] object-contain"
        priority
      />
    </div>
  );
}
