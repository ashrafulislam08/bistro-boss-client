const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto md:w-3/12 my-4 text-center">
      <p className="text-yellow-600 italic mb-2">--- {subHeading} ---</p>
      <h3 className="text-4xl border-y-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
