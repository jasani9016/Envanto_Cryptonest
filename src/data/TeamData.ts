import { StaticImageData } from "next/image";

import team_thumb_1 from "@/assets/img/team/team-01.png"
import team_thumb_2 from "@/assets/img/team/team-02.png"
import team_thumb_3 from "@/assets/img/team/team-03.png"
import team_thumb_4 from "@/assets/img/team/team-04.png"
import team_thumb_5 from "@/assets/img/team/team-05.png"
import team_thumb_6 from "@/assets/img/team/team-06.png"
import team_thumb_7 from "@/assets/img/team/team-07.png"
import team_thumb_8 from "@/assets/img/team/team-08.png"

interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   designasion: string;
   socialLinks: {
      linkedin: string;
      twitter: string;
      instagram: string;
   }
}[];

const team_data: DataType[] = [
   {
      id: 1,
      thumb: team_thumb_1,
      title: "Kevin Faringotan",
      designasion: "Founder & CEO",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 2,
      thumb: team_thumb_2,
      title: "Neha Faringotan",
      designasion: "Co-Faunder , CTO",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 3,
      thumb: team_thumb_3,
      title: "Vicky Martinez",
      designasion: "Chief Creative , Officer",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 4,
      thumb: team_thumb_4,
      title: "Alishia Fultean",
      designasion: "Project Manager",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 5,
      thumb: team_thumb_5,
      title: "Joseph Holt",
      designasion: "UI Designer",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 6,
      thumb: team_thumb_6,
      title: "Rosie Johnson",
      designasion: "Software Engineer",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 7,
      thumb: team_thumb_7,
      title: "Mack Diaz",
      designasion: "Blockchain Dev",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   },
   {
      id: 8,
      thumb: team_thumb_8,
      title: "Leticia Carr",
      designasion: "SEO Engineer",
      socialLinks: {
         linkedin: "https://www.linkedin.com/",
         twitter: "https://www.twitter.com/",
         instagram: "https://www.instagram.com/"
      }
   }
]

export default team_data;