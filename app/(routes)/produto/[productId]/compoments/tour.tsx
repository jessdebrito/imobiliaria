"use client";

interface TourContainerProps {
  title: string;
  subtitle: string;
}

const TourContainer: React.FC<TourContainerProps> = ({ title, subtitle }) => {

  return (
    <div className="space-y-4 px-1 lg:px-30 py-16 lg:py-20">
      <h1 className="text-7xl text-black font-bold  tracking-wide flex flex-wrap justify-center gap-x-4">
        {title}
      </h1>
      <h2 className="text-center text-3xl text-[var(--color-gray-2)] font-semibold ">
        {subtitle}
      </h2>
    </div>
  );
};

export default TourContainer;
