import { getProductById } from "@/lib/productsData";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id);
  const product = getProductById(productId);

  if (!product) return {};

  return {
    title: `${product.name} | Crown Healthcare Disposables`,
    description: product.description,
    alternates: {
      canonical: `https://crownhealthcare.co.in/drapes-section/${productId}`,
    },
  };
}

export default function ProductDetailLayout({ children }) {
  return children;
}
