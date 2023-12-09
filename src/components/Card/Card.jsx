import "./Card.css";

const Card = () => {
  return (
    <div>
      <div>
        <div className="w-full   cursor-pointer rounded-lg border border-gray-200 p-3 shadow-lg">
          <div className=" flex h-full    flex-col">
            <div className="">
              <div className="flex h-36 w-full justify-center rounded-lg  bg-gray-200  p-2  ">
                <img
                  className="h-full rounded-lg"
                  src={
                    "https://seoghana.com/wp-content/uploads/2017/09/s3-news-tmp-85019-nestle_products-2x1-746-e1512646140862.jpg"
                  }
                  alt="product image"
                />
              </div>
              <div className="">
                <p className="pt-2 text-lg font-semibold leading-tight text-gray-700">
                  {"Title"}
                </p>
                <p className="text-xs font-semibold leading-5 text-gray-400">
                  454979843
                </p>
                <div className="leading-10">
                  <span className="text-xl font-bold">${"987"}</span>
                  <span className="text-gray-400">/each</span>
                </div>
                <p className="text-sm font-semibold text-teal-500">
                  Saving % 4.60
                </p>
                <div className="text-sm leading-6">
                  <span className="font-bold text-gray-700">Supplier:</span>
                  <span> {"Supplier"}</span>
                </div>
                <div className="mb-2 text-sm leading-6">
                  <span className="font-bold text-gray-700">Delivery By:</span>
                  <span> 10-12-2023</span>
                </div>
              </div>
            </div>

            <div className=" mt-auto  w-full ">
              <div className="flex justify-between">
                <div className="flex w-3/4 justify-around rounded-lg border-2 border-gray-200 px-4 py-2 font-semibold text-gray-700 ">
                  <p>-</p>
                  <p>0</p>
                  <p>+</p>
                </div>
                <div className="ml-3 flex w-1/4 items-center justify-center rounded-lg border-2 border-teal-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6 text-teal-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
              </div>
              <div className=" mt-3 flex justify-center rounded-lg bg-teal-600 py-2 font-semibold text-white">
                <p>Add To Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
