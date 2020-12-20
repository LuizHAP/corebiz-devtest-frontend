import { Layout } from "@components/templates";
import { HeroSection, ProductsSection } from "@components/organisms";
import api from "../services/api";
import Product from "../types/product";

type Props = {
  products: Product[];
};

const Index = ({ products }: Props) => {
  return (
    <Layout title="Home | Corebiz Ecommerce">
      <HeroSection />
      <ProductsSection products={products} />
    </Layout>
  );
};

Index.getInitialProps = async function () {
  const res = await api.get("/products");

  return {
    products: res.data || null,
  };
};

export default Index;
