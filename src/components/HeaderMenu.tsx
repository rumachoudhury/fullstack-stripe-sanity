"use client";
import headerData from "../../constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderMenu() {
  const pathname = usePathname();

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-5 text-sm capitalize font-semibold">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`px-4 hover:text-darkColor hoverEffect relative group hover:underline ${
            pathname === item?.href && "text-darkColor underline"
          }`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:left-0 ${
              pathname === item?.href && "w-1/2 left-0"
            }`}
          />
          <span />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-darkColor hoverEffect group-hover:w-1/2 group-hover:right-0 ${
              pathname === item?.href && "w-1/2 right-0"
            }`}
          />
          <span />
        </Link>
      ))}
    </div>
  );
}

export default HeaderMenu;
