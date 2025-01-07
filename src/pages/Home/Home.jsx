import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Category />
      {/* <PopularMenu /> */}
      <Testimonials />
    </div>
  );
};

export default Home;
