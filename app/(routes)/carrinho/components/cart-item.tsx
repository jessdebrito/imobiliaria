"use client";
import Image from "next/image";

import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="py-8 gap-6 border-b grid grid-cols-1 md:grid md:grid-cols-2">
      <div className=" relative h-24 min-w-11/12 md:min-w-10/12  rounded-md overflow-hidden md:h-48 md:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>

      <div className="flex-1 flex-col justify-between sm:ml-2">
        <p className="text-lg font-semibold text-black">{data.name}</p>

        <div className="flex text-sm">
          <p className="text-gray-500">{data.category.name}</p>
          <p className="text-gray-500 ml-4 border-l border-gray-300 pl-4">
            {data.size.name}
          </p>
        </div>

        <p className="text-gray-500 p-1">{data.description}</p>

        <Currency value={data.price} />
        <button
          onClick={onRemove}
          className="cursor-pointer rounded-full w-11/12 px-4 py-3 flex items-center justify-center text-black bg-[var(--color-primary)]"
        >
          Remover
        </button>
      </div>
    </li>
  );
};

export default CartItem;
