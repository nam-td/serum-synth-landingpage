
export default function Contact() {
  return (
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-12 p-6">
      <h1 className="w-full text-center text-2xl uppercase font-bold tracking-widest mb-12">
        Xfer Records Locations
      </h1>
      <div className="w-full max-w-[600px]">
        <p className="text-xl font-bold text-lime-500">Xfer Records North America, Inc.</p>
        <p>646 Washington St</p>
        <p>San Francisco</p>
        <p>CA, 94111</p>
        <p> United States</p>
        <p> (415) 291-8038</p>
      </div>
      <div className="w-full max-w-[600px]">
        <p className="text-xl font-bold text-lime-500">Xfer Records Germany, Inc.</p>
        <p>Angermunder Chaussee 1</p>
        <p>Eberswalde</p>
        <p>Brandenburg, 16225</p>
        <p>Germany</p>
        <p>	03334 526869</p>
      </div>
    </div>
  );
}
