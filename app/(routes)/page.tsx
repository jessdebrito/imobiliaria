import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import { OurValuesSection } from "@/components/sections/OurValuesSections";

export const revalidate = 0;

const Home = async () => {
  
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(process.env.NEXT_PUBLIC_BILLBOARD_ID as string);

  return (
    <Container>
        <Billboard data={billboard} />
        <OurValuesSection />
        <ProductList title="Destaque" subtitle="Novos Locais" items={products} />
      
    </Container>
  );
};
export default Home;
