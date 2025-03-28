import qs from "query-string";
import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    roomId?: string;
    bathroomId?: string;
    adtypeId?: string;
    isFeatured?: boolean;
    storeId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
        categoryId: query.categoryId,
        colorId: query.colorId,
        sizeId: query.sizeId,
        roomId: query.roomId,
        bathroomId: query.bathroomId,
        adtypeId: query.adtypeId,
        isFeatured: query.isFeatured,
        storeId: query.storeId,
    },
  });
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
