"use client";

import type React from "react";

import Image from "next/image";
import type { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import type { Product } from "@/types";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { RulerIcon, ShowerHead, DoorClosed } from "lucide-react";

import { motion } from "framer-motion";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/produto/${data?.id}`);
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
    <div className="cursor-pointer group rounded-xl">
      <div
        className="relative aspect-square rounded-xl overflow-hidden"
        onClick={handleClick}
      >
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              fill
              src={data?.images?.[0]?.url || "/placeholder.svg"}
              alt="Images"
              className="brightness-80 object-cover"
            />
          </motion.div>
        </div>
        <div className="absolute w-full px-2 top-4 flex justify-start gap-x-4 z-10">
          <p className="text-sm px-5 py-2 text-black font-medium bg-[var(--color-primary)] rounded-sm uppercase">
            {data.category.name}
          </p>
          <p className="text-sm px-5 py-2 text-black font-medium bg-[var(--color-gray-1)] rounded-sm uppercase">
            {data.adtype.name}
          </p>
        </div>

        <div className="absolute w-full px-6 transition opacity-0 group-hover:opacity-100 bottom-5 z-10">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-black" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-black" />}
            />
          </div>
        </div>
      </div>
      <div className="px-6 py-2 my-4">
        <h1 className="text-xl font-semibold">{data?.name}</h1>
        <div className="flex items-center justify-start mt-4 gap-6">
          <p className="text-sm text-gray-500">
            <DoorClosed size={20} className="inline-block text-gray-500" />
            {data.room.name}
          </p>
          <p className="text-sm text-gray-500">
            <ShowerHead size={20} className="inline-block text-gray-500" />
            {data.bathroom.name}
          </p>
          <p className="text-sm text-gray-500">
            <RulerIcon size={20} className="inline-block text-gray-500" />
            {data.size.name}
          </p>
        </div>
        <p className="text-lg text-gray-500">{data.location}</p>
        <p className="text-lg font-semibold">
          <Currency value={data?.price} />
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
