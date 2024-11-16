import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <span className="ml-3 mr-2 text-xl font-bold">
          OneTrue<span className="text-sky-600">Id </span>
        </span>
      </Link>
    </>
  );
};

export default Logo;
