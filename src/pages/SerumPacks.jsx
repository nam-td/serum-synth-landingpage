import { PresetCard, PresetCardBig } from "../components/PresetCard";
const serumPresets = [
  {
    id: 1,
    packName: "Night Visions",
    author: "NEST Acoustics",
    price: 20,
    imageURL: "/presets/night-visions.jpg",
  },
  {
    id: 2,
    packName: "Serum Models",
    author: "Francis Preve",
    price: 29,
    imageURL: "/presets/serum-models.jpg",
  },
  {
    id: 3,
    packName: "Hyper Blue",
    author: "Audiotent",
    price: 47,
    imageURL: "/presets/hyper-blue.jpg",
  },
  {
    id: 4,
    packName: "Punch - Fat Bass Patches For Serum",
    author: "Libra Rising Music",
    price: 20,
    imageURL: "/presets/punch.jpg",
  },
  {
    id: 5,
    packName: "Aer - Anthemic Drum & Bass",
    author: "Black Octopus Sound",
    price: 20,
    imageURL: "/presets/aer.jpg",
  },
];
export default function SerumPacks() {
  return (
    <div className="w-full lg:max-w-[1280px] max-w-[450px] pt-[120px] px-6 pb-6 lg:px-12 grid lg:grid-cols-4 lg:grid-rows-4 grid-cols-2 grid-rows-8 gap-6">
      <div className="col-span-2 row-span-4">
        <PresetCardBig
          packName={serumPresets[0].packName}
          author={serumPresets[0].author}
          price={serumPresets[0].price}
          imageURL={serumPresets[0].imageURL}
        />
      </div>
      <div className="row-span-2 row-start-5 lg:row-span-2 lg:col-start-3">
        <PresetCard
          packName={serumPresets[1].packName}
          author={serumPresets[1].author}
          price={serumPresets[1].price}
          imageURL={serumPresets[1].imageURL}
        />
      </div>
      <div className="row-span-2 row-start-5 lg:row-span-2 lg:col-start-4">
        <PresetCard
          packName={serumPresets[2].packName}
          author={serumPresets[2].author}
          price={serumPresets[2].price}
          imageURL={serumPresets[2].imageURL}
        />
      </div>
      <div className="row-span-2 row-start-7 lg:row-span-2 lg:col-start-4 lg:row-start-3">
        <PresetCard
          packName={serumPresets[3].packName}
          author={serumPresets[3].author}
          price={serumPresets[3].price}
          imageURL={serumPresets[3].imageURL}
        />
      </div>
      <div className="row-span-2 row-start-7 lg:row-span-2 lg:col-start-3 lg:row-start-3">
        <PresetCard
          packName={serumPresets[4].packName}
          author={serumPresets[4].author}
          price={serumPresets[4].price}
          imageURL={serumPresets[4].imageURL}
        />
      </div>
    </div>
  );
}
