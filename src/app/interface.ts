import { urlFor } from "@/lib/sanity";

// Custom image type based on Sanity's image structure
export interface CustomSanityImage {
  _type: 'image';
  asset: {
    _ref: string; // Reference to the asset (Sanity document reference)
    _type: 'reference';
  };
  alt?: string;  // Optional alt text for the image
  metadata?: {
    // You can include other metadata Sanity may provide like dimensions, etc.
    dimensions?: {
      width: number;
      height: number;
    };
    lqip?: string; // Low-quality image placeholder (optional)
  };
  caption?: string; // Optional caption
}

export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: CustomSanityImage[];  // Use the custom image type
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}

interface SanityImageSource {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
}

// Example of how Image might be structured
const Image: SanityImageSource | undefined = {
  _type: "image",
  asset: { _ref: "image-asset-id", _type: "reference" },
  alt: "A sample image",  // optional alt text
};

// Correct product definition with type-safe image handling
export const product = {
  name: 'Product Name',
  description: 'This is a sample product description.',
  price: 100,  // Ensure price is a number
  currency: 'USD',
  image: Image ? urlFor(Image).url() : null,  // Only call urlFor if image is valid
  price_id: 'price_id',
};
