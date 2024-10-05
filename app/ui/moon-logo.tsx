import { MoonIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function MoonLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <MoonIcon className="size-10 mr-2 rotate-[15deg]" />
      <p className="text-[44px]">Moon</p>
    </div>
  );
}
