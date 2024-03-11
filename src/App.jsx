/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import MyFooter from "./components/Footer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";
import axios from "axios"
import Form from './components/Form'
function App(props) {

  const [data, setData] = useState(null);

  const getData = async () => {
    await axios.get(`${props.url}/get_settings`).then((res) => {
      setData(res.data.data);

    }).catch((err) => console.log(err))

  }
  useEffect(()=>{
    getData()
  },[])
console.log("data",data)
  return (
    <>
      <Navbar data={data}/>
      <Home />
      <Services url={props}/>
      <About />
      <Product />
      <Form/>
      <Blog />
      <Newsletter />
      <MyFooter data={data}/>
    </>
  );
}

export default App;
