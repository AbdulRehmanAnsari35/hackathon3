"use client"

import Image from "next/image"
import { urlFor } from "@/lib/sanity"
import { useState } from "react"

// Define the type for an individual image
interface SanityImageSource {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
    alt?: string;
}

interface iAppProps {
    images: SanityImageSource[];  // Array of images of type SanityImageSource
}

export default function ImageGallery({ images }: iAppProps) {
    const [bigImage, setBigImage] = useState<SanityImageSource>(images[0]); // Set type to SanityImageSource

    const handleSmallImageClick = (image: SanityImageSource) => {
        setBigImage(image);  // Update bigImage state with clicked image
    }

    return (
        <div className="mt-4 mb-4 grid gap-4 lg:grid-cols-5">
            {/* Small images on the left */}
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image 
                            src={urlFor(image).url()} 
                            alt={image.alt || "photo"}  // Optional alt text
                            width={200}
                            height={200}
                            className="h-full w-full object-cover object-center cursor-pointer"
                            onClick={() => handleSmallImageClick(image)} // Update bigImage state on click
                        />
                    </div>
                ))}
            </div>

            {/* Main large image */}
            <div className="relative overflow-hidden rounded-lg lg:col-span-4">
                <Image
                    src={urlFor(bigImage).url()}  // Get URL for the selected big image
                    alt={bigImage.alt || "photo"}  // Optional alt text
                    width={350}
                    height={400}
                    className="h-400 w-400 object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-blue-700 px-6 py-1.5 text-sm uppercase tracking-wider text-white">
                    Sale
                </span>
            </div>
        </div>
    )
}
