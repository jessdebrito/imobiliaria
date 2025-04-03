import { Bathroom } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/bathrooms`;

const getBathrooms = async (): Promise<Bathroom[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getBathrooms;
