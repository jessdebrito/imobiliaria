import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import ProductInfo from "@/components/product-info";
import PropertyDetails from "@/components/property-details";
import GalleryGrid from "@/components/gallery/gallery-grid";
import GalleryTab from "@/components/gallery/product-gallery";
import TourContainer from "./compoments/tour";

type Params = Promise<{ productId: string }>;

const ProductPage = async ({ params }: { params: Params }) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  const suggestProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <>
      <div className="bg-white space-y-4  px-6 ld:px-25 py-20 sm:px-6  lg:py-20  lg:px-30 flex align-center">
        <Container>
          <div className="max-w-8/10">
            <ProductInfo data={product} />
          </div>
          <GalleryTab data={product} />
          <TourContainer
            title="Vamos fazer um tour"
            subtitle="Descubra fotos, detalhes e recursos desta propriedade."
          />
          <ProductInfo data={product} />
          <PropertyDetails data={product} />
          <GalleryGrid images={product.images} gap="large" />
          <hr className="my-10" />
        </Container>
      </div>
      <div className="bg-[var(--color-gray-1)]">
        <Container>
          <ProductList
            title="Locais que você pode gostar"
            subtitle="Itens relacionados"
            items={suggestProducts}
          />
        </Container>
      </div>
    </>
  );
};

export default ProductPage;
