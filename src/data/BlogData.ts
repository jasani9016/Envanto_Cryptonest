"use client"
import { StaticImageData } from "next/image";

import blog1 from "@/assets/img/blog/blog-01.jpg";
import blog2 from "@/assets/img/blog/blog-02.jpg";
import blog3 from "@/assets/img/blog/blog-03.jpg";
import blog4 from "@/assets/img/blog/blog-04.jpg";
import blog5 from "@/assets/img/blog/blog-05.jpg";

interface DataType {
   id: number;
   thumbnail: StaticImageData;
   author: string;
   date: string;
   title: string;
   desc: string;
}[];


const blog_data: DataType[] = [
   {
      id: 1,
      thumbnail: blog1,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 2,
      thumbnail: blog2,
      author: "Admin",
      date: "10.01.2025",
      title: "Countdown to ‘most anticipated event in history",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 3,
      thumbnail: blog3,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 4,
      thumbnail: blog4,
      author: "Admin",
      date: "10.01.2025",
      title: "Countdown to ‘most anticipated event in history",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 5,
      thumbnail: blog5,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 6,
      thumbnail: blog2,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 7,
      thumbnail: blog1,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
   {
      id: 8,
      thumbnail: blog5,
      author: "Admin",
      date: "10.01.2025",
      title: "Bitcoin Takes on the Fed: Is a Historic Rally on the Horizon?",
      desc: "The prices of cryptocurrency businesses’ shares rose sharply last month, while the index of stocks…",
   },
];


export default blog_data;