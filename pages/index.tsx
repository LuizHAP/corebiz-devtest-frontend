import { NextPage } from "next";
import { Layout } from "@/components/templates";
import { HeroSection, ProductsSection } from "@/components/organisms";
import api from "@/services/api";
import Product from "@/types/product";
import NewsLetterSection from "@/components/organisms/NewsLetterSection";

interface IndexProps {
  products: Product[];
}

const Index: NextPage<IndexProps> = ({ products }) => {
  return (
    <Layout title="Home | Corebiz Ecommerce">
      <HeroSection />
      <ProductsSection products={products} />
      <NewsLetterSection />
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
