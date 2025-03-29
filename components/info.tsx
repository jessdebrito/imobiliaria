import { Product } from "@/types";
import {
  RulerIcon,
  ShoppingCart,
  DoorClosed,
  ShowerHead,
  Car,
} from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4 text-gray-300" />

      <div className="flex items-center justify-start mt-4 gap-6">
        <p className="text-sm text-gray-500">
          <RulerIcon size={20} className="inline-block text-gray-500 mr-1" />
          {data.size.name}
        </p>
        <p className="text-sm text-gray-500">
          <DoorClosed size={20} className="inline-block text-gray-500 mr-1" />
          {data.room.name}
        </p>
        <p className="text-sm text-gray-500">
          <ShowerHead size={20} className="inline-block text-gray-500 mr-1" />
          {data.bathroom.name}
        </p>
        <p className="text-sm text-gray-500">
          <Car size={20} className="inline-block text-gray-500 mr-1" />
          {data.parking}
        </p>
      </div>

      <hr className="my-4 text-gray-300" />

      <h2 className="text-lg text-gray-800">{data.location}</h2>
      <h3 className="text-sm text-gray-500">{data.description}</h3>

      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Adicionar ao carrinho
          <ShoppingCart />
        </Button>
      </div>
    </>
  );
};

export default Info;
