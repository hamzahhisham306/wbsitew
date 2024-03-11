/* eslint-disable react/prop-types */
import React from "react";
import { Footer, Label, TextInput } from "flowbite-react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin
} from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";


const MyFooter = ({ data }) => {
  const IconFooter = ({type}) => {
    switch (type) {
      case 'facebook': return <BsFacebook />
      case "instagram": return <BsInstagram />
      case "linkedin": return <BsLinkedin />
      default:
        return <></>;
    }
  }
  return (
    <footer className="bg-neutralBlack text-white">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-12">
        <div className="grid w-full justify-between gap-8 sm:flex sm:items-start sm:justify-between md:flex md:grid-cols-1">
          <div className="mt-2">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={data?.footer_icon}
                alt=""
                className="w-20 inline-block items-center"
              />
              <span>{data?.site_name}</span>
            </a>
            <div className="my-8">
              <p className="mb-1">Email: {data?.email}</p>
              
            </div>

            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-start text-white">
             {data?.social_media.map((item)=>{
              return <a href={item.link} target="_blank"  rel="noreferrer" key={item.id}>
                     <IconFooter type={item?.type}/>
              </a>
             })}
            </div>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-8 items-start sm:mt-4 sm:grid-cols-3 sm:gap-6 text-white">
            <div>
              <Footer.Title title="Company" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  About us
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Blog
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Contact us
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Pricing
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Testimonials
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Support" className="text-white" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-white">
                  Help center
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms of service
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Legal
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Privacy policy
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Status
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Stay up to date" className="text-white" />
              <div className="max-w-md text-white">
                <div className="mb-2 block"></div>
                <TextInput
                  id="email4"
                  placeholder="name@flowbite.com"
                  required
                  rightIcon={SiMinutemailer}
                  type="email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
