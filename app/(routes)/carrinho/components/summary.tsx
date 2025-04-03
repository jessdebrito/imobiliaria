"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {

  const searchParams = useSearchParams();

  const items = useCart((state) => state.items);

  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Pagamento concluído.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Erro ao finalizar pagamento.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="px-4 py-6 mt-6 rounded-lg bg-gray-50 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Resumo de compra</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-base font-medium text-gray-400">Valor Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        className="w-full mt-6 bg-[var(--color-gray-2)]"
        onClick={onCheckout}
      >
        Finalizar
      </Button>
    </div>
  );
};

export default Summary;
