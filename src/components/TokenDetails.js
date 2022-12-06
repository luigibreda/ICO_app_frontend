import React from "react";

const TokenDetails = ({ title, value }) => {
  if (title === "Token Address") {
    return (
      <div>
        <div className="flex justify-center items-center flex-col card">
          <div className="text-center" title={value}>
            {title} : {value.substring(0, 8)}......{value.substring(34, 42)}
          </div>
          <div className="m-2">
            <a
              className="btn text-sm mt-2 "
              href="https://testnet.bscscan.com/token/0xbf03e04956C21eC20C470725Dd11E148e944F42c"
              target="_blank"
              rel="noreferrer noopener"
            >
              View on explorer
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="card">
        {title} : {value}
      </div>
    </div>
  );
};

export default TokenDetails;
