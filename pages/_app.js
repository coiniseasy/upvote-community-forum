
import '@/styles/globals.css'
import { Orbis, OrbisProvider } from "@orbisclub/components";
import "@orbisclub/components/dist/index.modern.css";
import React, { useEffect, useState } from 'react';
import { GlobalContext } from "../contexts/GlobalContext";

/**
 * Set the global forum context here (you can create categories using the dashboard by clicking on "Create a sub-context"
 * from your main forum context)
 */
global.orbis_context = "kjzl6cwe1jw1495msth5lqkr4aq9h4t9239ds8s40enjhyk9udx7zdxf0tdjo4g";

/**
 * Set the global chat context here (the chat displayed when users click on the "Community Chat" button).
 * The Community Chat button will be displayed only if this variable is set
 */
global.orbis_chat_context = "kjzl6cwe1jw1495msth5lqkr4aq9h4t9239ds8s40enjhyk9udx7zdxf0tdjo4g";

let orbis = new Orbis({
  useLit: false,
  node: "https://node2.orbis.club",
  PINATA_GATEWAY: 'https://orbis.mypinata.cloud/ipfs/',
  PINATA_API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY,
  PINATA_SECRET_API_KEY: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY
});

export default function App({ Component, pageProps }) {
  return(
    <OrbisProvider defaultOrbis={orbis}>
      <GlobalContext.Provider>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </OrbisProvider>
  )
}
