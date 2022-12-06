import React, { useContext, useEffect, useState } from "react";

import Transaction from "../components/Transaction";
import GlobalContext from "../context/GlobalContext";
import userTransactions from "../utils/userTransactions";

const TransactionScreen = () => {
  const [allTransaction, setAllTransaction] = useState([]);
  const [yourTransaction, setYourTransaction] = useState([]);

  const { account } = useContext(GlobalContext);

  useEffect(() => {
    handleUserTransaction();
  }, [account.address]);

  const handleUserTransaction = async () => {
    const data = await userTransactions(
      `https://api-testnet.bscscan.com/api?module=contract&action=getabi&address=0xae13d989dac2f0debff460ac112a837c89baa7cd${process.env.REACT_APP_ETHERSCAN_API}`
    );
    setAllTransaction(data);

    if (!account.address) {
      return;
    }

    const yourTx = await userTransactions(
      `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${account.address.substring(
        2,
        42
      )}&apikey=${process.env.REACT_APP_ETHERSCAN_API}`
    );

    setYourTransaction(yourTx);
  };

  return (
    <div className="flex justify-center items-center lg:items-start flex-col lg:flex-row gap-10">
      {/* Your Transaction */}

      <Transaction account={account} transaction={yourTransaction} />

      {/* Recent Transaction */}

      <Transaction
        account={account}
        transaction={allTransaction}
        text="Recent"
      />
    </div>
  );
};

export default TransactionScreen;
