/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import axios from 'axios'

const Services = ({ url }) => {
  const [data, setData] = useState(null);
  const fetchData = async () => {

    await axios.get(`${url.url}/get_partners`).then((res) => {
      setData(res.data?.data);
    }).catch((err) => console.ldog(err));
  }

  useEffect(() => {
    fetchData();
  }, [])
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/membership.png",
    },
    {
      id: 2,
      title: "National Associations",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/association.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      decription:
        "Our membership management software provides full automation of membership renewals and payments",
      image: "/src/assets/icons/group-club.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center my-8"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8 ">
          {data?.map((item) => {
            return <img src={item?.image} alt="" key={item.id} className="parterImage"/>;

          })}

        </div>
      </motion.div>

      {/* service cards */}
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-20 text-center md:w-1/2 mx-auto"
      >
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div className="">
              <div className="bg-[#E8F5E9] w-14 h-14 mx-auto mb-4 rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.decription}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
