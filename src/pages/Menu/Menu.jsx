import Cover from "../shared/Cover/Cover";
import coverBg from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
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
