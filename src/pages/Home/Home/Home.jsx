import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import Card from "./Card";
import Brands from "../Brands/Brands";
import Services from "../Services/Services";

const Home = () => {
  const loadcate = useLoaderData();
  const [toys, setToys] = useState([]);
  const [url, setUrl] = useState(`https://mango-toys-server.vercel.app/toys?category_name`);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);
  const catagoryload = (name) => {
    setUrl(`https://mango-toys-server.vercel.app/toys?category_name=${name}`);
  };
  const subCatagoryload = (name) => {
    setUrl(`https://mango-toys-server.vercel.app/toys?subcategory_name=${name}`);
  };
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      {/* category */}
      <div className="text-center p-10 pb-32 md:px-20">
        <h2 className="md:p-10 p-5 lg:text-5xl text-3xl font-semibold">Shop by category</h2>
        <Tabs>
          <TabList>
            {loadcate.map((cat) => (
              <Tab key={cat._id}>
                <a onClick={() => catagoryload(cat.name)} >{cat.name}</a>
              </Tab>
            ))}
          </TabList>
          {loadcate.map((cat) => (
            <TabPanel key={cat._id}>
              <div className="tabs flex justify-center">
                <button
                  className="tab bg-slate-200 m-2 rounded-lg "
                  onClick={() => subCatagoryload(`${cat.subcategories[0]}`)}
                >
                  {cat.subcategories[0]}
                </button>
                <button
                  className="tab bg-slate-200 m-2 rounded-lg "
                  onClick={() => subCatagoryload(`${cat.subcategories[1]}`)}
                >
                  {cat.subcategories[1]}
                </button>
                <button
                  className="tab bg-slate-200 m-2 rounded-lg "
                  onClick={() => subCatagoryload(`${cat.subcategories[2]}`)}
                >
                  {cat.subcategories[2]}
                </button>
                <button
                  className="tab bg-slate-200 m-2 rounded-lg "
                  onClick={() => subCatagoryload(`${cat.subcategories[3]}`)}
                >
                  {cat.subcategories[3]}
                </button>
              </div>
            </TabPanel>
          ))}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-items-center">
            {toys.map((toy) => (
              <Card key={toy._id} toy={toy}></Card>
            ))}
          </div>
        </Tabs>
      </div>
      {/* extra sections  */}
      <Services></Services>
      <Brands></Brands>
    </div>
  );
};

export default Home;
