"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function Footers() {
  return (
    <Footer container className="bg-slate-100 rounded-none  ">
      <div className="w-full ">
        <div className="flex flex-row justify-evenly">
          <div>
            <img src="./images/file.png" alt="" className="w-[8rem]" />
          </div>
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col >
                <Footer.Link href="/">Vast Ocean</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <div className="flex gap-4">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
              </div>
            </div>
          </div>
          <div className="w-full flex ">
          <Footer.Copyright href="#" by="Vast Ocean™" year={2024} />
          </div>
        </div>
        
    </Footer>
  );
}
