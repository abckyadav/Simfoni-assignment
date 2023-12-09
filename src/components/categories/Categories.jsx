

function Categories() {
  

  return (
    <div className="w-full pb-4">
      <div className="rounded-lg border border-gray-200  bg-white px-10 pb-8 text-gray-600 lg:px-28">
        <p className="mb-4 py-5 text-xl font-bold">BEST SELLING CATEGORY</p>
        <div className="lg:gap-30 grid grid-cols-2 gap-10 gap-y-3  lg:grid-cols-5 ">
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1mC9GXQTMuN6OGghrF0qidN7DSKHqBTX3Q&usqp=CAU"
              style={{
                height: "10rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="p-4 text-lg font-semibold text-gray-500">
              <p>Electricals</p>
            </p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border shadow-md">
            <img
              src="https://www.aucklandhomeshow.co.nz/wp-content/uploads/2017/05/bigstock-171681656.jpg"
              style={{
                height: "10rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="p-4 text-lg font-semibold text-gray-500">
              <p>Home Decor</p>
            </p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border shadow-md">
            <img
              src="https://img.freepik.com/free-psd/armchair-pillow_176382-861.jpg"
              style={{
                height: "10rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="p-4 text-lg font-semibold text-gray-500">
              <p>Furniture</p>
            </p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border shadow-md">
            <img
              src="https://previews.123rf.com/images/monticello/monticello1307/monticello130700019/20781678-green-shopping-bag-with-grocery-products-on-white-background.jpg"
              style={{
                height: "10rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="p-4 text-lg font-semibold text-gray-500">
              <p>Grocerry</p>
            </p>
          </div>
          <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border shadow-md">
            <img
              src="https://previews.123rf.com/images/scanrail/scanrail1111/scanrail111100032/11334114-set-of-color-touchscreen-smartphones-isolated-on-white-background.jpg"
              style={{
                height: "10rem",
                width: "100%",
                objectFit: "contain",
              }}
            />
            <p className="p-4 text-lg font-semibold text-gray-500">
              <p>Smartphones</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
