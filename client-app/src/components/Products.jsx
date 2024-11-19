import { useState } from "react";
import SmallPopImg from "../assets/images/examples/smallpop.svg";
import LargePopImg from "../assets/images/examples/bigpop.svg";
import CokeImg from "../assets/images/examples/coke.svg";
import LaysImg from "../assets/images/examples/lays.svg";
import WaterImg from "../assets/images/examples/water.svg";
import SpriteImg from "../assets/images/examples/sprite.svg";
import Combo1Img from "../assets/images/examples/combo1.svg";
import Combo2Img from "../assets/images/examples/combo2.svg";
import Product from "./items/Product";
import SearchImg from "../assets/images/search.svg";
import addImg from "../assets/images/add.svg";

const exampleProducts = [
  {
    icon: SmallPopImg,
    title: "Small Popcorn 20Oz",
    price: "$5.00",
    type: "Food and Drinks",
  },
  {
    icon: LargePopImg,
    title: "Large Popcorn 35Oz",
    price: "$10.00",
    type: "Food and Drinks",
  },
  {
    icon: CokeImg,
    title: "Coke 20Oz",
    price: "$5.00",
    type: "Souvenirs",
  },
  {
    icon: LaysImg,
    title: "Lays 30Oz",
    price: "$3.00",
    type: "Food and Drinks",
  },
  {
    icon: WaterImg,
    title: "Water 20Oz",
    price: "$2.00",
    type: "Souvenirs",
  },
  {
    icon: SpriteImg,
    title: "Sprite 20Oz",
    price: "$5.00",
    type: "Souvenirs",
  },
  {
    icon: Combo1Img,
    title: "Combo 1",
    description: "Popcorn + Coke",
    price: "$15.00",
    type: "Combo",
  },
  {
    icon: Combo2Img,
    title: "Combo 2",
    description: "2 Popcorn + 2 Coke",
    price: "$20.00",
    type: "Combo",
  },
  {
    icon: SmallPopImg,
    title: "Small Popcorn 20Oz",
    price: "$5.00",
    type: "Food and Drinks",
  },
  {
    icon: LargePopImg,
    title: "Large Popcorn 35Oz",
    price: "$10.00",
    type: "Food and Drinks",
  },
  {
    icon: CokeImg,
    title: "Coke 20Oz",
    price: "$5.00",
    type: "Souvenirs",
  },
  {
    icon: LaysImg,
    title: "Lays 30Oz",
    price: "$3.00",
    type: "Food and Drinks",
  },
  {
    icon: WaterImg,
    title: "Water 20Oz",
    price: "$2.00",
    type: "Souvenirs",
  },
  {
    icon: SpriteImg,
    title: "Sprite 20Oz",
    price: "$5.00",
    type: "Souvenirs",
  },
  {
    icon: Combo1Img,
    title: "Combo 1",
    description: "Popcorn + Coke",
    price: "$15.00",
    type: "Combo",
  },
  {
    icon: Combo2Img,
    title: "Combo 2",
    description: "2 Popcorn + 2 Coke",
    price: "$20.00",
    type: "Combo",
  },
];

function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleAddNewClick = () => {
    alert("Add New Btn clicked");
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = exampleProducts.filter((product) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Others"
        ? product.type !== "Food and Drinks" && product.type !== "Souvenirs"
        : product.type === activeTab);
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });
  return (
    <div className="products flex flex-col h-full">
      <div className="text-40px font-medium text-light-gray">Products</div>
      <div className="product-tabs flex mt-4 z-20 text-light-gray">
        <button
          className={`tab ${activeTab === "All" ? "active" : ""}`}
          onClick={() => handleTabClick("All")}
        >
          <span>All</span>
        </button>
        <button
          className={`tab ${activeTab === "Food and Drinks" ? "active" : ""}`}
          onClick={() => handleTabClick("Food and Drinks")}
        >
          <span>Food and Drinks</span>
        </button>
        <button
          className={`tab ${activeTab === "Souvenirs" ? "active" : ""}`}
          onClick={() => handleTabClick("Souvenirs")}
        >
          <span>Souvenirs</span>
        </button>
        <button
          className={`tab ${activeTab === "Others" ? "active" : ""}`}
          onClick={() => handleTabClick("Others")}
        >
          <span>Others</span>
        </button>
        <div className="SearchBar relative ml-auto w-full max-w-[240px] h-8 -mt-2">
          <input
            type="text"
            className="size-full pl-10 pr-5 text-sm text-gray rounded-full text-gray-700 bg-black border-line-gray border-2 focus:outline-none focus:ring-1"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img
            src={SearchImg}
            alt="Search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>
      <div className="content -mt-[2px] w-full h-full bg-black border-[3px] border-line-gray rounded-b-xl rounded-tr-xl rounded-tl-none pl-12 py-6 pr-4 overflow-auto">
        <div className="list grid grid-cols-7 gap-2 max-h-[510px] py-3 overflow-y-auto">
          {filteredProducts.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
        <button
          className="fixed bottom-10 right-16 size-11 rounded-2xl bg-red hover:bg-dark-red duration-200"
          onClick={handleAddNewClick}
        >
          <img className="size-11" src={addImg} alt="Add New" />
        </button>
      </div>
    </div>
  );
}
export default Products;
