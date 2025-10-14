import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartIcon() {
  return (
    <Link href={"/cart"} className=" group relative">
      <ShoppingBagIcon className="size-5 group-hover:text-red-500" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-3.5 h-3.5 rounded-full flex items-center justify-center font-semibold">
        0
      </span>
    </Link>
  );
}

export default CartIcon;
