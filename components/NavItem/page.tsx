import { NavItemType } from "@/types/type";
import Link from "next/link";

const NavItem = ({ name, link }: NavItemType) => {
  return (
    <>
      <div className="flex">
        <Link href={link}>{name}</Link>
      </div>
    </>
  );
};

export default NavItem;
