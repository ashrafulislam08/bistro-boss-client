import Cover from "../shared/Cover/Cover";
import coverBg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import { Helmet } from "react-helmet-async";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <Cover title="our menu" img={coverBg} />
      <PopularMenu />
      <Cover title="our menu" img={coverBg} />
      <PopularMenu />
      <Cover title="our menu" img={coverBg} />
      <PopularMenu />
      <Cover title="our menu" img={coverBg} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
