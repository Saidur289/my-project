import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data))
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      // console.log(data.data.data)
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFake = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phonesWithFake);
        setTimeout(() => {
            setPhones(phonesWithFake);
            setLoading(false);
        }, 2000);
       
      });
  }, []);
  return (
    <div className="text-center">
      {loading && (
        <div>
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      <h1>Phones Available: {phones.length}</h1>
      <BarChart width={1000} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default Phones;
