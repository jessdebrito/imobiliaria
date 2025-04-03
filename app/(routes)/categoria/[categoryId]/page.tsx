import getBathrooms from "@/actions/get-bathrooms";
import getRooms from "@/actions/get-rooms";
import getAdtype from "@/actions/get-adtype";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";

import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";
import BillboardCategory from "@/components/billboard-category";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

export const revalidate = 0;

type Params = { categoryId: string };
type SearchParams = {
  sizeId?: string;
  adtypeId?: string;
  roomId?: string;
  bathroomId?: string;
};

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) => {
  const { categoryId } = params;
  const { bathroomId, roomId, adtypeId, sizeId } = searchParams;

  const products = await getProducts({
    categoryId,
    adtypeId,
    roomId,
    bathroomId,
    sizeId,
  });

  const sizes = await getSizes();
  const bathrooms = await getBathrooms();
  const rooms = await getRooms();
  const adtype = await getAdtype();

  return (
    <div className="bg-white">
      <Container>
        <BillboardCategory />

        <div className="py-10 px-4 pb-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters
              sizes={sizes}
              adtype={adtype}
              rooms={rooms}
              bathrooms={bathrooms}
            />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Tamanhos" data={sizes} />
              <Filter valueKey="adtypeId" name="Tipo de Anúncio" data={adtype} />
              <Filter valueKey="roomId" name="Comodos" data={rooms} />
              <Filter valueKey="bathroomId" name="Banheiros" data={bathrooms} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products?.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products?.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
