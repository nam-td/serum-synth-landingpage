function ProductCard(props) {
  const { productName, productImageURL, subtitle } = props;
  return (
    <div className="w-full max-w-[600px] aspect-[21/9] relative rounded-xl overflow-hidden bg-gradient-to-tr from-neutral-950 to-transparent flex justify-center items-center shadow-sm shadow-neutral-200/80 border border-neutral-100/20">
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] object-left-top max-w-none rounded-xl overflow-hidden">
        <img src={productImageURL} alt="" className="max-w-none w-[650px] translate-x-[30.3%] sm:translate-x-[50.3%] border-l border-white grayscale" />
        <div className="w-full h-full absolute top-0 left-0 bg-blue-950/10 z-30"></div>
      </div>
      <div className="absolute top-[1px] left-[1px] w-[calc(100%-2px)] h-[calc(100%-2px)] bg-gradient-to-t from-neutral-950 to-transparent flex flex-col justify-end p-4">
        <p className="text-2xl text-lime-500 uppercase tracking-widest">
          {productName}
        </p>
        <p className="text-neutral-300 tracking-widest">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ProductDisplay() {
  return (
    <div className="w-full max-w-[1280px] p-6 pb-24 mx-auto mt-20 flex flex-col gap-y-12 lg:flex-row lg:gap-x-8 lg:flex-wrap md:justify-center xl:justify-start">
      <h1 className="text-4xl lg:text-6xl font-bold">Our Products</h1>
      <div className="w-full flex flex-row flex-wrap justify-center gap-8 lg:gap-6 items-center">
        <ProductCard
          productName="Serum"
          productImageURL="/serum.png"
          subtitle="Advanced Wavetable Synthesizer"
        />
        <ProductCard
          productName="LFO Tool"
          productImageURL="/lfotool.png"
          subtitle="Powerful LFO Shaping"
        />
        <ProductCard
          productName="Cthulhu"
          productImageURL="/cthulhu.png"
          subtitle="The Chord and Arp Monster"
        />
        <ProductCard
          productName="Nerve"
          productImageURL="/nerve.png"
          subtitle="Powerful beat manipulation and creation"
        />
      </div>
    </div>
  );
}
