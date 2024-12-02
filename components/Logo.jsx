import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" class="text-3xl font-bold">
      <Image
        src="/lws-kitchen.png"
        alt="Logo"
        class="h-10"
        width={100}
        height={20}
      />
    </Link>
  );
};

export default Logo;
