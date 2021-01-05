import React from 'react'
import { NextPage } from 'next'
import api from '@/services/api'
import Product from '@/types/product'
import NewsLetterSection from '@/components/organisms/NewsLetterSection'
import { Layout } from '@/components/templates'
import { HeroSection, ProductsSection } from '@/components/organisms'

interface IndexProps {
  products: Product[]
}

const Index: NextPage<IndexProps> = ({ products }) => {
  return (
    <Layout title="Home | Corebiz Ecommerce">
      <HeroSection />
      <ProductsSection products={products} />
      <NewsLetterSection />
    </Layout>
  )
}

Index.getInitialProps = async function () {
  const res = await api.get('/products')

  return {
    products: res.data || null
  }
}

export default Index
