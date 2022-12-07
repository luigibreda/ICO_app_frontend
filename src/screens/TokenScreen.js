import React, { useContext, useState } from "react";
import millify from "millify";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import TokenDetails from "../components/TokenDetails";
import TransactionToast from "../components/TransactionToast";
import GlobalContext from "../context/GlobalContext";
import handleError from "../utils/handleError";

const TokenScreen = () => {
  const { provider, signer, contract, account, icoState, handleConnectWallet } =
    useContext(GlobalContext);

  const [userAmount, setUserAmount] = useState("");

  const handleBuy = async () => {
    if (!signer) {
      handleConnectWallet();
      return;
    }
    console.log('luigi teste');
    try {
      const tx = await contract.StknICO.invest({
        value: ethers.utils.parseEther((0.0001 * userAmount).toString()),
      });
      setUserAmount("");
      toast.success(
        <TransactionToast
          userAmount={userAmount}
          hash={tx.hash}
          text="Placed Buy request for"
          text2="Please Wait Few Mins for confirmation"
        />
      );

      await tx.wait();

      toast.success(
        <TransactionToast
          userAmount={userAmount}
          hash={tx.hash}
          text="Purchased"
        />
      );
      handleConnectWallet();
    } catch (error) {
      handleError(error, "WVW");
    }
  };
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex justify-center items-center w-full">
        {/* Token Details */}
        <div className="flex flex-col w-full items-center">
          <div className="card">
            <div className="text-2xl text-center p-4">Token Details</div>
          </div>

          <TokenDetails title="Name" value="WVW Watch video & Win" />
          <TokenDetails title="Symbol" value="WVW" />
          <TokenDetails title="Decimals" value="18" />

          <TokenDetails title="Total Supply" value={millify(10000000)} />
          <TokenDetails title="Maximum Supply" value={millify(10000000)} />
          <TokenDetails
            title="Token Address"
            value="0x2FE8b9EEC16cE10BFEDCedd423238C812d70dE5F"
          />
        </div>
      </div>

      {/* Balance */}

      <div className="flex justify-center items-center w-full flex-col">
        <div
          className={icoState.investorBalance ? "card text-center" : "hidden"}
        >
          <div className="card-container">
            <div className="font-bold border-b-2 border-blue-500 mb-3">
              Your Balance
            </div>
            <div>
              BNB :{" "}
              {account.balance ? millify(account.balance, { precision: 6 }) : 0}{" "}
              BNB
            </div>
            <div>WVW : {icoState.investorBalance} WVW</div>
          </div>
        </div>

        {/* Token Buy */}

        <div className="card mt-8 sm:mt-0">
          <div className="text-2xl text-center p-4">Token Buy</div>
        </div>

        <div className="card">
          <div className="flex justify-center items-center flex-col">
            <div className="m-3">Price: 0.0001 BNB</div>
            <input
              className="input"
              type="number"
              min={10}
              max={30000}
              placeholder="No. of WVW Tokens..."
              value={userAmount}
              onChange={(e) => {
                setUserAmount(e.target.value);
              }}
            />
            {userAmount >= 10 && userAmount <= 30000 ? (
              <div className="mb-3 text-green-500">
                Total Pay:{" "}
                {millify(0.0001 * userAmount, {
                  precision: 4,
                })}{" "}
                BNB
              </div>
            ) : null}
            {userAmount < 10 && userAmount !== "" ? (
              <div className="text-red-500 mb-3">Min Tokens: 10 </div>
            ) : null}
            {userAmount > 30000 ? (
              <div className="text-red-500 mb-3">Max Tokens: 30000 </div>
            ) : null}

            <button className="btn mb-3 text-[1.15rem]" onClick={handleBuy}>
              {provider ? "Buy" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenScreen;
