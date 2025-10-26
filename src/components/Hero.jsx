const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-14 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col justify-center">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Premium Outdoor Gear
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Gear up for your next hunt with confidence
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Curated riflescopes, apparel, optics, and accessories from trusted brands. Built for the elements, tested in the wild.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#catalog" className="rounded-md bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-700">
                Shop Best Sellers
              </a>
              <a href="#" className="rounded-md bg-gray-900 px-5 py-2.5 text-white shadow hover:bg-black/90">
                New Arrivals
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[url('https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center shadow-lg" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
