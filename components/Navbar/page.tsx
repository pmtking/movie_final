// import { link } from "fs";
import Button from "../Button/page";
import NavItem from "../NavItem/page";
import "./style.scss";
const Navbar = () => {
  const items = [
    {
      name: "خانه",
      link: "/",
    },
  ];
  return (
    <>
      <div className="navbar flex justify-between items-center ">
        <div className="">logo</div>
        <div className="flex justify-between items-center gap-6">
          {items.map((item, key) => {
            return (
              <>
                <NavItem name={item.name} link={item.link} />
              </>
            );
          })}
        </div>
        <div className="">
            <Button  name={'ورود  یا ثبت نام'} type={"submit"}/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
