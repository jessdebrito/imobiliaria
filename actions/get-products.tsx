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
  location?: string;
  parking?: number;
  petFriendly?: boolean;
  addSpace?: boolean;
  builtYear?: string;
  renovationYear?: string;
  isArchived?: boolean;
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
      location: query.location,
      parking: query.parking,
      petFriendly: query.petFriendly,
      addSpace: query.addSpace,
      builtYear: query.builtYear,
      renovationYear: query.renovationYear,
      isArchived: query.isArchived,
    },
  });
  const res = await fetch(url);

  return res.json();
};

export default getProducts;
