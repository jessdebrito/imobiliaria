"use client";

import { useState } from "react";
import { Adtype, Size, Bathroom, Room, Category } from "@/types";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Filter from "./filter";
import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

interface MobileFiltersProps {
  sizes: Size[];
  adtype: Adtype[];
  rooms: Room[];
  bathrooms: Bathroom[];
  categories: Category[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  adtype,
  bathrooms,
  rooms,
  categories,
}) => {
  const [open, setOpen] = useState(true);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button
        className="flex items-center gap-x-2 lg:hidden bg-[var(--color-primary)] text-black"
        onClick={onOpen}
      >
        Filtros
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/50" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-6 ml-auto overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            <div className="p-4">
              <Filter
                valueKey="categoryId"
                name="Categorias"
                data={categories}
              />
              <Filter valueKey="sizeId" name="Tamanho" data={sizes} />
              <Filter valueKey="bathroomId" name="Banheiros" data={bathrooms} />
              <Filter valueKey="roomId" name="Comodos" data={rooms} />
              <Filter valueKey="adtypeId" name="Anuncio" data={adtype} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
