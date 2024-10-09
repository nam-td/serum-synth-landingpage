export function PresetCard(props) {
  const { packName, author, price, imageURL } = props;
  return (
    <div className="w-full aspect-square relative overflow-hidden font-[Montserrat] border border-neutral-100/10 shadow-sm shadow-neutral-100/50 cursor-pointer group hover:border-lime-500 transition-all duration-700 ease-in-out hover:shadow-lime-500 hover:shadow-md">
      <img
        src={imageURL}
        alt=""
        className="max-w-none w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-150"
      />
      <div className="absolute w-full h-full bg-blue-950/10 z-10 top-0 left-0"></div>
      <div className="absolute z-20 bottom-0 w-full h-full lg:h-auto bg-neutral-950/60 lg:bg-neutral-950/50 lg:backdrop-blur-md shadow-lg shadow-neutral-800 p-4 flex flex-col justify-end gap-y-2 border-t border-neutral-100/20 transition-all duration-500 ease-in-out group-hover:bg-neutral-950/90">
        <div className="">
          <h3 className="uppercase text-base text-neutral-300 font-bold transition-all duration-500 ease-in-out group-hover:text-lime-500">{`${
            packName.length > 13 ? packName.slice(0, 13) + "..." : packName
          }`}</h3>
          <p className="text-sm text-neutral-400">by {author}</p>
        </div>
        <div className="">
          <p className="text-lg tracking-widest text-neutral-300 drop-shadow-lg font-bold">
            ${price}.00
          </p>
        </div>
      </div>
    </div>
  );
}
export function PresetCardBig(props) {
  const { packName, author, price, imageURL } = props;
  return (
    <div className="w-full aspect-square relative overflow-hidden font-[Montserrat] border border-neutral-100/10 shadow-sm shadow-neutral-100/50 cursor-pointer group hover:border-lime-500 transition-all duration-700 ease-in-out hover:shadow-lime-500 hover:shadow-md">
      <img
        src={imageURL}
        alt=""
        className="max-w-none w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:scale-150"
      />
      <div className="absolute w-full h-full bg-blue-950/10 z-10 top-0 left-0"></div>
      <div className="absolute bottom-0 w-full  bg-neutral-950/30 backdrop-blur-xl shadow-lg shadow-neutral-800 p-8 flex flex-col justify-end gap-y-2 border-t border-neutral-100/20">
        <div className="">
          <h3 className="uppercase text-3xl text-neutral-300 transition-all duration-500 ease-in-out group-hover:text-lime-500">{`${
            packName.length > 13 ? packName.slice(0, 13) + "..." : packName
          }`}</h3>
          <p className="text-sm text-neutral-400">by {author}</p>
        </div>
        <div className="">
          <p className="text-lg tracking-widest text-neutral-300 drop-shadow-lg font-bold">
            ${price}.00
          </p>
        </div>
      </div>
    </div>
  );
}
