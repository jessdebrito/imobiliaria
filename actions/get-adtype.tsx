import { Adtype } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/adtypes`;

const getAdtypes = async (): Promise<Adtype[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getAdtypes;
