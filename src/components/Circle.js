import React, { useContext } from "react";

import GlobalContext from "../context/GlobalContext";

const Circle = () => {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center box-direita-home">
          <div className="circle-text mb-3">Preço</div>
          <div className="circle border-yellow-500">
            <div className="text-center">0.0001 BNB</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col">
          <div className="circle border-orange-500">
            <div className="text-center">0.001 BNB</div>
          </div>
          <div className="circle-text mt-3">Min</div>
          <div className="circle-text">Investimento</div>
        </div>

        <div className="flex flex-col">
          <div className="circle border-green-500">
            <div className="text-center">3.0 BNB</div>
          </div>
          <div className="circle-text mt-3">Max</div>
          <div className="circle-text">Investimento</div>
        </div>
      </div>
    </>
  );
};

export default Circle;
