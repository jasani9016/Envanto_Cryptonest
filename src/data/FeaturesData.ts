import { StaticImageData } from "next/image";

import feature_thumb_1 from "@/assets/img/features/features-01.png"
import feature_thumb_2 from "@/assets/img/features/features-02.png"
import feature_thumb_3 from "@/assets/img/features/features-03.png"
import feature_thumb_4 from "@/assets/img/features/features-04.png"


interface DataType {
   id: number;
   thumb: StaticImageData;
   title: string;
   description: string;
}[];

const features_data: DataType[] = [
   {
      id: 1,
      thumb: feature_thumb_1,
      title: "join to a crypto",
      description: "Multifunctional partnershi and the best Cryptocurrency"
   },
   {
      id: 2,
      thumb: feature_thumb_2,
      title: "collect to bitcoin",
      description: "Multifunctional partnershi and the best Cryptocurrency"
   },
   {
      id: 3,
      thumb: feature_thumb_3,
      title: "start the selling",
      description: "Multifunctional partnershi and the best Cryptocurrency"
   },
   {
      id: 4,
      thumb: feature_thumb_4,
      title: "paid to member",
      description: "Multifunctional partnershi and the best Cryptocurrency"
   },

];

export default features_data;