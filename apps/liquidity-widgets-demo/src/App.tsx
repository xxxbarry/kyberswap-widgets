import {
  PoolType,
  LiquidityWidget,
  ChainId,
  ZapOut,
} from "@kyberswap/liquidity-widgets";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  init,
  useWallets,
  useConnectWallet,
  useSetChain,
} from "@web3-onboard/react";
import { ethers, providers } from "ethers";
import injectedModule from "@web3-onboard/injected-wallets";
import "@kyberswap/liquidity-widgets/dist/style.css";
import "./App.css";

const injected = injectedModule();

init({
  wallets: [injected],
  chains: [
  {
    "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": 5
  },
  {
    "address": "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    "name": "USD Coin",
    "symbol": "USDC",
    "decimals": 6
  },
  {
    "address": "0x9e90296a1343258388a6476db1c12d76dd04504e",
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 18
  },
  {
    "address": "0xb2785e03e542161d3dfa3ce3ddad4a26d892cd6a",
    "name": "ZAP TOKEN",
    "symbol": "ZAP",
    "decimals": 18
  },
  {
    "address": "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    "name": "GMX",
    "symbol": "GMX",
    "decimals": 18
  },
  {
    "address": "0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34",
    "name": "USDe",
    "symbol": "USDe",
    "decimals": 18
  },
  {
    "address": "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    "name": "ChainLink Token",
    "symbol": "LINK",
    "decimals": 18
  },
  {
    "address": "0xb41877593e1eec5a380f8c22d0abfa17b0865527",
    "name": "Arbitrum",
    "symbol": "ARB",
    "decimals": 8
  },
  {
    "address": "0x513c7e3a9c69ca3e22550ef58ac1c0088e918fff",
    "name": "Aave Arbitrum wstETH",
    "symbol": "aArbwstETH",
    "decimals": 18
  },
  {
    "address": "0x5979d7b546e38e414f7e9822514be443a4800529",
    "name": "Wrapped liquid staked Ether 2.0",
    "symbol": "wstETH",
    "decimals": 18
  },
  {
    "address": "0x7e6f08984feac6244aec5dce3bd66387e82b9630",
    "name": "Pendle",
    "symbol": "PENDLE",
    "decimals": 18
  },
  {
    "address": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    "name": "USD₮0",
    "symbol": "USD₮0",
    "decimals": 6
  },
  {
    "address": "0xf31e1ae27e7cd057c1d6795a5a083e0453d39b50",
    "name": "USDC",
    "symbol": "USDC",
    "decimals": 0
  },
  {
    "address": "0xf67ec0a483a1c80eb1e92d58e46f1c10f8383b8d",
    "name": "Ryan",
    "symbol": "RYAN",
    "decimals": 2
  },
  {
    "address": "0x187acd192822aed86d89ad516e4a3c3bb1929574",
    "name": "SushiSwap LP Token",
    "symbol": "SLP",
    "decimals": 18
  },
  {
    "address": "0x912ce59144191c1204e64559fe8253a0e49e6548",
    "name": "Arbitrum",
    "symbol": "ARB",
    "decimals": 18
  },
  {
    "address": "0x7b6c14ccca515d6d1f234054254bdced56ac173e",
    "name": "WBARBITRUM",
    "symbol": "WBARB",
    "decimals": 18
  },
  {
    "address": "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    "name": "Wrapped BTC",
    "symbol": "WBTC",
    "decimals": 8
  },
  {
    "address": "0xf810fc6501a91e3e7ff43f65fd81335238bbbd5e",
    "name": "Ethers",
    "symbol": "ETH",
    "decimals": 18
  },
  {
    "address": "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
    "name": "Wrapped Ether",
    "symbol": "WETH",
    "decimals": 18
  },
  {
    "address": "0x94f1747558e1287a89bf4be3abb6e736d8b5fc38",
    "name": "ETHERFAST",
    "symbol": "ETHERFAST",
    "decimals": 18
  },
  {
    "address": "0x3082cc23568ea640225c2467653db90e9250aaa0",
    "name": "Radiant",
    "symbol": "RDNT",
    "decimals": 18
  },
  {
    "address": "0xba5ddd1f9d7f570dc94a51479a000e3bce967196",
    "name": "Aave Token",
    "symbol": "AAVE",
    "decimals": 18
  },
  {
    "address": "0x7189fb5b6504bbff6a852b13b7b82a3c118fdc27",
    "name": "ether.fi governance token",
    "symbol": "ETHFI",
    "decimals": 18
  },
  {
    "address": "0xaf0807b1bfb6c9a6a000c393fa152322a67bb34b",
    "name": "USDCT",
    "symbol": "USDCT",
    "decimals": 18
  },
  {
    "address": "0xf224dbc383874ecf3d8c1a63736fd914c30448a3",
    "name": "TRUMP",
    "symbol": "gettrumps",
    "decimals": 10
  },
  {
    "address": "0x050d4e9ca843a9640e8f92731833805c650f5e3d",
    "name": "Dai Stablecoin",
    "symbol": "DAI",
    "decimals": 18
  },
  {
    "address": "0x422e3b839e0bcf7c9dbc7df39329e9380096149c",
    "name": "Tether USD",
    "symbol": "USDT",
    "decimals": 18
   },
   {
      "address": "0x14d44f4457de9bd6435b566543d0a58754ba27b3",
      "symbol": "FYDE",
      "name": "FYDE Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x8707cdf0767a4a956d6ebd7728a2ad483b334968",
      "symbol": "PEPE",
      "name": "PEPE Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x422e3b839e0bcf7c9dbc7df39329e9380096149c",
      "symbol": "USDT",
      "name": "Tether",
      "decimals": 6,
      "chainId": 42161
    },
    {
      "address": "0xcbc79972198fd73ddb8fdee6dcdec1e6270be357",
      "symbol": "ETH",
      "name": "Ether",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xf8d72c9cd50607bdd6fbdce53d6929794c99c959",
      "symbol": "eth",
      "name": "Ethereum",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x1db4E24A2747D0E7b209E9BB4EFe0b7d3Df806B0",
      "symbol": "AAVE",
      "name": "Aave Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x7b6bcfbb49199e16b5c2cd9f1b627575e2fadf6f",
      "symbol": "CRV",
      "name": "Curve DAO Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xece654d50a41c1f562e46ecee9334a45a57b918d",
      "symbol": "WBTC",
      "name": "Wrapped Bitcoin",
      "decimals": 8,
      "chainId": 42161
    },
    {
      "address": "0x4dA65b79d0AD30f64e4E06Bc3c7FCa7D263cA8aC",
      "symbol": "TokenV",
      "name": "TokenV",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x10c9cc8aba8c0d9289bee510f3147cc38774b8b0",
      "symbol": "WBTC",
      "name": "Wrapped Bitcoin",
      "decimals": 8,
      "chainId": 42161
    },
    {
      "address": "0xb2785e03e542161d3dfa3ce3ddad4a26d892cd6a",
      "symbol": "ZAP",
      "name": "ZAP Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xb29870524503b0D83AB8c57d79e7849883479346",
      "symbol": "AsoRaD",
      "name": "AsoRaD Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xe3c861bd8b5deb9ec15e74b96b600db119f765a1",
      "symbol": "ZAPUSD",
      "name": "ZAPUSD Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x00699FE7d5b786d42297670C7Ba7F02373B4F0e3",
      "symbol": "$SHARBI",
      "name": "$SHARBI Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xbe3e51fbbcd6e0da945941f4452339bd2f1259e5",
      "symbol": "TokenV",
      "name": "TokenV",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xcceea600520f56982e389e97ac6ac1ffc68c3b9d",
      "symbol": "DAI",
      "name": "Dai Stablecoin",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xcc9841c942ec72e6ac74da8fb2fb45cf3b1a099c",
      "symbol": "USDT",
      "name": "Tether",
      "decimals": 6,
      "chainId": 42161
    },
    {
      "address": "0x2d1352df75836a2681f8be063571c8391c04b0dc",
      "symbol": "ZAP-WETH",
      "name": "ZAP-WETH",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x7243bd9e4ace21dbeb4c11e7916505b89ad6b107",
      "symbol": "ARBWART",
      "name": "ARBWART Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xb41877593e1eec5a380f8c22d0abfa17b0865527",
      "symbol": "ARB",
      "name": "Arbitrum",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xa4cd3c7f8e71115c856dad1dbe042b17722f7807",
      "symbol": "ARB",
      "name": "Arbitrum",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xe4251b067c541f12c5032198884306b66122e44e",
      "symbol": "ARBITRUM",
      "name": "Arbitrum Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x2519f2598897d2a93d0ccf368fa565fd3053de1e",
      "symbol": "GMT",
      "name": "GMT Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0x7b6c14ccca515d6d1f234054254bdced56ac173e",
      "symbol": "WBARB",
      "name": "WBARB Token",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xaed3a2d0aaaaf5e6f54285a004af5036f3fe0eda",
      "symbol": "ODOD_LP",
      "name": "ODOD LP",
      "decimals": 18,
      "chainId": 42161
    },
    {
      "address": "0xaed3a2d0aaaaf5e6f54285a004af5036f3fe0eda",
      "symbol": "WBTC",
      "name": "Wrapped Bitcoin",
      "decimals": 18,
      "chainId": 42161
    },
    { 
      "address": "0xAE63B6DC1E399c7257E7Aa4e20e334CAA3bab6cc",
      "symbol": "ETH",
      "name": "Ether",
      "decimals": 18,
      "chainId": 1
    }
  ]
}

    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: "https://ethereum.kyberengineering.io",
    },
    {
      id: "0x38",
      token: "BNB",
      label: "BSC",
      rpcUrl: "https://bsc.kyberengineering.io",
    },
    {
      id: "0x89",
      token: "POL",
      label: "Polygon",
      rpcUrl: "https://polygon.kyberengineering.io",
    },
    {
      id: "0xc7",
      token: "BTT",
      label: "BTTC",
      rpcUrl: "https://bttc.kyberengineering.io",
    },
    {
      id: "0x2105",
      token: "ETH",
      label: "Base",
      rpcUrl: "https://base.llamarpc.com",
    },

    {
      id: "0xe708",
      token: "ETH",
      label: "Linea",
      rpcUrl: "https://rpc.linea.build",
    },
  ],
});

function App() {
  const [{ wallet }, connect, disconnect] = useConnectWallet();
  const connectedWallets = useWallets();
  const [, setChain] = useSetChain();

  // create an ethers provider
  let ethersProvider: providers.Web3Provider | undefined;

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
  }

  const [params, setParams] = useState<WidgetParams>({
    //chainId: ChainId.Base,
    //poolAddress: "0xf9a72fd5c30112af583b86b190b2d776b6c3c056",
    //poolType: PoolType.DEX_SWAPMODEV3,

    // UNI
    //chainId: ChainId.PolygonPos,
    //positionId: "1708279",
    //poolAddress: "0x45dDa9cb7c25131DF268515131f647d726f50608",
    //poolType: PoolType.DEX_UNISWAPV3,

    //chainId: ChainId.Bsc,
    //positionId: "1404415",
    //poolAddress: "0xBe141893E4c6AD9272e8C04BAB7E6a10604501a5",
    //poolType: PoolType.DEX_PANCAKESWAPV3,

    // chainId: ChainId.Bsc,
    // poolAddress: "0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae",
    // poolType: PoolType.DEX_PANCAKESWAPV2,

    //chainId: ChainId.Base,
    //poolAddress: "0xd0b53d9277642d899df5c87a3966a349a798f224",
    //poolType: PoolType.DEX_UNISWAPV3,
    // positionId: "24654",

    chainId: ChainId.Arbitrum,
    poolAddress: "0xbde832b5e1e7a98e73703a558d751f2846258eae",
    poolType: PoolType.DEX_SWAPMODEV3,
  });
  const [key, setKey] = useState(Date.now());

  const handleUpdateParams = useCallback((params: WidgetParams) => {
    setParams(params);
    setKey(Date.now());
  }, []);

  const handleConnectWallet = () => {
    if (wallet) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("connectedWallets");
      }
      disconnect(wallet);
    } else connect();
  };

  useEffect(() => {
    if (!connectedWallets.length) return;
    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    );
    if (typeof window !== "undefined")
      window.localStorage.setItem(
        "connectedWallets",
        JSON.stringify(connectedWalletsLabelArray)
      );
  }, [connectedWallets, wallet]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem("connectedWallets") || "[]"
    );

    if (previouslyConnectedWallets?.length) {
      const setWalletFromLocalStorage = async () => {
        await connect({
          autoSelect: previouslyConnectedWallets[0],
        });
      };
      setWalletFromLocalStorage();
    }
  }, [connect]);

  const [address, setAddress] = useState<string | undefined>();
  useEffect(() => {
    setAddress(wallet?.accounts?.[0].address);
  }, [wallet?.accounts?.[0].address]);

  const connectedAccount = useMemo(
    () => ({
      address,
      chainId: +(wallet?.chains[0].id || ChainId.Bsc),
    }),
    [address, wallet?.chains[0].id]
  );

  const props = {
    onClose: () => {
      window.location.reload();
    },
    source: "zap-widget-demo",
    chainId: params.chainId,
    poolAddress: params.poolAddress,
    positionId: params.positionId,
    poolType: params.poolType,
    connectedAccount: {
      address,
      chainId: +(wallet?.chains[0].id || params.chainId),
    },
    onSwitchChain: () => {
      setChain({
        chainId: params.chainId.toString(),
      });
    },
    onConnectWallet: () => {
      handleConnectWallet();
    },
    onSubmitTx: async (txData: {
      from: string;
      to: string;
      data: string;
      value: string;
      gasLimit: string;
    }) => {
      const res = await ethersProvider?.getSigner().sendTransaction(txData);
      if (!res) throw new Error("Transaction failed");
      return res.hash;
    },
    //initDepositTokens: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    //initAmounts: "1",
  };

  return (
    <div className="ks-demo-app">
      <div className="ks-demo-header">
        <button className="ks-demo-btn" onClick={handleConnectWallet}>
          {!wallet ? "Connect wallet" : "Disconnect"}
        </button>
        <div>{wallet?.accounts?.[0].address}</div>
      </div>

      <div className="ks-demo-app-wrapper">
        <ZapOut
          poolAddress="0x3ba13e5074292aaba8f56faf65055952ccc20dc6"
          poolType={PoolType.DEX_UNISWAPV3}
          positionId="1716748"
          chainId={ChainId.Base}
          connectedAccount={connectedAccount}
          onClose={() => {
            //
          }}
          onConnectWallet={() => {
            handleConnectWallet();
          }}
          onSwitchChain={() => {
            setChain({
              chainId: params.chainId.toString(),
            });
          }}
          onSubmitTx={async (txData) => {
            const res = await ethersProvider
              ?.getSigner()
              .sendTransaction(txData);
            if (!res) throw new Error("Transaction failed");
            return res.hash;
          }}
          source="zap-out-demo"
        />
      </div>
      <div className="ks-demo-app-wrapper">
        <div className="ks-demo-params-wrapper">
          <Params params={params} setParams={handleUpdateParams} />
        </div>

        <LiquidityWidget key={key} {...props} />
      </div>
    </div>
  );
}

export default App;

type WidgetParams = {
  chainId: number;
  positionId?: string;
  poolAddress: string;
  poolType: PoolType;
  //theme: "light" | "dark";
  //initTickUpper?: string;
  //initTickLower?: string;
};

function Params({
  params,
  setParams,
}: {
  params: WidgetParams;
  setParams: (p: WidgetParams) => void;
}) {
  const [localParams, setLocalParams] = useState(params);

  useEffect(() => {
    setLocalParams(params);
  }, [params]);

  return (
    <>
      <div className="ks-demo-params-container">
        <span>chainId</span>
        <input
          className="ks-demo-input"
          value={String(localParams.chainId)}
          onChange={(e) => {
            setLocalParams((params) => ({
              ...params,
              chainId: Number(e.target.value),
            }));
          }}
        />

        <span>positionId</span>
        <input
          className="ks-demo-input"
          value={localParams.positionId}
          onChange={(e) => {
            setLocalParams((params) => ({
              ...params,
              positionId: e.target.value !== "" ? e.target.value : undefined,
            }));
          }}
        />

        <span>poolAddress</span>
        <input
          className="ks-demo-input"
          value={localParams.poolAddress}
          onChange={(e) => {
            setLocalParams((params) => ({
              ...params,
              poolAddress: e.target.value,
            }));
          }}
        />

        <span>PoolType</span>
        <div className="ks-demo-pool-type-container">
          {Object.keys(PoolType).map((key, index) => (
            <div className="ks-demo-pool-type-item" key={key}>
              <input
                className="ks-demo-input"
                type="radio"
                id={`${index + 1}`}
                name={PoolType[key as keyof typeof PoolType]}
                value={PoolType[key as keyof typeof PoolType]}
                checked={
                  localParams.poolType ===
                  PoolType[key as keyof typeof PoolType]
                }
                onChange={(e) =>
                  setLocalParams({
                    ...localParams,
                    poolType: e.currentTarget.value as PoolType,
                  })
                }
              />
              <label htmlFor={`${index + 1}`}>
                {PoolType[key as keyof typeof PoolType]}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button className="ks-demo-btn" onClick={() => setParams(localParams)}>
        Save and Reload
      </button>
    </>
  );
}

// theme={{
//   text: "#ffffff",
//   subText: "#979797",
//   icons: "#a9a9a9",
//   layer1: "#1C1C1C",
//   dialog: "#1c1c1c",
//   layer2: "#313131",
//   stroke: "#313131",
//   chartRange: "#28e0b9",
//   chartArea: "#047855",
//   accent: "#31cb9e",
//   warning: "#ff9901",
//   error: "#ff537b",
//   success: "#189470",
//   fontFamily: "Work Sans",
//   borderRadius: "20px",
//   buttonRadius: "24px",
//   boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
// }}

{
  /* <div style={{ display: "flex", gap: "60px" }}>
  <span>Theme</span>
  <div>
    <input
      type="radio"
      id="dark"
      name="Dark"
      value="dark"
      checked={localParams.theme === "dark"}
      onChange={(e) =>
        setLocalParams({
          ...localParams,
          theme: e.currentTarget.value as "light" | "dark",
        })
      }
    />
    <label htmlFor="dark">Dark</label>

    <input
      type="radio"
      id="light"
      name="Light"
      value="light"
      checked={localParams.theme === "light"}
      onChange={(e) =>
        setLocalParams({
          ...localParams,
          theme: e.currentTarget.value as "light" | "dark",
        })
      }
    />
    <label htmlFor="light">light</label>
  </div>
</div>; */
}

{
  /* <span>initTickLower</span>
<input
  value={localParams.initTickLower}
  onChange={(e) => {
    setLocalParams((params) => ({
      ...params,
      initTickLower: e.target.value,
    }));
  }}
/>

<span>initTickUpper</span>
<input
  value={localParams.initTickUpper}
  onChange={(e) => {
    setLocalParams((params) => ({
      ...params,
      initTickUpper: e.target.value,
    }));
  }}
/> */
}
