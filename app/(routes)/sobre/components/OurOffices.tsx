import Image from "next/image";

const headerOffice = {
  title: "Ao redor do mundo",
  subtitle: "Nossos escritórios",
};

const officeLocation = [
  {
    id: 1,
    title: "Santo Domingo, DR",
    description:
      "Located in the vibrant heart of Santo Domingo, our office provides a dynamic workspace that reflects the energy and creativity of the Dominican Republic. With modern amenities and a collaborative environment, it’s the perfect hub for entrepreneurs and businesses looking to thrive in a bustling market.",
    addressOne: "23 Creativity Street, Santo Domingo, 10101",
    addressTwo: "Dominican Republic",
    email: "Santo.domingo@nirastate.com",
    phone: "+1 (809) 555-0123",
    img: "/office-one.avif",
  },
  {
    id: 2,
    title: "New York, USA",
    description:
      "Our US office, situated in a strategic location, offers a professional and innovative space designed to support a diverse range of businesses. Equipped with the latest technology and resources, this location fosters collaboration and growth, making it ideal for companies seeking to expand their reach in the North American market.",
    addressOne: "456 Innovation Drive, Suite 101",
    addressTwo: "Springfield, IL 62701",
    email: "us.office@nirastate.com",
    phone: "1 (217) 555-0187",
    img: "/office-ny.avif",
  },
];

export default function OfficeList() {
  return (
    <>
      <div>
        <h2 className="mt-10 text-center tracking-wide text-gray-600 text-xl font-bold uppercase -mb-1">
          {headerOffice.title}
        </h2>
        <h3 className="text-center tracking-wide text-black text-3xl pb-6">
          {headerOffice.subtitle}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 py-6 mx-auto overflow-hidden">
        {officeLocation.map((item) => (
          <div
            key={item.id}
            className="flex flex-col mb-10 md:flex-row w-full overflow-hidden"
          >
            <div className="p-2 md:p-2">
              <div className="w-full mb-8 h-[400px] md:h-auto relative py-50">
                <Image
                  className="rounded-3xl object-cover"
                  src={item.img}
                  alt={`Foto frontal do prédio ${item.title}`}
                  fill
                  priority
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {item.title}
                </h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {item.addressOne}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {item.addressTwo}
                </p>
                <p className="text-gray-700 leading-relaxed ">
                  {item.email}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {item.phone}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
