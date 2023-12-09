import Card from "../Card/Card";

function Allitems() {
  return (
    <section className="body-font text-gray-600">
      <div className="w-full  pb-4">
        <div className="rounded-lg border border-gray-200 bg-white px-10 pb-8 lg:px-28">
          <div className="flex items-center justify-between">
            <p className="py-5 text-xl font-bold ">ALL ITEMS</p>
          </div>

          <div className="grid w-full gap-y-6 sm:grid-cols-1 md:grid-cols-2 md:gap-x-3 lg:grid-cols-5 lg:gap-x-10 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Allitems;
