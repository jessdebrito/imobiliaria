import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard";

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";
import { OurValuesSection } from "@/components/sections/OurValuesSections";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactUsSection } from "@/components/sections/ContactUsSection";
import { CategorySection } from "@/components/sections/CategorySection";

export const revalidate = 0;

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(
    process.env.NEXT_PUBLIC_BILLBOARD_ID as string
  );

  return (
    <Container>
      <Billboard data={billboard} />
      <OurValuesSection />
      <CategorySection />
      <ServicesSection />
      <ProductList
        title="Destaque"
        subtitle="Novos Locais"
        items={products}
        isFeatured={true}
      />
      <ContactUsSection />
    </Container>
  );
};
export default Home;
