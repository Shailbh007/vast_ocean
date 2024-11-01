import React from "react";
import Navbar from "./Navbar";
import Eventpanel from "./Extra_component/Eventpanel";
import Footers from "./Extra_component/Footers";

const data_top = [
  {
    heading: "Our Mission",
    content:
      "To empower individuals and organizations to achieve their full potential in the world of technology.",
  },
  {
    heading: "Our Vision",
    content:
      "To be the leading provider of technology services to businesses and individuals worldwide.",
  },
  {
    heading: "Our Values",
    content:
      "We are committed to delivering top-notch technology solutions that exceed our clients' expectations.",
  },
  {
    heading: "Our Commitment",
    content:
      "Our commitment is to deliver enriching and immersive experiences through music, entertainment, and audiobooks that inspire, entertain, and connect people to the power of storytelling and sound.",
  },
];
const data_team = [
  {
    image: "./images/anime1.png",
    name: "John Doe",
    position: "CEO",
    content:
      "We are committed to delivering top-notch technology solutions that exceed our clients' expectations.",
  },
  {
    image: "./images/anime1.png",
    name: "John Doe",
    position: "CEO",
    content:
      "We are committed to delivering top-notch technology solutions that exceed our clients' expectations.",
  },
  {
    image: "./images/anime1.png",
    name: "John Doe",
    position: "CEO",
    content:
      "We are committed to delivering top-notch technology solutions that exceed our clients' expectations.",
  },
  {
    image: "./images/anime1.png",
    name: "John Doe",
    position: "CEO",
    content:
      "We are committed to delivering top-notch technology solutions that exceed our clients' expectations.",
  },
];
const upcomingProjects = [
  {
    name: "Rhythm Nights",
    date: "2024-11-10",
    desc: "An electrifying night featuring top artists across genres, bringing together the best of pop, rock, and EDM.",
    image:
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    location: "Los Angeles, CA",
    organizer: "LiveNation",
    ticketPrice: 50,
    website: "https://livenation.com/rhythm-nights",
  },
  {
    name: "Summer Beats Fest",
    date: "2024-12-15",
    desc: "A two-day music festival with beachside stages and a lineup of world-renowned DJs and bands.",
    image:
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    location: "Miami, FL",
    organizer: "FestPro",
    ticketPrice: 120,
    website: "https://festpro.com/summer-beats",
  },
  {
    name: "Rock Legends Reunion",
    date: "2025-01-05",
    desc: "A reunion of classic rock bands from the '70s and '80s, reliving iconic anthems in an unforgettable night.",
    image:
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    location: "New York, NY",
    organizer: "Retro Rock Events",
    ticketPrice: 75,
    website: "https://retrorockevents.com/rock-legends",
  },
  {
    name: "Indie Vibes Showcase",
    date: "2025-01-20",
    desc: "An intimate showcase of rising indie artists with live performances and exclusive album previews.",
    image: "./images/anime1.png",
    location: "Austin, TX",
    organizer: "IndieGroove",
    ticketPrice: 30,
    website: "https://indiegroove.com/indie-vibes",
  },
  {
    name: "Global Cinema Awards",
    date: "2025-02-14",
    desc: "A prestigious award night celebrating the best in international film, with red carpet appearances by top actors and directors.",
    image:
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    location: "Hollywood, CA",
    organizer: "FilmWorld",
    ticketPrice: 200,
    website: "https://filmworld.com/cinema-awards",
  },
];

const publishers = [
  {
    name: "TechWorld Publishing",
    profileImage: "./images/file.png",
    description: "A leading publisher in technology and innovation sectors, bringing cutting-edge content to a glanime",
  },
  {
    name: "InspireReads",
    profileImage: "./images/file.png",
    description: "Focusing on motivational and educational content, InspireReads aims to empower readers to achieve their best.",
  },
  {
    name: "Digital Horizons",
    profileImage: "./images/file.png",
    description: "Pioneers in digital content, offering resources that push the boundaries of technology and learning.",
  },
  {
    name: "Global Ink",
    profileImage: "./images/file.png",
    description: "An established publisher known for producing impactful and culturally diverse content worldwide.",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-blue-100 bg-opacity-2">
      <Navbar />
      <div className="flex flex-col gap-5 px-10 mt-20">
        <h1 className="text-4xl text-black font-serif font-bold">Projects</h1>
        <hr className="border-2 border-black"/>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {upcomingProjects.map((item) => (
            <div
              className="relative hover:cursor-pointer group"
              key={item.name}
            >
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center rounded-lg transition-opacity duration-300">
                  <h1 className="text-white text-xl font-bold font-serif">
                    {item.name}
                  </h1>
                  <p className="text-white text-xs mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 px-10 mt-20">
        <h1 className="text-4xl text-black font-serif font-bold">Upcoming Events</h1>
        <hr className="border-2 border-black"/>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 p-10">
          {upcomingProjects.map((item) => (
            <div
              key={item.name}
            >
              <div>
                <img
                  className=" w-full cover max-w-full"
                  src={item.image}
                  alt={item.name}
                />
                <div className=" inset-0 bg-black p-5 ">
                  <h1 className="text-white text-xl font-bold font-serif">
                    {item.name}
                  </h1>
                  <p className="text-white text-xs mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 2nd Content /> */}
      <div className="flex flex-col gap-5 px-10 mt-20">
        <div class="bg-white py-24 sm:py-32">
          <div class="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-xl">
              <h2 class="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Meet our Collaborator
              </h2>
              <p class="mt-6 text-lg/8 text-gray-600">
                "We extend our heartfelt gratitude to our
                incredible collaborators and dedicated publishers. Their
                unwavering support, expertise, and shared vision have been
                instrumental in bringing this project to life. "
              </p>
            </div>
            <ul
              role="list"
              class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {publishers.map((item) => (
                 <li>
                 <div class="flex items-center gap-x-6">
                   <img
                     class="h-16 w-16 rounded-full"
                     src={item.profileImage}
                     alt=""
                   />
                   <div>
                     <h3 class="text-base/7 font-semibold tracking-tight text-gray-900">
                       {item.name}
                     </h3>
                     <p class="text-sm/6 font-semibold text-indigo-600">
                       {item.description}
                     </p>
                   </div>
                 </div>
               </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 px-10">
        <h1 className="text-4xl text-black  font-bold">Team</h1>
        <hr className="border-2 border-black"/>
        <div className="flex flex-col justify-center pt-10 items-center gap-10 md:flex-row" >
        {data_team.map((item) => (
          <div className="text-white flex flex-col justify-center items-center">
            <img src={item.image} className="w-20 h-20 rounded-full bg-gray-500" alt="" srcset="" />
            <h1 className="text-black text-xl">{item.name}</h1>
            <h2 className="text-blue-600 text-xl">{item.position}</h2>
            <p className="text-black">{item.content}</p>
          </div>

        ))}
        </div>
        </div>
        <br />
        <Footers/>
    </div>

  );
}

