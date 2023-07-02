import { Config } from "../types";

export const config: Config = {
    TRADING_COMP: {
        apiBaseUrl: "https://api.nftperp.xyz",
        apiWsUrl: "https://api.nftperp.xyz",
        chainId: 42161,
        ch: "0x1BBd56e80284B7064B44b2f4Bc494A268E614D36",
        chv: "0x50116ee8bC6C75d917E047fAa959398c78119813",
        iF: "0x745a2743a5CB63362a1f614C719ff982FB337f25",
        weth: "0x6cfbBAdC695fA71909F0191Ee5d6eeb259daF1eE",
        amms: {
            BAYC: "0xE3D424A05dD45721B9206E32E69028E378D38f9F",
            MILADY: "0x246A801C1905a8E0FcE3AaB6561966c8BfC3D7bf",
            PUNKS: "0xEe4826F21D47A6DEF4c3BaA6633bcec24D7A2375",
            AZUKI: "0x70A1Bee795A05F78a7185545c7e6A93D02442F5C",
            MAYC: "0xB92c47eBc522cae7edC911e3D62691420FE1E90a",
            DOODLES: "0xaC2Eadb88D9E4eEF34452943330f93E9A81De72d",
            MOONBIRDS: "0xB25E0D85Df2CAD9D8d3e9B033729634ECd737BF8",
            BGAN: "0x92B96d53cead8F3E13BCEe03F1d9691A50194D1a",
            GOBBLERS: "0xE56472DDCC9100d933a3D9e1b59c1C63F9f83DD2",
        },
    },
    BETA: {
        apiBaseUrl: "https://api-v2.nftperp.xyz",
        apiWsUrl: "wss://api3.nftperp.xyz",
        chainId: 42161,
        ch: "0x6fc05B7DFe545cd488E9D47d56CFaCA88F69A2e1",
        chv: "0x616260F052A324F6134889cB291C787f99b59734",
        iF: "0x035E4480437002A30b61Df6788DFb6199c2C5210",
        weth: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
        amms: {
            BAYC: "0x604Ed62F5991d6a2C47b13B9E5d34cC1C5048e99",
            PUNKS: "0xB504aC5a974c0856732E6DB14589A0A7CC2199e8",
            AZUKI: "0xaf588bca9175cC4d6e981Ade462f0Af40331cb2e",
            MILADY: "0x28d45Df0D075f229aDcbAfF59Bf90d39e80D875E",
            MAYC: "0x6BcCA37F6DEAcB3cfCA095f08F6d72C65D01992B",
            PPG: "0xaD7d8b1BEAF28225bBDD7F76D2604decFD0B6013",
            REMIO: "0x8215797e793b39fd2E8d1e9760c39a7Bea16ad55",
        },
    },
};
