import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
        <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
