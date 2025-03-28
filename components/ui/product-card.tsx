"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { HandshakeIcon } from "lucide-react";

interface ProductCard {
  data: Product;
}
const infoCard = [
  {
    title: "Comodos",
    icon: HandshakeIcon,
  },
  {
    title: "Banheiro",
    icon: HandshakeIcon,
  },
  {
    title: "Espaço",
    icon: HandshakeIcon,
  },
];

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <div className=" bg-white cursor-pointer group rounded-xl">
      <div className="relative aspect-square rounded-xl onClick={handleClick}">
        <Image
          fill
          src={data?.images?.[0]?.url}
          alt="Images"
          className="brightness-80 object-cover rounded-xl aspect-square cursor-pointer"
        />
        <div className="absolute w-full px-2 top-4 flex justify-start gap-x-4">
          <p className="text-sm px-5 py-2 text-black font-medium bg-[var(--color-primary)] rounded-sm uppercase">
            {data.category.name}
          </p>
          <p className="text-sm px-5 py-2 text-black font-medium bg-[var(--color-gray-1)] rounded-sm uppercase">
            {data.adtype.name}
          </p>
        </div>

        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className=" text-black" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-black" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data?.name}</p>
        <p className="text-sm text-gray-500">Comodos: {data.room.name}</p>
        <p className="text-sm text-gray-500">Banheiro: {data.bathroom.name}</p>
        <p className="text-sm text-gray-500">Tamanho: {data.size.name}</p>
        <p className="text-lg font-semibold">
          <Currency value={data?.price} />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
