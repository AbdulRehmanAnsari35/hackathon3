// Define the custom image type if you're using your own custom image type
export interface CustomSanityImage {
    _type: 'image';
    asset: {
      _ref: string;  // Reference to the asset (Sanity document reference)
      _type: 'reference';
    };
    alt?: string;  // Optional alt text for the image
    metadata?: {
      dimensions?: {
        width: number;
        height: number;
      };
      lqip?: string; // Low-quality image placeholder (optional)
    };
    caption?: string; // Optional caption
  }
  
  import { createClient } from "next-sanity";
  import imageUrlBuilder from '@sanity/image-url';
  
  // Sanity client setup
  export const client = createClient({
    projectId: "f4ukrvb9",
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
  });
  
  // Image URL builder
  const builder = imageUrlBuilder(client);
  
  // Function to generate image URLs
  export function urlFor(source: CustomSanityImage) {
    return builder.image(source);
  }
  