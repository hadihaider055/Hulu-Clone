import Image from "next/image";
import Logo from "../../public/logo.png";
import HeaderItem from "../headerItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex justify-evenly flex-grow max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Link href="/">
        <Image src={Logo} width={80} height={30} className="cursor-pointer" />
      </Link>
    </header>
  );
};

export default Header;
