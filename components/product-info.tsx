import { Product } from "@/types";
import {
  RulerIcon,
  ShoppingCart,
  DoorClosed,
  ShowerHead,
  Car,
  DotIcon,
} from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface ProductInfoProps {
  data: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <div className="pw-20 py-6">
      <p className="text-sm w-25 px-5 py-2 text-black font-medium bg-[var(--color-primary)] rounded-sm uppercase ">
        {data.adtype.name}
      </p>

      <h1 className="text-3xl font-bold text-gray-900 mt-2">{data.name}</h1>
      <div className=" flex items-center justify-start">
        <p className="text-xl  text-gray-900">{data.category.name}</p>
        <DotIcon size={50} className="inline-block text-black m-2" />
        <p className="text-2xl font-semibold text-gray-900">
          <Currency value={data?.price} />
          <span className="text-xl text-gray-600">
            {data.adtype.name === "Aluguel" ? "/mês" : ""}
          </span>
        </p>
      </div>
      <h3 className="text-xl text-black">{data.description}</h3>
      <Button
        className="mt-2 flex items-center gap-x-2 text-black bg-[var(--color-primary)] 
        hover:text-[var(--color-gray-3)]"
      >
        Adicionar ao carrinho
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default ProductInfo;
