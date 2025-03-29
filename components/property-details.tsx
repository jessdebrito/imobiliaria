import { Product } from "@/types";
import {
  RulerIcon,
  DoorClosed,
  ShowerHead,
  Car,
  DogIcon,
  Flame,
  Shrub,
  AirVent,
  Hammer,
  Paintbrush,
} from "lucide-react";

interface PropertyDetailsProps {
  data: Product;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ data }) => {
  return (
    <div className="py-14">
      <h2 className="text-3xl font-bold text-[var(--color-gray-2)]">
        Detalhes de Propriedade
      </h2>
      <div className="py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <RulerIcon size={26} className="inline-block text-black mr-1" />
            Tamanho
          </p>
          <p className="text-xl text-black">{data.size.name}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <DoorClosed size={26} className="inline-block text-black mr-1" />
            Comodos
          </p>
          <p className="text-xl text-black">{data.room.name}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <ShowerHead size={26} className="inline-block text-black mr-1" />
            Banheiros
          </p>
          <p className="text-xl text-black">{data.bathroom.name}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Car size={26} className="inline-block text-black mr-1" />
            Estacionamentos
          </p>
          <p className="text-xl text-black">{data.parking}</p>
        </div>

        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <DogIcon size={26} className="inline-block text-black mr-1" />
            Aceita Pet
          </p>
          <p className="text-xl text-black">
            {data.petFriendly ? "Sim" : "Não"}
          </p>
        </div>

        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Shrub size={26} className="inline-block text-black mr-1" />
            Área externa
          </p>
          <p className="text-xl text-black">{data.addSpace ? "Sim" : "Não"}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <AirVent size={26} className="inline-block text-black mr-1" />
            Ar Condicionado
          </p>
          <p className="text-xl text-black">
            {data.airConditioning ? "Sim" : "Não"}
          </p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Flame size={26} className="inline-block text-black mr-1" />
            Aquecimento
          </p>
          <p className="text-xl text-black">{data.fireplace ? "Sim" : "Não"}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Flame size={26} className="inline-block text-black mr-1" />
            Internet incluso
          </p>
          <p className="text-xl text-black">{data.internet ? "Sim" : "Não"}</p>
        </div>
        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Flame size={26} className="inline-block text-black mr-1" />
            Elevador
          </p>
          <p className="text-xl text-black">{data.elevator ? "Sim" : "Não"}</p>
        </div>

        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Hammer size={26} className="inline-block text-black mr-1" />
            Ano de construção
          </p>
          <p className="text-xl text-black">{data.builtYear}</p>
        </div>

        <div className="border-b-1 border-[var(--color-gray-1)] p-2 m-6 mb-1 flex justify-between align-center">
          <p className="text-xl text-black flex align-center">
            <Paintbrush size={26} className="inline-block text-black mr-1" />
            Última renovação
          </p>
          <p className="text-xl text-black">{data.renovationYear}</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-[var(--color-gray-2)] mt-2">
        Localização
      </h1>
      <p className="text-2xl text-black">{data.location}</p>
    </div>
  );
};

export default PropertyDetails;
