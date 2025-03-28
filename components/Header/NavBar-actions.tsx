"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center ">
      <Button
      onClick={() => router.push("/cart")}
       className="flex items-center rounded-full hover:text-[var(--color-primary)]  rounded-full">
         <ShoppingBag size={22}/>
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
          </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
