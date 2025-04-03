"use client";

import { usePathname } from "next/navigation";

const CategoryPath = () => {
  const pathname = usePathname();
  const category = pathname.split("/").pop();

  console.log(category);
  return null;
};

export default CategoryPath;
