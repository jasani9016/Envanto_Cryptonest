"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";


const UseVisibility = (options?: IntersectionObserverInit): [React.RefObject<HTMLDivElement>, boolean] => {
   const [isVisible, setIsVisible] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
         if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
         }
      }, options);

      if (ref.current) {
         observer.observe(ref.current);
      }

      return () => {
         if (ref.current) {
            observer.unobserve(ref.current);
         }
      };
   }, [ref, options]);

   return [ref, isVisible];
};


const Counter = ({ className, ...rest }: any) => {
   const [visibilityRef, isVisible] = UseVisibility();

   return (
      <div ref={visibilityRef}>
         <CountUp {...rest} start={isVisible ? null : 0}>
            {({ countUpRef }) => (
               <span className={className} ref={countUpRef} />
            )}
         </CountUp>
      </div>
   );
};

export default Counter;
