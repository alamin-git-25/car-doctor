import Image from "next/image";
import Banner from "./component/Banner";
import AboutUs from "./component/AboutUs";
import Service from "./component/Service";
import ProductCard from "./component/ProductCard";
import Whay from "./component/Whay";

export default function Home() {
  return (
    <div className="scrollbar-hide">
      <Banner/>
      <AboutUs/>
      <Service/>
      <ProductCard/>
      <Whay/>
    </div>
  );
}
