"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import image1 from "@/public/works/painter.jpg";
import { categories, servicelist } from "@/lib/data";
import { Card } from "./ui/card";
import Link from "next/link";

const imageUrls = [
  { id: "ajlpm", icon: image1, title: "Plomberie" },
  { id: "nyqcd", icon: image1, title: "Ménage" },
  { id: "azheo", icon: image1, title: "Jardinerie" },
  { id: "pzapl", icon: image1, title: "Électricité" },
  { id: "kqabh", icon: image1, title: "Décoration" },
  { id: "twxsg", icon: image1, title: "Peinture" },
  { id: "yjaklp", icon: image1, title: "Menuiserie" },
];

const Categories = () => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const classNames =
    "hover:opacity-80 transitions rounded flex items-center justify-center rounded-full p-2 text-black shadow-xl";

  return (
    <div className="w-full flex flex-col items-start gap-8">
      <h2 className="text-2xl font-bold">Services populaires</h2>
      <div className="w-full flex items-center justify-between -mt-2">
        <div className="flex items-center gap-4">
          {categories.map(({ icon, id, title, active }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-1 py-2 px-6 rounded bg-orange-100"
            >
              <img
                src={icon}
                alt={title}
                className="w-[100px] h-[40px] object-contain object-center"
              />
              <span className="font-semibold text-orange-600">{title}</span>
            </div>
          ))}
        </div>
        {/* <span className="text-orange-600 underline">voir plus</span> */}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-gray-300">
        {servicelist.map((service) => (
          <Card
            key="id"
            className="flex flex-col shadow-lg outline-none border-none"
          >
            <Link href={`/profile/${service.fullname}`}>
              <Image
                src={service.icon}
                width={300}
                height={300}
                alt={service.title}
                quality={100}
                className="rounded"
              />
            </Link>
            <Link
              href={`/profile/${service.fullname}`}
              className="flex flex-col items-start my-2 mx-3 gap-1 font-ibm-plex-serif"
            >
              <span className="flex items-center justify-center text-xs bg-orange-100 rounded-full text-orange-600 font-bold py-1 px-2">
                {service.category}
              </span>
              <span className="font-bold">{service.title}</span>
              <span className="text-orange-600 text-sm">
                {service.fullname}
              </span>
              <span className="text-sm text-gray-600 line-clamp-1">
                {service.address}
              </span>
            </Link>
            <button className="w-full flex items-center justify-center text-sm my-2 bg-orange-600 p-2 rounded-full shadow-md text-white">
              Reserve maintenant
            </button>
          </Card>
        ))}
        {/* <Swiper
          slidesPerView={11}
          spaceBetween={7}
          onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          navigation={{ prevEl, nextEl }}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          fadeEffect={{ crossFade: true }}
          speed={1000}
          effect="fade"
        >
          {" "}
          {imageUrls.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <Image
                  alt="category"
                  src={item.icon}
                  width={350}
                  height={300}
                  className="rounded  brightness-[1]"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <span className="absolute text-white font-bold top-[80%] left-[50%] translate-x-[-50%]">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
          <div className="w-full z-50 absolute top-[50%] translate-y-[-50%] justify-between flex px-1">
            <button
              style={{
                background: activeIndex > 0 ? "#fff" : "",
              }}
              className={classNames}
              ref={(node) => setPrevEl(node)}
            >
              {activeIndex > 0 ? (
                <ChevronLeft />
              ) : (
                <span className="invisible">der</span>
              )}
            </button>

            <button
              style={{
                background: "#fff",
              }}
              className={classNames}
              ref={(node) => setNextEl(node)}
            >
              <ChevronRight />
            </button>
          </div>
        </Swiper> */}
      </div>
    </div>
  );
};

export default Categories;
