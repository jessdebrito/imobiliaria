import Image from "next/image";


const headerAgents = {
  title: "pequeno e eficaz",
  subtitle: "Conheça nossos corretores",
};
const agentsList = [
  {
    id: 1,
    name: "Carl Effei",
    role: "Account Manager",
    about:
      "With over 10 years of experience in the real estate industry, Jane Doe is dedicated to helping clients navigate the complex world of buying, selling, and investing in properties. Specializing in residential and commercial real estate, she has a deep knowledge of the local market, ensuring her clients always receive expert advice tailored to their needs.",
    sales: 98,
    business: 95,
    impression: 4.9,
    img: "/agent-carl.avif",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "General Manager",
    about:
      "Jane is known for her hands-on approach, attention to detail, and commitment to making the real estate process as smooth and stress-free as possible. Her passion for helping people find their dream homes or investment opportunities drives her to go the extra mile, offering personalized guidance every step of the way. Outside of real estate, Jane enjoys exploring new neighborhoods, hiking, and spending time with her family.",
    sales: 95,
    business: 91,
    impression: 4.8,
    img: "/agent-jane.avif",
  },
];

export default function AgentCard() {
  return (
    <div id="corretores" className="w-11/12 py-10 mx-auto overflow-hidden">
      <div>
        <h2 className="text-center tracking-wide text-gray-600 text-xl font-bold uppercase -mb-1">
          {headerAgents.title}
        </h2>
        <h3 className="text-center tracking-wide text-black text-3xl mb-10">
          {headerAgents.subtitle}
        </h3>
      </div>

      {agentsList.map((agent) => (
        <div
          key={agent.id}
          className="flex flex-col mb-10 md:flex-row w-full overflow-hidden "
        >
          <div className="md:w-3/6 h-[400px] md:h-auto relative py-8">
            <Image
              className="rounded-3xl object-cover object-top"
              src={agent.img}
              alt={`Foto do agente ${agent.name}`}
              fill
              priority
            />
          </div>

          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {agent.name}
              </h1>
              <h2 className="text-xl text-gray-700 mb-4">{agent.role}</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                {agent.about}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">
                  {agent.sales}%
                </p>
                <p className="text-sm text-gray-700">Sucesso em vendas</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">
                  {agent.business}%
                </p>
                <p className="text-sm text-gray-700">Negociação aprimorada</p>
              </div>

              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">
                  {agent.impression}
                </p>
                <p className="text-sm text-gray-700">Satisfação do cliente</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
