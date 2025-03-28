import { Billboard as BillboardType } from "@/types";

import Link from "next/link";
import Button from "@/components/ui/button";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <section
      id="banner"
      className="bg-gray-900 bg-no-repeat bg-cover bg-center bg-blend-lighten"
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
    >
      <div className="min-h-screen content-end md:px-20 px-10  bg-gradient-to-b from-black/80 via-white/5 to-black/90 ">
        <div className="h-full md:w-1/2 w-full gap-4  md:pb-28 pb-10 flex flex-col justify-items-end content-end text-white">
          <span className="text-[var(--color-primary)] font-bold text-base tracking-widest uppercase">
            Encontre a propriedade perfeita com facilidade
          </span>
          <h1 className="text-4xl md:text-5xl font-bold ">
            Imóveis planejados, onde cabem os seus sonhos!
          </h1>
          <h2 className="text-xl font-bold ">
            Locais planejados para atender as suas necessidade
          </h2>
          <Link href="/">
            <Button className="text-base text-black hover:text-white bg-[var(--color-primary)] hover:bg-[var(--color-gray-2)] px-6 py-5 text-lg rounded-2xl">
              Explorar mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
