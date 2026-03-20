import Image from "next/image";

type KiraLogoProps = {
  className?: string;
};

export function KiraLogo({ className = "h-9 w-9" }: KiraLogoProps) {
  return (
    <div className={`${className} relative shrink-0`}>
      <Image
        src="/KiraIconLightRounded.png"
        alt="Kira logo"
        fill
        sizes="48px"
        className="scale-[1.22] object-contain"
        priority
      />
    </div>
  );
}
