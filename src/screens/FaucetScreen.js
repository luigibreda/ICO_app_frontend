import React from "react";

const FaucetScreen = () => {
  return (
    <div align="center" >
    <body>
    ...
    <div>
        <iframe
            id="orion-widget"
            title="orion-widget"
            height="389px"
            width="314px"
            scrolling="no"
            allow="clipboard-write"
            partner-id="97"
            src="https://trade.orionprotocol.io/widget?partnerId=97&defaultTheme=dark"
        ></iframe>
    </div>
    ...
</body>
</div>
  );
};

export default FaucetScreen;


<body>
  ...
  <div>
    <iframe
      id="orion-widget"
      title="orion-widget"
      height="389px"
      width="314px"
      scrolling="no"
      allow="clipboard-write"
      partner-id="YourPartnerID"
      src="https://trade.orionprotocol.io/widget/?partnerId=YourPartnerID"
    ></iframe>
  </div>
  ...
</body>