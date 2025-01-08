import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
