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
      `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x82337DC0582661F53cC795ad7f96eae46c7f5efc&startblock=1&endblock=99999999&sort=asc&apikey=${process.env.REACT_APP_ETHERSCAN_API}`
    );
    setAllTransaction(data);

    if (!account.address) {
      return;
    }

    const yourTx = await userTransactions(
      `linkvai aqui${account.address.substring(
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
