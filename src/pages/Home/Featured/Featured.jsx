import SectionTitle from "../../../SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8">
      <SectionTitle subHeading="check it out" heading="Featured Item" />
      <div className="md:flex justify-center items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20. 2099</p>
          <p className="uppercase">Where Can I get so</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            et minima, culpa velit consectetur deleniti eaque nihil maiores in
            labore, quibusdam reprehenderit facere repudiandae, dolor voluptatum
            ducimus accusamus at aut. Ipsam repudiandae voluptatibus inventore
            odio asperiores, ipsum laudantium facilis qui ad ducimus labore,
            animi officiis rerum soluta dignissimos nemo enim!
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4"></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
