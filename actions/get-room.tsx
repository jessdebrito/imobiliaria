import { Room } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/room`;

const getRooms = async (): Promise<Room[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getRooms;
