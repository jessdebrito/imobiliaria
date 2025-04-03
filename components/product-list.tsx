import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
  subtitle: string;
  isFeatured: boolean;
}
const ProductList: React.FC<ProductListProps> = async ({
  title,
  items,
  subtitle,
  isFeatured
}) => {




  return (
    <div className="space-y-4 px-1 lg:px-30 py-16 lg:py-20">
      <h2 className="text-center tracking-wide text-gray-600 text-xl uppercase -mb-1">
        {title}
      </h2>
      <h3 className="text-center tracking-wide text-black text-3xl pb-6">
        {subtitle}
      </h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
