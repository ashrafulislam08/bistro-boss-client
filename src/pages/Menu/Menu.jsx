import Cover from "../shared/Cover/Cover";
import coverBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover img={coverBg} title="Our MENu" />
      {/* offered items */}
      <SectionTitle subHeading="Don't miss" heading="Today's Offer" />
      <MenuCategory items={offered} />
      {/* dessert items */}
      <MenuCategory items={desserts} img={dessertBg} title="desserts" />
      {/* salad items */}
      <MenuCategory items={salad} img={saladBg} title="Salad" />
      {/* soup items */}
      <MenuCategory items={soup} img={soupBg} title="Soup" />
      {/* soup items */}
      <MenuCategory items={pizza} img={pizzaBg} title="Pizza" />
    </div>
  );
};

export default Menu;
