import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [rotti, setRotti] = useState(0);

  const moveX = gsap.utils.random(-300, 300, 100);
  const rotateX = gsap.utils.random(-360, 360, 30);
  const moveY = gsap.utils.random(-300, 300, 100);

  const flyRef = useRef();

  const { contextSafe } = useGSAP();

  const flyMove = contextSafe(() => {
    gsap.to(flyRef.current, {
      x: xValue,
      y: yValue,
      rotate: rotti,
      duration: 0.7,
    });
  }, [xValue, rotti, yValue]);

  return (
    <main>
      <img
        onClick={() => {
          setXValue(moveX);
          setRotti(rotateX);
          setYValue(moveY);
          flyMove();
        }}
        ref={flyRef}
        src="https://imgs.search.brave.com/Kp1BdpQcDg5P-7x4LBW0mPhxLNcVszQQB2ietOdkgYY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZmx5/LWluLWxhYm9yYXRv/cnktcmVzZWFyY2gt/cG5nLTgxLTh4YWJn/aTlzcG5hemJrd2Qu/cG5n"
        alt=""
      />
    </main>
  );
};
export default App;
