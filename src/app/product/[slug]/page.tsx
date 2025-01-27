import AddToBag from "@/app/components/AddToBag";
import ImageGallery from "@/app/components/ImageGallery";
import { fullProduct } from "@/app/interface";
import { client } from "@/lib/sanity";
import { BiStar } from "react-icons/bi";
import { FcApproval } from "react-icons/fc";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == "${slug}"][0]{
  _id,
    images,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    price_id
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-20">
        <div className="grid gap-1 md:grid-cols-2">
          <ImageGallery images={data.images} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>
            </div>
            <div className="mb-6 flex items-center gap-3 text-gray-200 md:mb-10">
              <button className="bg-purple-600 px-4 flex py-2 rounded-full gap-x-3">
                <span className="text-sm">4.2</span>
                <BiStar className="h-5 w-5" />
              </button>
              <span className="text-sm text-gray-500 transition duration-100">
                68 Ratings
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                Incl. Vat Plus Shipping
              </span>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <FcApproval size={25} />
              <span className="text-sm">Buy And Get Your games 24/7</span>
            </div>
            <div className="flex gap-2.5 ">
             <AddToBag currency="USD"
             description={data.description}
             image={data.images[0]}
             name={data.name}
             price={data.price}
             key={data._id}
             price_id={data.price_id}
             />
              <button className="bg-gray-300 hover:bg-gray-400 text-black font-bold px-3 py-1 rounded-lg">
                Checkout now
              </button>
            </div>
            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
