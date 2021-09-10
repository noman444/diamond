const APP = {
    //el: '#app',
    data() {
        return {
            jQuery: window.jQuery,
            windowWidth: window.innerWidth,
            selectedSection: 0,
            sortBy: 'default',
            sections: [{
                    title: 'Overview',
                    href: '#overview',
                    class: 'lnk overview'
                },
                {
                    title: 'Swap',
                    href: '#',
                    class: 'lnk swap'
                },
                {
                    title: 'Farm',
                    href: '#farm',
                    class: 'lnk farm'
                },
                {
                    title: 'Pool',
                    href: '#pool',
                    class: 'lnk wpool',
                },
                {
                    title: 'DIAM',
                    href: '#Diam',
                    class: 'lnk Diam'
                },
                {
                    title: 'Locked Staking',
                    href: '#locked-staking',
                    class: 'lnk locked-staking'
                },
                {
                    title: 'Vaults',
                    href: '#vaults',
                    class: 'lnk vaults'
                },
            ],
            Web3Modal: null,
            WalletConnectProvider: null,
            web3: null,
            web3Modal: null,
            provider: null,
            selectedAccount: null,
            walletButton: {
                text: 'Connect Wallet'
            },
            /* STABLECOIN */
            DiamPrice: 0,
            isScMint: true,
            usdtTokenAddress: '0x55d398326f99059ff775485246999027b3197955',
            usdtTokenContract: null,
            usdtTokenBalance: 0,
            isUsdtApproved: false,
            DiamTokenAddress: '0x3fF997eAeA488A082fb7Efc8e6B9951990D0c3aB',
            DiamTokenContract: null,
            DiamTokenBalance: 0,
            isDiamApproved: false,
            isDiamClaimable: false,
            DiamClaimAmount: 0,
            isUsdtClaimable: false,
            usdtClaimAmount: 0,
            DiamMasterAddress: '0x3D254b0efA0CdFf966e2A5600D3e6EB3450981b1',
            DiamMasterContract: null,
            usdtInputAmount: '0.00',
            DiamInputAmount: '0.00',
            DiamDIAMPermille: 0,
            DiamRedeemPermille: 0,
            DiamMintPermille: 0,
            DiamMaxStakeAmount: 0,
            DiamMaxRedeemAmount: 0,
            DiamDIAMBalance: 0,
            DiamTotalSupply: 0,
            /* TOKEN */
            diamTokenAddress: '0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
            diamLpAddress: '0x1f280a4fa78f5805bac193dddafeb77b16da4614',
            diamTokenContract: null,
            diamLpContract: null,
            diamPrice: 0,
            diamLpPrice: 0,
            diamMarketCap: 0,
            diamCirculation: 0,
            diamBalance: 0,
            diamTotalValueLocked: 0,
            totalTotalValueLocked: 0,
            lmTotalRewards: 0,
            /* TOKEN2 */
            DiAMCirculation: 0,
            DiAMBurned: 0,
            DiAMPrice: 0,
            DiAMLpPrice: 0,
            DiAMBalance: 0,
            DiAMTokenAddress: '0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
            DiAMTokenContract: null,
            DiAMSwapAddress: '0x7F8218317Dbce673e633BF4deE162766d3563d4C',
            DiAMSwapContract: null,
            DiAMSwapAmount: '0.00',
            DiAMSwapApproved: false,
            DiAMBalance: 0,
            DiAMStakeTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            DiAMStakeAddress: '0x06747f6501611baE9dD054cCC37ad076e9Ea2465',
            DiAMStakeContract: null,
            DiAMStakeTotalRewards: 0,
            DiAMStakeLockedAmount: 0,
            DiAMStakeTotalValueLocked: 0,
            DiAMStakeApy: 0,
            DiAMStakeAmount: 0,
            DiAMStakePendingRewards: 0,
            DiAMStakeDepositAmount: 0,
            DiAMStakeWithdrawAmount: 0,
            DiAMStakeApproved: false,
            /* TOKEN3 */
            DIAMCirculation: 0,
            DIAMBurned: 0,
            DIAMAddress: '0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90',
            DIAMContract: null,
            DIAMBalance: '0.00',
            DIAMPrice: '0.00',
            DIAMLpPrice: '0.00',
            wswapVolume: 0,
            DIAMStakeTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            DIAMStakeAddress: '0xF4E0943C1D55e883E3C6310CD641970A36a7f870',
            DIAMStakeContract: null,
            DIAMStakeTotalRewards: 0,
            DIAMStakeLockedAmount: 0,
            DIAMStakeTotalValueLocked: 0,
            DIAMStakeApy: 0,
            DIAMStakeAmount: 0,
            DIAMStakePendingRewards: 0,
            DIAMStakeDepositAmount: 0,
            DIAMStakeWithdrawAmount: 0,
            DIAMStakeApproved: false,
            /* LM2 */
            lpBalance: 0,
            lm2TimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            lm2Address: '0xaBA8E6E7bC56973b723b7B2B14Ec11d64A7c3E92',
            lm2Contract: null,
            lm2TotalRewards: 0,
            lm2LockedAmount: 0,
            lm2TotalValueLocked: 0,
            lm2Apy: 0,
            lm2Amount: 0,
            lm2PendingRewards: 0,
            lm2DepositAmount: 0,
            lm2WithdrawAmount: 0,
            lm2Approved: false,
            /* EULER */
            eulerPrice: 0,
            eulerLpPrice: 0,
            eulerLpAddress: '0xd4B293586cb74770749Aea799e277241B339C62C',
            eulerLpContract: null,
            eulerLpBalance: 0,
            eulerLmAddress: '0x5A1f3BeE1b7B369Efd99B896101917a9d9BaDf6D',
            eulerLmContract: null,
            eulerLmTotalRewards: 0,
            eulerLmLockedAmount: 0,
            eulerLmTotalValueLocked: 0,
            eulerLmApy: 0,
            eulerLmAmount: 0,
            eulerLmPendingRewards: 0,
            eulerLmDepositAmount: 0,
            eulerLmWithdrawAmount: 0,
            eulerLmApproved: false,
            /* EULER STAKING */
            eulerStakingTimeAvailable: new Date().getTime() / 1000 + Number(2592000),
            eulerTokenAddress: '0x3920123482070c1a2dff73aad695c60e7c6f6862',
            eulerTokenContract: null,
            eulerTokenBalance: 0,
            eulerStakingAddress: '0x38Ab2128327107D075a13E6Ed66Bd6184E4Cc20c',
            eulerStakingContract: null,
            eulerStakingLockedAmount: 0,
            eulerStakingTotalValueLocked: 0,
            eulerStakingApy: 0,
            eulerStakingAmount: 0,
            eulerStakingPendingRewards: 0,
            eulerStakingDepositAmount: 0,
            eulerStakingWithdrawAmount: 0,
            eulerStakingApproved: false,
            /* FARM */
            farmAddress: '0x22fB2663C7ca71Adc2cc99481C77Aaf21E152e2D',
            farmContract: null,
            farms: [{
                    currency: 'DIAM',
                    earned: 'DIAM',
                    title: 'DIAM',
                    style: 'background-image: url(\'assets/images/farms/DIAM.png\')',
                    orderId: 0,
                    isBoosted: true,
                }, {
                    currency: 'DIAM-BNB',
                    earned: 'DIAM',
                    title: 'DIAM-BNB',
                    style: 'background-image: url(\'assets/images/farms/DIAM-bnb.png\')',
                    orderId: 2,
                }, {
                    currency: 'DIAM-BNB',
                    earned: 'DIAM',
                    title: 'DIAM-BNB',
                    style: 'background-image: url(\'assets/images/farms/DIAM-bnb.png\')',
                    orderId: 3,
                }, {
                    currency: 'DIAM-USDT',
                    earned: 'DIAM',
                    title: 'DIAM-USDT',
                    style: 'background-image: url(\'assets/images/farms/DIAM-usdt2.png\')',
                    orderId: 4,
                }, {
                    currency: 'DiAM-BNB',
                    earned: 'DIAM',
                    title: 'WAULT<small>x</small>-BNB',
                    style: 'background-image: url(\'assets/images/farms/wault-bnb.png\')',
                    orderId: 5,
                }, {
                    currency: 'DiAM-BNB',
                    earned: 'DIAM',
                    title: 'WAULT<small>x</small>-BNB',
                    style: 'background-image: url(\'assets/images/farms/wault-bnb.png\')',
                    orderId: 6,
                }, {
                    i: 7,
                    apy: 0,
                    feeApr: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'EULER-BNB',
                    earned: 'EULER',
                    title: 'EULER-BNB',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/farms/EULER-logo.png\')',
                    orderId: -1,
                }, {
                    currency: 'MATIC-USDT',
                    earned: 'DIAM',
                    title: 'MATIC-USDT',
                    style: 'background-image: url(\'assets/images/farms/matic-usdt2.png\')',
                    orderId: 10,
                }, {
                    currency: 'EULER-BNB',
                    earned: 'DIAM',
                    title: 'EULER-BNB',
                    style: 'background-image: url(\'assets/images/farms/EULER-logo.png\')',
                    orderId: 14,
                }, {
                    currency: 'ELE-BNB',
                    earned: 'DIAM',
                    title: 'ELE-BNB',
                    style: 'background-image: url(\'assets/images/farms/ele-bnb.png\')',
                    orderId: 12,
                }, {
                    currency: 'ORAI-BNB',
                    earned: 'DIAM',
                    title: 'ORAI-BNB',
                    style: 'background-image: url(\'assets/images/farms/orai-bnb.png\')',
                    orderId: 16,
                }, {
                    currency: 'TWIN-BNB',
                    earned: 'DIAM',
                    title: 'TWIN-BNB',
                    style: 'background-image: url(\'assets/images/farms/twin-bnb2.png\')',
                    orderId: 17,
                }, {
                    currency: 'AUTO-BNB',
                    earned: 'DIAM',
                    title: 'AUTO-BNB',
                    style: 'background-image: url(\'assets/images/farms/auto-bnb.png\')',
                    orderId: 11,
                }, {
                    currency: 'HFS-BUSD',
                    earned: 'DIAM',
                    title: 'HFS-BUSD',
                    style: 'background-image: url(\'assets/images/farms/hfs-busd.png\')',
                    orderId: 18,
                }, {
                    currency: 'WOOP-BNB',
                    earned: 'DIAM',
                    title: 'WOOP-BNB',
                    style: 'background-image: url(\'assets/images/farms/woop-bnb.png\')',
                    orderId: 15,
                }, {
                    currency: 'ALPACA-BNB',
                    earned: 'DIAM',
                    title: 'ALPACA-BNB',
                    style: 'background-image: url(\'assets/images/farms/alpaca-bnb.png\')',
                    orderId: 8,
                }, {
                    currency: 'ALPACA-USDT',
                    earned: 'DIAM',
                    title: 'ALPACA-USDT',
                    style: 'background-image: url(\'assets/images/farms/alpaca-usdt.png\')',
                    orderId: 9,
                }, {
                    currency: 'SWIRL-BNB',
                    earned: 'DIAM',
                    title: 'SWIRL-BNB',
                    style: 'background-image: url(\'assets/images/farms/swirl-bnb.png\')',
                    orderId: 13,
                }, {
                    currency: 'BNB-BUSD',
                    earned: 'DIAM',
                    title: 'BNB-BUSD',
                    style: 'background-image: url(\'assets/images/farms/bnb-busd3.png\')',
                    orderId: 7,
                }, {
                    currency: 'USDT-BUSD',
                    earned: 'DIAM',
                    title: 'USDT-BUSD',
                    style: 'background-image: url(\'assets/images/farms/usdt-busd.png\')',
                    orderId: 19,
                }, {
                    currency: 'DAI-BUSD',
                    earned: 'DIAM',
                    title: 'DAI-BUSD',
                    style: 'background-image: url(\'assets/images/farms/dai-busd.png\')',
                    orderId: 20,
                }, {
                    currency: 'USDT-BNB',
                    earned: 'DIAM',
                    title: 'USDT-BNB',
                    style: 'background-image: url(\'assets/images/farms/usdt-bnb.png\')',
                    orderId: 21,
                }, {
                    currency: 'USDC-BNB',
                    earned: 'DIAM',
                    title: 'USDC-BNB',
                    style: 'background-image: url(\'assets/images/farms/usdc-bnb.png\')',
                    orderId: 22,
                }, {
                    currency: 'CAKE-BNB',
                    earned: 'DIAM',
                    title: 'Cake-BNB',
                    style: 'background-image: url(\'assets/images/farms/cake-bnb.png\')',
                    orderId: 23,
                }, {
                    currency: 'BTCB-BUSD',
                    earned: 'DIAM',
                    title: 'BTCB-BUSD',
                    style: 'background-image: url(\'assets/images/farms/btcb-busd.png\')',
                    orderId: 7.1,
                }, {
                    currency: 'BTCB-BNB',
                    earned: 'DIAM',
                    title: 'BTCB-BNB',
                    style: 'background-image: url(\'assets/images/farms/btcb-bnb.png\')',
                    orderId: 7.2,
                }, {
                    currency: 'ETH-BTCB',
                    earned: 'DIAM',
                    title: 'ETH-BTCB',
                    style: 'background-image: url(\'assets/images/farms/btc-eth.png\')',
                    orderId: 26,
                }, {
                    currency: 'ETH-BNB',
                    earned: 'DIAM',
                    title: 'ETH-BNB',
                    style: 'background-image: url(\'assets/images/farms/eth-bnb.png\')',
                    orderId: 27,
                }, {
                    currency: 'ETH-BUSD',
                    earned: 'DIAM',
                    title: 'ETH-BUSD',
                    style: 'background-image: url(\'assets/images/farms/eth-busd.png\')',
                    orderId: 28,
                }, {
                    currency: 'VAI-BNB',
                    earned: 'DIAM',
                    title: 'VAI-BNB',
                    style: 'background-image: url(\'assets/images/farms/vai-bnb.png\')',
                    orderId: 29,
                }, {
                    currency: 'DOT-BNB',
                    earned: 'DIAM',
                    title: 'DOT-BNB',
                    style: 'background-image: url(\'assets/images/farms/dot-bnb.png\')',
                    orderId: 30,
                }, {
                    currency: 'XVS-BUSD',
                    earned: 'DIAM',
                    title: 'XVS-BUSD',
                    style: 'background-image: url(\'assets/images/farms/xvs-busd.png\')',
                    orderId: 31,
                }, {
                    currency: 'LINK-BNB',
                    earned: 'DIAM',
                    title: 'LINK-BNB',
                    style: 'background-image: url(\'assets/images/farms/link-bnb.png\')',
                    orderId: 32,
                }, {
                    currency: 'LTC-BUSD',
                    earned: 'DIAM',
                    title: 'LTC-BUSD',
                    style: 'background-image: url(\'assets/images/farms/ltc-busd.png\')',
                    orderId: 33,
                }, {
                    currency: 'XRP-BUSD',
                    earned: 'DIAM',
                    title: 'XRP-BUSD',
                    style: 'background-image: url(\'assets/images/farms/xrp-busd.png\')',
                    orderId: 34,
                }, {
                    currency: 'ADA-BUSD',
                    earned: 'DIAM',
                    title: 'ADA-BUSD',
                    style: 'background-image: url(\'assets/images/farms/ada-busd.png\')',
                    orderId: 35,
                }, {
                    currency: 'DOGE-BNB',
                    earned: 'DIAM',
                    title: 'DOGE-BNB',
                    style: 'background-image: url(\'assets/images/farms/doge-bnb.png\')',
                    orderId: 36,
                }, {
                    currency: 'BMXX-BNB',
                    earned: 'DIAM',
                    title: 'BMXX-BNB',
                    style: 'background-image: url(\'assets/images/farms/bmxx-bnb.png\')',
                    orderId: 7.3,
                },
                {
                    currency: 'BEL-BNB',
                    earned: 'DIAM',
                    title: 'BEL-BNB',
                    style: 'background-image: url(\'assets/images/farms/bel-bnb.png\')',
                    orderId: 7.4,
                },
                {
                    currency: 'IVN-BNB',
                    earned: 'DIAM',
                    title: 'IVN-BNB',
                    style: 'background-image: url(\'assets/images/farms/ivn-bnb.png\')',
                    orderId: 7.29,
                },
                {
                    currency: 'BTCB-USDT',
                    earned: 'DIAM',
                    title: 'BTCB-USDT',
                    style: 'background-image: url(\'assets/images/farms/btcb-usdt.png\')',
                    orderId: 7.288,
                },
                {
                    currency: 'BETH-ETH',
                    earned: 'DIAM',
                    title: 'BETH-ETH',
                    orderId: 7.289,
                },
                {
                    currency: 'BORING-BNB',
                    earned: 'DIAM',
                    title: 'BORING-BNB',
                    style: 'background-image: url(\'assets/images/farms/bor-bnb.png\')',
                    orderId: 7.2892,
                },
                {
                    currency: 'ETH-USDT',
                    earned: 'DIAM',
                    title: 'ETH-USDT',
                    style: 'background-image: url(\'assets/images/farms/eth-usdt.png\')',
                    orderId: 7.2891
                },
                {
                    currency: 'pCWS-BNB',
                    earned: 'DIAM',
                    title: '<small>p</small>CWS-BNB',
                    style: 'background-image: url(\'assets/images/farms/pcws-bnb.png\')',
                    orderId: 7.28919
                },
                {
                    currency: 'WATCH-BNB',
                    earned: 'DIAM',
                    title: 'WATCH-BNB',
                    style: 'background-image: url(\'assets/images/farms/watch-bnb.png\')',
                    orderId: 7.28918
                },
                {
                    currency: 'BYG-BNB',
                    earned: 'DIAM',
                    title: 'BYG-BNB',
                    style: 'background-image: url(\'assets/images/farms/byg-bnb.png\')',
                    orderId: 7.00009
                },
                {
                    currency: 'KRW-BNB',
                    earned: 'DIAM',
                    title: 'KRW-BNB',
                    style: 'background-image: url(\'assets/images/farms/krw-bnb.png\')',
                    orderId: 7.00008
                },
                {
                    currency: 'DIAM-BTCB',
                    earned: 'DIAM',
                    title: 'DIAM-BTCB',
                    style: 'background-image: url(\'assets/images/farms/DIAM-btc.png\')',
                    orderId: 4.1,
                },
                {
                    currency: 'PERA-DIAM',
                    earned: 'DIAM',
                    title: 'PERA-DIAM',
                    style: 'background-image: url(\'assets/images/farms/pera-DIAM.png\')',
                    orderId: 7.00007,
                },
                {
                    currency: 'PIRATE-BNB',
                    earned: 'DIAM',
                    title: 'PIRATE-BNB',
                    style: 'background-image: url(\'assets/images/farms/pirate-bnb.png\')',
                    orderId: 7.00006,
                },
                {
                    currency: 'LORY-BNB',
                    earned: 'DIAM',
                    title: 'LORY-BNB',
                    style: 'background-image: url(\'assets/images/farms/lory-bnb.png\')',
                    orderId: 7.00005,
                },
                {
                    currency: 'JAWS-BNB',
                    earned: 'DIAM',
                    title: 'JAWS-BNB',
                    style: 'background-image: url(\'assets/images/farms/jaws-bnb.png\')',
                    orderId: 7.00004,
                },
                {
                    currency: 'VITE-BTCB',
                    earned: 'DIAM',
                    title: 'VITE-BTCB',
                    style: 'background-image: url(\'assets/images/farms/vite-btcb.png\')',
                    orderId: 7.00003,
                },
                {
                    currency: 'TUSD-USDT',
                    earned: 'DIAM',
                    title: 'TUSD-USDT',
                    style: 'background-image: url(\'assets/images/farms/tusd-usdt.png\')',
                    orderId: 7.00002,
                },
                {
                    currency: 'ONT-BNB',
                    earned: 'DIAM',
                    title: 'ONT-BNB',
                    style: 'background-image: url(\'assets/images/farms/ont-bnb.png\')',
                    orderId: 7.00001,
                },
                {
                    currency: 'DEP-BNB',
                    earned: 'DIAM',
                    title: 'DEP-BNB',
                    style: 'background-image: url(\'assets/images/farms/dep-bnb.png\')',
                    orderId: 7.000009,
                },
                {
                    currency: 'Diam-BUSD',
                    earned: 'DIAM',
                    title: 'Diam-BUSD',
                    style: 'background-image: url(\'assets/images/farms/Diam-busd.png\')',
                    orderId: 1.1,
                    isBoosted: true,
                },
                {
                    currency: 'PLAY-Diam',
                    earned: 'DIAM',
                    title: 'PLAY-Diam',
                    style: 'background-image: url(\'assets/images/farms/play-Diam.png\')',
                    orderId: 7.000008,
                },
                {
                    currency: 'WIZARD-Diam',
                    earned: 'DIAM',
                    title: 'WIZARD-Diam',
                    orderId: 7.000007,
                },
                {
                    currency: 'REI-Diam',
                    earned: 'DIAM',
                    title: 'REI-Diam',
                    style: 'background-image: url(\'assets/images/farms/rei-Diam.png\')',
                    orderId: 7.000006,
                },
                {
                    currency: 'DIAM-Diam',
                    earned: 'DIAM',
                    title: 'DIAM-Diam',
                    orderId: 1.2,
                    isNew: true,
                },
                {
                    currency: 'ZIG-Diam',
                    earned: 'DIAM',
                    title: 'ZIG-Diam',
                    style: 'background-image: url(\'assets/images/farms/zig-Diam.png\')',
                    orderId: 7.000005,
                    isNew: true,
                },
                {
                    currency: 'BLS-Diam',
                    earned: 'DIAM',
                    title: 'BLS-Diam',
                    orderId: 7.000004,
                    isNew: true,
                },
            ],
            farmsStakedOnly: false,
            farmsShowEnded: false,
            farmsSearch: '',
            /* WPOOLs */
            wpools: [{
                    currency: 'DIAM',
                    earned: 'ELE',
                    title: 'EARN ELE',
                    style: 'background-image: url(\'assets/images/wpools/ele.svg\')',
                    endString: '',
                    informationText: 'Eleven Finance<br>Building a high APY vault ecosystem.<br><br><a href="https://eleven.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/elevenfinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'ORAI',
                    title: 'EARN ORAI',
                    style: 'background-image: url(\'assets/images/wpools/orai.png\')',
                    endString: '',
                    informationText: 'Oraichain Pte. Ltd.<br>The World\'s First AI Oracle for Blockchains.<br><br><a href="https://orai.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/oraichain" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'TWIN',
                    title: 'EARN TWIN',
                    style: 'background-image: url(\'assets/images/wpools/twin.png\')',
                    endString: '',
                    informationText: 'TWINCI<br>The first NFTs Social-Marketplace<br><br><a href="https://twinci.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/twinciio" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'HFS',
                    title: 'EARN HFS',
                    style: 'background-image: url(\'assets/images/wpools/hfs3.png\')',
                    endString: '',
                    informationText: 'Holder Finance<br>A highly scarce, community centric value retention token that resides on the crosschain DeFi network.<br><br><a href="https://www.holder.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/HolderFinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'WOOP',
                    title: 'EARN WOOP',
                    style: 'background-image: url(\'assets/images/wpools/woop.png\')',
                    endString: '',
                    informationText: 'Woonkly Power<br>Woonkly is a DEFI protocol enabling a Decentralized Social Network<br>in which the capital invested in post-advertising by advertisers<br>is shared with the people who interact with that content (Post, Photo, Video, Podcast).<br><br><a href="https://welcome.woonkly.com/en/" target="_blank">Go to website</a><br><a href="https://twitter.com/woonklyEN" target="_blank">Twitter</a>',
                    isFinished: true,
                },
                {
                    currency: 'DIAM',
                    earned: 'BMXX',
                    title: 'EARN BMXX',
                    style: 'background-image: url(\'assets/images/wpools/bmxx.png\')',
                    endString: '',
                    informationText: 'Multiplier Finance<br>Multiplier Finance is an algorithmic money market system<br>designed to bring secure and unique lending and borrowing opportunities<br>like flash loans onto the Binance Smart Chain.<br>The protocol designs are architected and forked based on Aave<br>with revenue-sharing components for liquidity providers and token holders<br>that govern the protocol.<br><br><a href="https://multiplier.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/MultiplierMXX" target="_blank">Twitter</a>',
                    isFinished: true,
                },
                {
                    currency: 'DIAM',
                    earned: 'BEL',
                    title: 'EARN BEL',
                    style: 'background-image: url(\'assets/images/wpools/bel2.png\')',
                    endString: '',
                    informationText: 'Bella Protocol<br>Bella is a suite of open finance products,<br>including automated yield farming tools, BEL Locker, and Flex Savings.<br>They believe everyone deserves equal access to premium financial products<br>and services with elegant design and a smooth user experience.<br>Bella Protocol is backed by Binance Labs and Arrington Capital as lead investors.<br>Other investors include Alphabit, AlphaCoin Fund, Koi Ventures,<br>Ledger Capital, Tensor, N7 labs, Quest Capital, HBTC Labs, and more.<br>Bella brings your familiar mobile banking into crypto with just one click.<br>With Bella, you can just simply sit back, watch your asset grow,<br>and leave all the heavy-lifting to secure, automated smart contracts.<br><br><a href="https://bella.fi" target="_blank">Go to website</a><br><a href="https://twitter.com/BellaProtocol" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'BORING',
                    title: 'EARN BORING',
                    style: 'background-image: url(\'assets/images/wpools/boring.png\')',
                    endString: '',
                    informationText: 'BoringDAO<br>BoringDAO aims to build a series of decentralized bridges & tunnels,<br>which allow you to safely move Bitcoin & other crypto assets between<br> Ethereum, BSC, Polygon & different blockchains to<br> maximize utilization rate of crypto assets in DeFi world.<br><br><a href="https://www.boringdao.com/" target="_blank">Go to website</a><br><a href="https://twitter.com/TheBoringDAO" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'pCWS',
                    title: 'EARN <small>p</small>CWS',
                    style: 'background-image: url(\'assets/images/wpools/pcws.png\')',
                    endString: '',
                    informationText: 'Seascape Network<br>Seascape Network is a gaming ecosystem platform built on Ethereum, BSC and Polkadot.<br>It is designed for the DeFi and NFT economies. With a focus on usability and quality,<br>the aim is to create an environment that will allow users,<br>developers and stakeholders to play, earn and share experiences in an incentivized way.<br><br><a href="http://www.seascape.network/" target="_blank">Go to website</a><br><a href="https://twitter.com/seascapenetwork" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'WATCH',
                    title: 'EARN WATCH',
                    style: 'background-image: url(\'assets/images/wpools/watch.png\')',
                    endString: '',
                    informationText: 'Yieldwatch<br>yieldwatch.net is a smart DeFi dashboard that lets you monitor<br>your liquidity pools, yield farming, and token staking<br>performance with a casual and sleek UI, that is optimized for mobile use.<br>With yieldwatch.net you get all the relevant information at one glance.<br>No more browsing different websites and using complicated<br>IL-loss calculators. We are the first on Binance Smart Chain that show you the deposit,<br>pending yield, fees generated and gives you an overview<br>of the potential impermanent loss that you are facing.<br><br><a href="https://www.yieldwatch.net/" target="_blank">Go to website</a><br><a href="https://twitter.com/yieldwatch" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'BYG',
                    title: 'EARN BYG',
                    style: 'background-image: url(\'assets/images/wpools/byg.png\')',
                    endString: '',
                    informationText: 'Black Eye Galaxy<br>Black eye galaxy token (BYG) is a decentralized cross chain NFT token for virtual world.<br><br><a href="https://www.blackeyegalaxy.space/" target="_blank">Go to website</a><br><a href="https://twitter.com/blackeyegalaxy_" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'KRW',
                    title: 'EARN KRW',
                    style: 'background-image: url(\'assets/images/wpools/krw.png\')',
                    endString: '',
                    informationText: 'KingDeFi<br>KingDeFi is a DeFi project combining three main areas: earning,<br>monitoring and tracking. The earning part offers its users a<br>large variety of farming options on BSC and Solana. Monitoring<br>provides an overall market overview combined with search<br>engine analytics and on-chain metrics. Portfolio tracking<br>allows users to access their investments and analyse their<br>portfolio performance, monitor impermanent loss, yields and<br>deposits and all relevant information in one dashboard.<br><br><a href="https://kingdefi.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/KingDefi2" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'PERA',
                    title: 'EARN PERA',
                    style: 'background-image: url(\'assets/images/wpools/pera.png\')',
                    endString: '',
                    informationText: 'Pera Finance<br>Pera Finance is a decentralized trading competition platform<br>with multi-layered yield farming opportunities.<br>Traders, liquidity providers and holders yield farm together<br>through the DeFi\'s first decentralized trading competition.<br>We are here to close one of the most important shortcomings<br>of DeFi compared to CeFi and that is "trader incentives."<br>Pera Finance will lay the foundation of DeFi 2.0 by integrating<br>the world’s first decentralized trading competition<br>as "trade farming" feature into DeFi.<br><br><a href="https://pera.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/perafinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'WSG',
                    title: 'EARN WSG',
                    style: 'background-image: url(\'assets/images/wpools/wsg.png\')',
                    endString: '',
                    informationText: 'Wall Street Games<br>Wall Street Games is a next generation hybrid blockchain-based<br>online gaming platform, where players battle each other in<br>fun & addicting simple games for rewards in cryptocurrencies!<br><br><a href="https://wsg.gg/" target="_blank">Go to website</a><br><a href="https://twitter.com/WSGToken" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'LORY',
                    title: 'EARN LORY',
                    style: 'background-image: url(\'assets/images/wpools/lory.png\')',
                    endString: '',
                    informationText: 'Yield Parrot<br>Yield Parrot is a state-of-the-art yield aggregator & optimizer<br>built in Binance Smart Chain. At yieldparrot.finance users can<br>find the best opportunities within the DeFi ecosystem, with a<br>world-class vault offering, fully optimized smart contracts,<br>and a renowned partnership plan.<br><br><a href="https://yieldparrot.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/yield_parrot" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'JAWS',
                    title: 'EARN JAWS',
                    style: 'background-image: url(\'assets/images/wpools/jaws.png\')',
                    endString: '',
                    informationText: 'Autoshark<br>AutoShark is a yield optimizer for Automatic Liquidity<br>Acquisition Farms & AMMs on the Binance Smart Chain. It is<br>currently vaulting for Wault Finance, PancakeSwap<br>and PantherSwap farms.<br><br><a href="https://autoshark.finance/" target="_blank">Go to website</a><br><a href="https://twitter.com/AutoSharkFin" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'ALPACA',
                    title: 'EARN ALPACA',
                    style: 'background-image: url(\'assets/images/wpools/alpaca.png\')',
                    endString: '',
                    informationText: 'Alpaca Finance<br>Alpaca Finance is the largest lending protocol allowing<br>leveraged yield farming on Binance Smart Chain. It helps<br>lenders earn safe and stable yields, and offers borrowers<br>undercollateralized loans for leveraged yield farming positions,<br>vastly multiplying their farming principals and resulting profits.<br><br><a href="https://www.alpacafinance.org/" target="_blank">Go to website</a><br><a href="https://twitter.com/AlpacaFinance" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'VITE',
                    title: 'EARN VITE',
                    style: 'background-image: url(\'assets/images/wpools/vite.png\')',
                    endString: '',
                    informationText: 'Vite<br>Vite is a Directed Acyclic Graph (DAG) based smart-contract<br>platform, with a Snapshot Chain structure to facilitate zero-fee<br>transactions and optimize transaction speed,<br>reliability, and security. The Snapshot Chain of Vite utilizes<br>Hierarchical Delegated Proof of Stake (“HDPoS”) to achieve<br>network consensus, while supernodes take only staking<br>rewards and no transaction fees. Vite virtual machine<br>maintains compatibility with EVM, and utilizes asynchronous<br>smart contract language, Solidity++.Vite’s flagship DApp is<br>ViteX, a truly trustless DEX deployed on the Vite chain. Vite\'s<br>next ambition is a universal cross-chain solution that allows<br>easy asset transfer between any two chains in a decentralized manner.<br><br><a href="https://www.vite.org/" target="_blank">Go to website</a><br><a href="https://twitter.com/vitelabs" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'TUSD',
                    title: 'EARN TUSD',
                    style: 'background-image: url(\'assets/images/wpools/tusd.png\')',
                    endString: '',
                    informationText: 'TrueUSD<br>TUSD is one of the world’s most trusted stablecoin,<br>independently attested live and on chain for 1:1 USD reserves,<br>with billions in monthly volume, nearly instant minting, no fees,<br>and direct-to-bank redemption.<br><br><a href="https://www.trusttoken.com/" target="_blank">Go to website</a><br><a href="https://twitter.com/tusd_official" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'ONT',
                    title: 'EARN ONT',
                    style: 'background-image: url(\'assets/images/wpools/ont.png\')',
                    endString: '',
                    informationText: 'Ontology<br>ONTO is the first truly decentralized, cross-chain wallet,<br>allowing users to securely manage their identities, data, and<br>digital assets. ONTO users can manage their crypto assets<br>(including NFTs), perform cross-chain swaps, keep up-to-date<br>with the latest industry latest developments and events via the<br>ONTO news feed, and enjoy access to a variety of dApps.<br>With ONTO Wallet, users can create an ONT ID, a decentralized<br>digital identity that fully protects their private data through an<br>encryption algorithm and enables one-click multi-chain wallet<br>address creation and management. Users worldwide can<br>download ONTO Wallet now via <a href="https://onto.app" target="_blank">onto.app</a> or their mobile app<br>store. Desktop users can also install ONTO Web Wallet for Google Chrome.<br><br><a href="https://ont.io/" target="_blank">Go to website</a><br><a href="https://twitter.com/OntologyNetwork" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'DEP',
                    title: 'EARN DEP',
                    style: 'background-image: url(\'assets/images/wpools/dep.png\')',
                    endString: '',
                    informationText: 'DEAPCoin<br>DEAPcoin comes from DEA, a Singapore headquartered<br>blockchain-based multimedia digital entertainment group that<br>issues NFT and games, whose members are part of the<br>Blockchain Gaming Association.<br>With their traditional industrial network, DEA owns original IPs<br>drawn by more than 70 famous manga artists and original<br>content such as games and mangas.<br><br><a href="https://dea.sg/" target="_blank">Go to website</a><br><a href="https://twitter.com/PlayMining_SG" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'PLAY',
                    title: 'EARN PLAY',
                    style: 'background-image: url(\'assets/images/wpools/play.png\')',
                    endString: '',
                    informationText: 'PolyPlay<br>PolyPlay is the Gamers’ Gold Standard token with only<br>1,000,000 supply. PolyPlay is an eSports tournament<br>platform, full casino, and gaming launchpad with a store.<br>PolyPlay aims to be the go-to place for Blockchain and eSports Tournaments.<br><br><a href="https://polyplay.net/" target="_blank">Go to website</a><br><a href="https://twitter.com/PolyPlayCoin" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'WIZARD',
                    title: 'EARN WIZARD',
                    style: 'background-image: url(\'assets/images/wpools/wizard.png\')',
                    endString: '',
                    informationText: 'Wizard<br>Wizard is a first-of-a-kind fantasy token and NFT marketplace<br>which brings a magical experience to all who behold it,<br>combining crypto with games for multiplied rewards!<br><br><a href="https://wizard.financial/" target="_blank">Go to website</a><br><a href="https://twitter.com/WIZARD_BSC" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'REI',
                    title: 'EARN REI',
                    style: 'background-image: url(\'assets/images/wpools/rei.png\')',
                    endString: '',
                    informationText: 'Zerogoki<br>Zerogoki is a derivatives minting platform, also it’s Duet<br>protocol’s pilot project, creating the industry’s first stable<br>synthetic asset and an on-chain synthetic leveraged token<br>allowing users to achieve 100% capital utilization without<br>worrying about liquidation risk.<br><br><a href="https://zerogoki.org/" target="_blank">Go to website</a><br><a href="https://twitter.com/0Zerogoki" target="_blank">Twitter</a>',
                },
                {
                    currency: 'DIAM',
                    earned: 'ZIG',
                    title: 'EARN ZIG',
                    style: 'background-image: url(\'assets/images/wpools/zig.png\')',
                    endString: '',
                    informationText: 'Zignaly<br>Zignaly is a social trading platform that allows investors to<br>follow expert traders in a seamless manner. This results in not<br>only the investors achieving optimized returns, but hundreds<br>of traders are monetizing on their trading skillset. Zignaly<br>focuses on the traders getting the best results which leads to<br>a significant volume being generated on the platform, as well<br>as attracting a significant number of new investors to the crypto sphere.<br><br><a href="https://www.zignaly.com/" target="_blank">Go to website</a><br><a href="https://twitter.com/zignaly" target="_blank">Twitter</a>',
                    isNew: true,
                },
                {
                    currency: 'DIAM',
                    earned: 'BLS',
                    title: 'EARN BLS',
                    style: 'background-image: url(\'assets/images/wpools/blocks.png\')',
                    endString: '',
                    informationText: '1000Blocks Space<br>1000Blocks.space is all about community-powered NFTs. You<br>can invest in Block Areas where you put your poster/image of<br>what you want to show to the world. And as long as you are<br>the owner of a Block (no one covers you up), you earn their<br>BLS tokens constantly.<br><br><a href="https://1000blocks.space/" target="_blank">Go to website</a><br><a href="https://twitter.com/1000Blocks" target="_blank">Twitter</a>',
                    isNew: true,
                }
            ],
            wpoolsStakedOnly: false,
            wpoolsShowEnded: false,
            wpoolsSearch: '',
            /* STAKING */
            stakingAddress: '0x52a2B3BEAfA46BA51A4792793a7447396D09423f',
            stakingContract: null,
            stakingApproved: false,
            stakingPools: [{
                    i: 3,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT-BNB',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault-bnb.svg\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 6,
                    isFinished: true,
                },
                {
                    i: 0,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '0 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 5,
                    isFinished: true,
                },
                {
                    i: 1,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '7 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 4,
                    isFinished: true,
                },
                {
                    i: 2,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: 0,
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'WAULT',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    getHref: 'https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9',
                    orderId: 3,
                    isFinished: true,
                },
                {
                    i: 4,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'DiAM',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/locked-staking/wault.png\')',
                    orderId: 1,
                },
                {
                    i: 5,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'EULER',
                    title: '30 days',
                    isApproved: false,
                    style: 'background-image: url(\'assets/images/farms/_EULER.png\')',
                    orderId: 2,
                },
                {
                    i: 6,
                    apy: 0,
                    amount: '0.00',
                    pendingRewards: 0,
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    timeAvailable: new Date().getTime() / 1000 + Number(2592000),
                    totalDepositedAmount: 0,
                    totalValueLocked: 0,
                    balance: 0,
                    currency: 'DIAM',
                    title: '30 days',
                    isApproved: false,
                    orderId: 0,
                    isFinished: true,
                },
            ],
            lockedStakingStakedOnly: false,
            lockedStakingShowEnded: false,
            lockedStakingSearch: '',
            vaults: [{
                    disabled: false,
                    title: 'CAKE',
                    style: 'background-image: url(\'assets/images/vaults/cake.svg\')',
                    id: 'auto-cake',
                    tokenContractAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
                    tokenContract: null,
                    vaultContractAddress: '0x171a5efeFD1Af5f56bB2D6854CC63063D04B3F63',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Pancake(AUTO)',
                    hasClaim: false,
                    currency: 'CAKE',
                    informationText: `Stake CAKE
Earn WAULT
0.1% Deposit Fee
Additional Rewards - Yes 
Claimable Rewards - No`,
                },
                {
                    disabled: true,
                    title: 'BUSD',
                    style: 'background-image: url(\'assets/images/vaults/busd.svg\')',
                    id: 'venus-busd',
                    tokenContractAddress: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                    tokenContract: null,
                    vaultContractAddress: '0x8dcc671f21B061dd276e9D84BFf151E858C6679c',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Venus(AUTO)',
                    hasClaim: true,
                    currency: 'BUSD',
                    informationText: `Stake BUSD
Earn WAULT
No Fee
Additional Rewards - Yes
Claimable Rewards - Yes`,
                },
                {
                    disabled: false,
                    title: 'BUSD/USDT/USDC',
                    style: 'background-image: url(\'assets/images/vaults/3eps.png\')',
                    id: 'ellipsis-3eps',
                    tokenContractAddress: '0xaf4de8e872131ae328ce21d909c74705d3aaf452',
                    tokenContract: null,
                    vaultContractAddress: '0x6844c5Df2C07dB22fF99E42cD70b7E4329f33ea3',
                    vaultContract: null,
                    balance: 'N/A',
                    additionalRewards: 'N/A',
                    depositAmount: '0.00',
                    withdrawAmount: '0.00',
                    isApproved: false,
                    deposited: 'N/A',
                    decimals: 'ether',
                    tvl: 0,
                    apy: 0,
                    daily: 0,
                    subtitle: 'Ellipsis',
                    hasClaim: false,
                    currency: 'EPS 3Pool',
                    informationText: `Stake EPS 3Pool LP
Earn EPS 3Pool LP
0.1% Withdraw Fee
0.5% Harvest Call Fee
2.5% Harvest Reward Fee
Additional Rewards - No`,
                    getHref: 'https://www.ellipsis.finance/3pool/deposit'
                },
            ],
            vaultsStakedOnly: false,
            vaultsSearch: '',
        };
    },
    mounted() {
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    },
    created: async function() {
        for (let i = 0; i < this.sections.length; i++) {
            if (this.sections[i].href == window.location.hash) this.selectedSection = i;
        }
        for (let i = 0; i < this.farms.length; i++) {
            this.farms[i].i = i;
            this.farms[i].apy = 0;
            this.farms[i].feeApr = 0;
            this.farms[i].amount = '0.00';
            this.farms[i].pendingRewards = 0;
            this.farms[i].depositAmount = '0.00';
            this.farms[i].withdrawAmount = '0.00';
            this.farms[i].totalValueLocked = 0;
            this.farms[i].balance = 0;
            this.farms[i].isApproved = false;
        }
        for (let i = 0; i < this.wpools.length; i++) {
            this.wpools[i].i = i;
            this.wpools[i].apy = 0;
            this.wpools[i].amount = '0.00';
            this.wpools[i].pendingRewards = 0;
            this.wpools[i].depositAmount = '0.00';
            this.wpools[i].withdrawAmount = '0.00';
            this.wpools[i].totalValueLocked = 0;
            this.wpools[i].balance = 0;
            this.wpools[i].isApproved = false;
        }
        document.getElementById('app').style.opacity = '';
        await new Promise(r => setTimeout(r, 1500));
        document.getElementById('preloader').style.display = 'none';
        this.Web3Modal = window.Web3Modal.default;
        this.WalletConnectProvider = window.WalletConnectProvider.default;
        this.init();
        if (sessionStorage.getItem('wallet')) {
            if (this.web3Modal.cachedProvider)
                this.onConnect();
        } else {
            this.web3Modal.clearCachedProvider();
        }
        this.dataLoad();
        setInterval(
            () => {
                this.dataLoad();
            }, 15000);
    },
    computed: {
        usdtOutputAmount: function() {
            if (Number(this.DiamInputAmount) == 0)
                return '0.00';
            return math.format(Number(this.DiamInputAmount) * Number(this.DiamPegPrice) * Math.pow(10, 2) / Math.pow(10, 2), {
                notation: 'fixed'
            });
        },
        usdtReceiveAmount: function() {
            if (Number(this.DiamInputAmount) == 0)
                return '0.00';
            return this.usdtOutputAmount - this.DiamFeeOne;
        },
        usdtClaimAmountComputed: function() {
            if (Number(this.usdClaimAmount) == 0)
                return '0';
            let receive = math.format(Number(this.usdtClaimAmount) * Number(this.DiamPegPrice) * Math.pow(10, 2) / Math.pow(10, 2), {
                notation: 'fixed'
            });
            let tax = math.format(Math.ceil(Number(this.usdtClaimAmount) * Number(this.DiamRedeemPermille) / 1000 * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
            return receive - tax;
        },
        DiamFeeOne: function() {
            if (Number(this.DiamInputAmount) == 0)
                return '0.00';
            return math.format(Math.ceil(Number(this.DiamInputAmount) * Number(this.DiamRedeemPermille) / 1000 * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        DiamPegPrice: function() {
            let usdtReceived = (1000 - this.DiamDIAMPermille) / 1000;
            let DIAMReceived = Number(this.DiamDIAMBalance) / Number(this.DiamTotalSupply) * this.DIAMPrice;
            return math.format(Math.floor((usdtReceived + DIAMReceived) * Math.pow(10, 4)) / Math.pow(10, 4), {
                notation: 'fixed'
            });
        },
        selectedVaults: function() {
            let temp = this.vaults;
            if (this.vaultsStakedOnly)
                temp = temp.filter(x => Number(x.deposited) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.vaultsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.vaultsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => Number(b.apy) - Number(a.apy));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.tvl) - Number(a.tvl));
            return temp;
        },
        selectedLockedStaking: function() {
            let temp = this.stakingPools;
            if (!this.lockedStakingShowEnded)
                temp = temp.filter(x => !x.isFinished);
            if (this.lockedStakingStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.lockedStakingSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.lockedStakingSearch.toLowerCase()));
            if (this.sortBy === 'apr') {
                temp = temp.sort((a, b) => Number(a.apy) - Number(b.apy));
                temp = temp.reverse();
            } else if (this.sortBy === 'liquidity') {
                temp = temp.sort((a, b) => Number(a.totalValueLocked) - Number(b.totalValueLocked));
                temp = temp.reverse();
            } else
                temp = temp.sort((a, b) => Number(a.orderId) - Number(b.orderId));
            return temp;
        },
        selectedFarms: function() {
            let temp = this.farms;
            if (!this.farmsShowEnded)
                temp = temp.filter(x => !x.isFinished);
            if (this.farmsStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.farmsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.farmsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => (Number(b.apy) + Number(b.feeApr)) - (Number(a.apy) + Number(a.feeApr)));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.totalValueLocked) - Number(a.totalValueLocked));
            else
                temp = temp.sort((a, b) => Number(a.orderId) - Number(b.orderId));
            return temp;
        },
        selectedWpools: function() {
            let temp = this.wpools;
            if (!this.wpoolsShowEnded)
                temp = temp.filter(x => x.endString != '0 days and 0 hours');
            if (this.wpoolsStakedOnly)
                temp = temp.filter(x => Number(x.amount) > 0);
            temp = temp.filter(x => x.title.toLowerCase().includes(this.wpoolsSearch.toLowerCase()) || x.currency.toLowerCase().includes(this.wpoolsSearch.toLowerCase()));
            if (this.sortBy === 'apr')
                temp = temp.sort((a, b) => Number(b.apy) - Number(a.apy));
            else if (this.sortBy === 'liquidity')
                temp = temp.sort((a, b) => Number(b.totalValueLocked) - Number(a.totalValueLocked));
            else {
                temp = temp.sort((a, b) => Number(b.endString === '0 days and 0 hours') - Number(a.endString === '0 days and 0 hours'));
                temp = temp.reverse();
            }
            return temp;
        },
    },
    methods: {
        dataLoad: async function() {
            //RELOAD API DATA
            document.getElementsByTagName("body")[0].removeChild(scr4);
            scr4 = document.createElement("script");
            scr4.src = "api.wault.finance/realtimeData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr4);
            document.getElementsByTagName("body")[0].removeChild(scr5);
            scr5 = document.createElement("script");
            scr5.src = "api.wault.finance/vaultsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr5);
            document.getElementsByTagName("body")[0].removeChild(scr8);
            scr8 = document.createElement("script");
            scr8.src = " api.wault.finance/farmsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr8);
            document.getElementsByTagName("body")[0].removeChild(scr9);
            scr9 = document.createElement("script");
            scr9.src = " api.wault.finance/wpoolsData.js" + "?ts=" + new Date().getTime();
            document.getElementsByTagName("body")[0].appendChild(scr9);

            //USE IT
            for (let i = 0; i < this.wpools.length; i++) {
                if (wpoolsData[i].apy === null || wpoolsData[i].apy === undefined)
                    this.wpools[i].apy = 0;
                else
                    this.wpools[i].apy = wpoolsData[i].apy;
                if (wpoolsData[i].tvl === null || wpoolsData[i].tvl === undefined)
                    this.wpools[i].totalValueLocked = 0;
                else
                    this.wpools[i].totalValueLocked = wpoolsData[i].tvl;
                this.wpools[i].contractAddress = wpoolsData[i].contractAddress;
                this.wpools[i].endString = wpoolsData[i].endString;
                if (this.wpools[i].endString === '0 days and 0 hours')
                    this.wpools[i].apy = 0;
            }
            for (let i = 0; i < this.farms.length; i++) {
                if (farmsData[i].apy === null || farmsData[i].apy === undefined)
                    this.farms[i].apy = 0;
                else
                    this.farms[i].apy = farmsData[i].apy;
                if (farmsData[i].tvl === null || farmsData[i].tvl === undefined)
                    this.farms[i].totalValueLocked = 0;
                else
                    this.farms[i].totalValueLocked = farmsData[i].tvl;
                if (farmsData[i].feeApr === null || farmsData[i].feeApr === undefined || Number(this.farms[i].apy) == 0)
                    this.farms[i].feeApr = 0;
                else
                    this.farms[i].feeApr = farmsData[i].feeApr;
                if (farmsData[i].lpPrice === null || farmsData[i].lpPrice === undefined)
                    this.farms[i].lpPrice = 0;
                else
                    this.farms[i].lpPrice = farmsData[i].lpPrice;
                this.farms[i].address = farmsData[i].address;
                this.farms[i].poolId = farmsData[i].poolId;
                if (Number(this.farms[i].apy) == 0)
                    this.farms[i].isFinished = true;
            }
            for (let i = 0; i < this.vaults.length; i++) {
                //this.vaults[i].apy = vaultsData[this.vaults[i].id].apy;
                this.vaults[i].tvl = vaultsData[this.vaults[i].id].tvl;
                //this.vaults[i].daily = vaultsData[this.vaults[i].id].daily;
            }
            //DIAM
            this.DIAMCirculation = realtimeData.DIAMCirculation;
            this.DIAMBurned = realtimeData.DIAMBurned;
            this.DIAMPrice = realtimeData.DIAMPrice;
            this.DIAMLpPrice = realtimeData.DIAMLpPrice;
            this.wswapVolume = realtimeData.wswapVolume;
            this.stakingPools[6].apy = realtimeData.DIAMStakingApy;
            this.stakingPools[6].totalValueLocked = realtimeData.DIAMStakingTvl;
            //DiAM
            this.DiAMPrice = realtimeData.DiAMPrice;
            this.DiAMApy = realtimeData.DiAMApy;
            this.DiAMTvl = realtimeData.DiAMTvl;
            this.DiAMLpPrice = realtimeData.waultxLpPrice;
            this.waultxCirculation = realtimeData.waultxCirculation;
            this.waultxBurned = realtimeData.waultxBurned;
            this.stakingPools[4].apy = realtimeData.DiAMApy;
            this.stakingPools[4].totalValueLocked = realtimeData.DiAMTvl;
            //wault
            this.waultTotalValueLocked = realtimeData.waultTotalValueLocked;
            this.totalTotalValueLocked = realtimeData.totalTotalValueLocked;
            this.waultPrice = realtimeData.waultPrice;
            this.waultLpPrice = realtimeData.waultLpPrice;
            this.waultCirculation = realtimeData.waultCirculation;
            this.diamMarketCap = realtimeData.diamMarketCap;
            this.lmTotalRewards = realtimeData.lmTotalRewards;
            //lm
            this.lm2TotalRewards = realtimeData.lm2TotalRewards;
            this.lm2LockedAmount = realtimeData.lm2LockedAmount;
            this.lm2TotalValueLocked = realtimeData.lm2TotalValueLocked;
            this.stakingPools[0].totalValueLocked = realtimeData.lm2TotalValueLocked;
            this.lm2Apy = realtimeData.lm2Apy;
            this.stakingPools[0].apy = realtimeData.lm2Apy;
            this.stakingPools[0].timeAvailable = this.lm2TimeAvailable;
            //EULER STAKING
            this.eulerStakingLockedAmount = realtimeData.eulerStakingLockedAmount;
            this.eulerStakingTotalValueLocked = realtimeData.eulerStakingTotalValueLocked;
            this.stakingPools[5].totalValueLocked = realtimeData.eulerStakingTotalValueLocked;
            this.eulerStakingApy = realtimeData.eulerStakingApy;
            this.stakingPools[5].apy = realtimeData.eulerStakingApy;
            this.stakingPools[5].timeAvailable = this.eulerStakingTimeAvailable;
            //EULER LM
            this.eulerLmTotalRewards = realtimeData.eulerLmTotalRewards;
            this.eulerLmLockedAmount = realtimeData.eulerLmLockedAmount;
            this.eulerLmTotalValueLocked = realtimeData.eulerLmTotalValueLocked;
            this.eulerLmApy = realtimeData.eulerLmApy;
            this.farms[7].totalValueLocked = realtimeData.eulerLmTotalValueLocked;
            this.farms[7].apy = realtimeData.eulerLmApy;
            //staking
            for (let i = 1; i < 4; i++) {
                this.stakingPools[i].totalDepositedAmount = realtimeData.stakingPools[i - 1].totalDepositedAmount;
                if (this.selectedAccount == null)
                    this.stakingPools[i].timeAvailable = realtimeData.stakingPools[i - 1].timeAvailable;
                this.stakingPools[i].apy = realtimeData.stakingPools[i - 1].apy;
                this.stakingPools[i].totalValueLocked = realtimeData.stakingPools[i - 1].totalValueLocked;
            }
            //Diam
            this.DiamPrice = realtimeData.DiamPrice;
            this.DiamDIAMPermille = realtimeData.DiamDIAMPermille;
            this.DiamRedeemPermille = realtimeData.DiamRedeemPermille;
            this.DiamMintPermille = realtimeData.DiamMintPermille;
            this.DiamMaxStakeAmount = realtimeData.DiamMaxStakeAmount;
            this.DiamMaxRedeemAmount = realtimeData.DiamMaxRedeemAmount;
            this.DiamDIAMBalance = realtimeData.DiamDIAMBalance;
            this.DiamTotalSupply = realtimeData.DiamTotalSupply;
            try {
                if (this.selectedAccount != null)
                    this.fetchData();
                this.lastUpdate = new Date().toLocaleString();
            } catch (e) {
                console.log(e);
            }
            this.eulerPrice = realtimeData.eulerPrice;
            this.eulerLpPrice = realtimeData.eulerLpPrice;
        },
        init: function() {
            const providerOptions = {
                injected: {
                    display: {
                        name: 'Browser Injected',
                        description: 'Connect to your browser injected wallet',
                    },
                },
                walletconnect: {
                    package: this.WalletConnectProvider,
                    options: {
                        rpc: {
                            1: "https://bsc-dataseed.binance.org/",
                            56: "https://bsc-dataseed.binance.org/",
                        },
                    },
                },
                'custom-binance': {
                    display: {
                        name: 'Binance',
                        description: 'Connect to your Binance Chain Wallet',
                        logo: 'binance-wallet.png',
                    },
                    package: 'binance',
                    connector: async(ProviderPackage, options) => {
                        const provider = window.BinanceChain;
                        await provider.enable();
                        return provider;
                    },
                },
                /*
                'custom-onto': {
                    display: {
                        name: 'ONTO Wallet',
                        description: 'Connect to your ONTO Wallet',
                        logo: 'onto-wallet.png',
                    },
                    package: 'onto',
                    connector: async (ProviderPackage, options) => {
                        const provider = new window.OntoProvider();
                        return provider;
                    },
                }
                */
            };
            this.web3Modal = new this.Web3Modal({
                network: 'binance',
                cacheProvider: true,
                providerOptions,
                disableInjectedProvider: false,
            });
        },
        fetchData: async function() {
            let network = await this.web3.eth.net.getId();
            if (network != 56 && this.provider.chainId != '0x38') {
                Swal.fire(
                    'Wrong Network!',
                    'You currently have BSC selected in the app. Please change this selection or choose BSC in your web3 wallet.',
                    'error'
                );
                this.onDisconnect();
                return;
            }
            const accounts = await this.web3.eth.getAccounts();
            this.waultTokenContract = new this.web3.eth.Contract(waultAbi, this.waultTokenAddress);
            this.waultLpContract = new this.web3.eth.Contract(lpAbi, this.waultLpAddress);
            this.stakingContract = new this.web3.eth.Contract(stakingAbi, this.stakingAddress);
            this.DiAMStakeContract = new this.web3.eth.Contract(stakingAbi, this.DiAMStakeAddress);
            this.DIAMStakeContract = new this.web3.eth.Contract(stakingAbi, this.DIAMStakeAddress);
            this.DiAMTokenContract = new this.web3.eth.Contract(erc20Abi, this.DiAMTokenAddress);
            this.eulerStakingContract = new this.web3.eth.Contract(eulerStakingAbi, this.eulerStakingAddress);
            this.eulerTokenContract = new this.web3.eth.Contract(erc20Abi, this.eulerTokenAddress);
            this.DIAMContract = new this.web3.eth.Contract(erc20Abi, this.DIAMAddress);
            this.farmContract = new this.web3.eth.Contract(farmAbi, this.farmAddress);
            this.usdtTokenContract = new this.web3.eth.Contract(erc20Abi, this.usdtTokenAddress);
            this.DiamTokenContract = new this.web3.eth.Contract(erc20Abi, this.DiamTokenAddress);
            this.DiamMasterContract = new this.web3.eth.Contract(DiamMasterAbi, this.DiamMasterAddress);
            this.selectedAccount = accounts[0];
            this.walletButton = {
                text: this.addressShortener(accounts[0])
            };
            if (this.selectedSection == 0) {
                try {
                    this.waultBalance = await this.waultTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.DiAMSwapContract = new this.web3.eth.Contract(DiAMSwapAbi, this.DiAMSwapAddress);
                    let temp = await this.waultTokenContract.methods.allowance(this.selectedAccount, this.DiAMSwapAddress).call();
                    this.DiAMSwapApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.DiAMBalance = await this.DiAMTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.DiAMBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DiAMBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.DIAMBalance = await this.DIAMContract.methods.balanceOf(this.selectedAccount).call();
                    this.DIAMBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DIAMBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 4) {
                try {
                    this.usdtTokenBalance = await this.usdtTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.usdtTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.usdtTokenBalance)) * Math.pow(10, 2)) / Math.pow(10, 2), {
                        notation: 'fixed'
                    });
                    this.DiamTokenBalance = await this.DiamTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.DiamTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DiamTokenBalance)) * Math.pow(10, 2)) / Math.pow(10, 2), {
                        notation: 'fixed'
                    });
                    let temp = await this.usdtTokenContract.methods.allowance(this.selectedAccount, this.DiamMasterAddress).call();
                    this.isUsdtApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    temp = await this.DiamTokenContract.methods.allowance(this.selectedAccount, this.DiamMasterAddress).call();
                    this.isDiamApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.DiamClaimAmount = Number(this.web3.utils.fromWei(await this.DiamMasterContract.methods.DiamClaimAmount(this.selectedAccount).call()));
                    if (this.DiamClaimAmount > 0) {
                        this.isDiamClaimable = true;
                        //this.usdtInputAmount = 0;
                    } else {
                        this.isDiamClaimable = false;
                    }
                    this.usdtClaimAmount = Number(this.web3.utils.fromWei(await this.DiamMasterContract.methods.usdtClaimAmount(this.selectedAccount).call()));
                    if (this.usdtClaimAmount > 0) {
                        this.isUsdtClaimable = true;
                        //this.DiamInputAmount = 0;
                    } else {
                        this.isUsdtClaimable = false;
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 5) {
                try {
                    this.waultBalance = await this.waultTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.waultBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.waultBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.waultTokenContract.methods.allowance(this.selectedAccount, this.stakingAddress).call();
                    this.stakingApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    for (let i = 1; i < 4; i++) {
                        this.stakingPools[i].balance = this.waultBalance;
                        this.stakingPools[i].isApproved = this.stakingApproved;
                        temp = await this.stakingContract.methods.poolInfo(i - 1).call();
                        let lockupDuration = temp.lockupDuration;
                        temp = await this.stakingContract.methods.userInfo(i - 1, this.selectedAccount).call();
                        this.stakingPools[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(temp.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                        if (Number(temp.lastClaim) > 0) {
                            this.stakingPools[i].timeAvailable = Number(temp.lastClaim) + Number(lockupDuration);
                        } else {
                            this.stakingPools[i].timeAvailable = realtimeData.stakingPools[i - 1].timeAvailable;
                        }
                        temp = await this.stakingContract.methods.pendingRewards(i - 1, this.selectedAccount).call();
                        this.stakingPools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(temp)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                    }
                    this.lpBalance = await this.waultLpContract.methods.balanceOf(this.selectedAccount).call();
                    this.lpBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lpBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.waultLpContract.methods.allowance(this.selectedAccount, this.lm2Address).call();
                    this.lm2Approved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.lm2Contract = new this.web3.eth.Contract(lm2Abi, this.lm2Address);
                    this.lm2Amount = await this.lm2Contract.methods.userInfo(this.selectedAccount).call();
                    this.lm2Amount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lm2Amount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.lm2PendingRewards = await this.lm2Contract.methods.pendingRewards(this.selectedAccount).call();
                    this.lm2PendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.lm2PendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.lm2Contract.methods.userInfo(this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.lm2TimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.lm2TimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[0].amount = this.lm2Amount;
                    this.stakingPools[0].pendingRewards = this.lm2PendingRewards;
                    this.stakingPools[0].timeAvailable = this.lm2TimeAvailable;
                    this.stakingPools[0].balance = this.lpBalance;
                    this.stakingPools[0].isApproved = this.lm2Approved;
                    //DiAM
                    this.DiAMBalance = await this.DiAMTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.DiAMBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DiAMBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.DiAMTokenContract.methods.allowance(this.selectedAccount, this.DiAMStakeAddress).call();
                    this.DiAMStakeApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.DiAMStakeContract = new this.web3.eth.Contract(stakingAbi, this.DiAMStakeAddress);
                    this.DiAMStakeAmount = await this.DiAMStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    this.DiAMStakeAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DiAMStakeAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.DiAMStakePendingRewards = await this.DiAMStakeContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.DiAMStakePendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DiAMStakePendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.DiAMStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.DiAMStakeTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.DiAMStakeTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[4].amount = this.DiAMStakeAmount;
                    this.stakingPools[4].pendingRewards = this.DiAMStakePendingRewards;
                    this.stakingPools[4].timeAvailable = this.DiAMStakeTimeAvailable;
                    this.stakingPools[4].balance = this.DiAMBalance;
                    this.stakingPools[4].isApproved = this.DiAMStakeApproved;
                    //EULER STAKING
                    this.eulerTokenBalance = await this.eulerTokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.eulerTokenBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerTokenBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.eulerTokenContract.methods.allowance(this.selectedAccount, this.eulerStakingAddress).call();
                    this.eulerStakingApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.eulerStakingAmount = await this.eulerStakingContract.methods.userInfo(0, this.selectedAccount).call();
                    this.eulerStakingAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerStakingAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.eulerStakingPendingRewards = await this.eulerStakingContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.eulerStakingPendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerStakingPendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.eulerStakingContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.eulerStakingTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.eulerStakingTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[5].amount = this.eulerStakingAmount;
                    this.stakingPools[5].pendingRewards = this.eulerStakingPendingRewards;
                    this.stakingPools[5].timeAvailable = this.eulerStakingTimeAvailable;
                    this.stakingPools[5].balance = this.eulerTokenBalance;
                    this.stakingPools[5].isApproved = this.eulerStakingApproved;
                    //DIAM STAKING
                    this.DIAMBalance = await this.DIAMContract.methods.balanceOf(this.selectedAccount).call();
                    this.DIAMBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DIAMBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.DIAMContract.methods.allowance(this.selectedAccount, this.DIAMStakeAddress).call();
                    this.DIAMStakeApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.DIAMStakeContract = new this.web3.eth.Contract(stakingAbi, this.DIAMStakeAddress);
                    this.DIAMStakeAmount = await this.DIAMStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    this.DIAMStakeAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DIAMStakeAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.DIAMStakePendingRewards = await this.DIAMStakeContract.methods.pendingRewards(0, this.selectedAccount).call();
                    this.DIAMStakePendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.DIAMStakePendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    temp = await this.DIAMStakeContract.methods.userInfo(0, this.selectedAccount).call();
                    if (Number(temp.lastClaim) > 0) {
                        this.DIAMStakeTimeAvailable = Number(temp.lastClaim) + Number(2592000);
                    } else {
                        this.DIAMStakeTimeAvailable = new Date().getTime() / 1000 + Number(2592000);
                    }
                    this.stakingPools[6].amount = this.DIAMStakeAmount;
                    this.stakingPools[6].pendingRewards = this.DIAMStakePendingRewards;
                    this.stakingPools[6].timeAvailable = this.DIAMStakeTimeAvailable;
                    this.stakingPools[6].balance = this.DIAMBalance;
                    this.stakingPools[6].isApproved = this.DIAMStakeApproved;
                } catch (e) {
                    console.log(e);
                }
            }
            if (this.selectedSection == 6) {
                for (let i = 0; i < this.vaults.length; i++) {
                    this.vaults[i].tokenContract = new this.web3.eth.Contract(erc20Abi, this.vaults[i].tokenContractAddress);
                    this.vaults[i].vaultContract = new this.web3.eth.Contract(vaultsAbi[this.vaults[i].id], this.vaults[i].vaultContractAddress);
                    this.vaults[i].balance = await this.vaults[i].tokenContract.methods.balanceOf(this.selectedAccount).call();
                    this.vaults[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.vaults[i].balance, this.vaults[i].decimals)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.vaults[i].tokenContract.methods.allowance(this.selectedAccount, this.vaults[i].vaultContractAddress).call();
                    this.vaults[i].isApproved = this.web3.utils.fromWei(temp, this.vaults[i].decimals) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));

                    if (this.vaults[i].id !== 'venus-busd')
                        temp = await this.vaults[i].vaultContract.methods.getPricePerFullShare().call();
                    else
                        temp = (await this.vaults[i].vaultContract.methods.balanceOfRewards(this.selectedAccount).call())._rewards;

                    this.vaults[i].deposited = await this.vaults[i].vaultContract.methods.balanceOf(this.selectedAccount).call();

                    if (this.vaults[i].id !== 'venus-busd')
                        this.vaults[i].deposited = Number(this.web3.utils.fromWei(temp)) * Number(this.web3.utils.fromWei(this.vaults[i].deposited));
                    else
                        this.vaults[i].deposited = Number(this.web3.utils.fromWei(temp)) + Number(this.web3.utils.fromWei(this.vaults[i].deposited));

                    if (this.vaults[i].id === 'ellipsis-3eps')
                        this.vaults[i].additionalRewards = null;
                    else if (this.vaults[i].id !== 'venus-busd')
                        this.vaults[i].additionalRewards = await this.vaults[i].vaultContract.methods.pendingReward(this.selectedAccount).call();
                    else
                        this.vaults[i].additionalRewards = (await this.vaults[i].vaultContract.methods.balanceOfRewards(this.selectedAccount).call())._waults;
                    if (this.vaults[i].additionalRewards !== null)
                        this.vaults[i].additionalRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.vaults[i].additionalRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                            notation: 'fixed'
                        });
                }
            }
            if (this.selectedSection == 2) {
                try {
                    //FARMS
                    for (let i = 0; i < this.farms.length; i++) {
                        if (i == 7) continue;
                        this.farmContract.methods.userInfo(this.farms[i].poolId, this.selectedAccount).call().then((value) => {
                            if (i == 13)
                                this.farms[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 6)) / Math.pow(10, 6), {
                                    notation: 'fixed'
                                });
                            else
                                this.farms[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                    }
                    for (let i = 0; i < this.farms.length; i++) {
                        if (i == 7) continue;
                        let contract = new this.web3.eth.Contract(erc20Abi, this.farms[i].address);
                        contract.methods.balanceOf(this.selectedAccount).call().then((value) => {
                            if (i == 13)
                                this.farms[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 6)) / Math.pow(10, 6), {
                                    notation: 'fixed'
                                });
                            else
                                this.farms[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                        contract.methods.allowance(this.selectedAccount, this.farmAddress).call().then((value) =>
                            this.farms[i].isApproved = this.web3.utils.fromWei(value) >= this.web3.utils.fromWei('1' + (Array(78).join('0'))));
                        this.farmContract.methods.pendingDIAM(this.farms[i].poolId, this.selectedAccount).call().then((value) =>
                            this.farms[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));
                    }

                    this.eulerLpContract = new this.web3.eth.Contract(erc20Abi, this.eulerLpAddress);
                    this.eulerLpBalance = await this.eulerLpContract.methods.balanceOf(this.selectedAccount).call();
                    this.eulerLpBalance = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLpBalance)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    let temp = await this.eulerLpContract.methods.allowance(this.selectedAccount, this.eulerLmAddress).call();
                    this.eulerLmApproved = this.web3.utils.fromWei(temp) >= this.web3.utils.fromWei('1' + (Array(78).join('0')));
                    this.eulerLmContract = new this.web3.eth.Contract(eulerLmAbi, this.eulerLmAddress);
                    this.eulerLmAmount = await this.eulerLmContract.methods.userInfo(this.selectedAccount).call();
                    this.eulerLmAmount = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLmAmount.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.eulerLmPendingRewards = await this.eulerLmContract.methods.pendingRewards(this.selectedAccount).call();
                    if (Number(this.web3.utils.fromWei(this.eulerLmPendingRewards)) > 1000000)
                        this.eulerLmPendingRewards = '0';
                    this.eulerLmPendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(this.eulerLmPendingRewards)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                        notation: 'fixed'
                    });
                    this.farms[7].amount = this.eulerLmAmount;
                    this.farms[7].pendingRewards = this.eulerLmPendingRewards;
                    this.farms[7].balance = this.eulerLpBalance;
                    this.farms[7].isApproved = this.eulerLmApproved;

                } catch (e) {
                    console.error(e);
                }
            }
            if (this.selectedSection == 3) {
                try {
                    //WPOOLS
                    for (let i = 0; i < this.wpools.length; i++) {
                        let contract = new this.web3.eth.Contract(wpoolAbi, this.wpools[i].contractAddress);

                        contract.methods.userInfo(this.selectedAccount).call().then((value) =>
                            this.wpools[i].amount = math.format(Math.floor(Number(this.web3.utils.fromWei(value.amount)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));

                        this.DIAMContract.methods.balanceOf(this.selectedAccount).call().then((value) =>
                            this.wpools[i].balance = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                notation: 'fixed'
                            }));

                        this.DIAMContract.methods.allowance(this.selectedAccount, this.wpools[i].contractAddress).call().then((value) =>
                            this.wpools[i].isApproved = this.web3.utils.fromWei(value) >= this.web3.utils.fromWei('1' + (Array(78).join('0'))));

                        contract.methods.pendingRewards(this.selectedAccount).call().then((value) => {
                            if (this.wpools[i].earned == 'HFS')
                                this.wpools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value, 'mwei')) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                            else
                                this.wpools[i].pendingRewards = math.format(Math.floor(Number(this.web3.utils.fromWei(value)) * Math.pow(10, 4)) / Math.pow(10, 4), {
                                    notation: 'fixed'
                                });
                        });
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        },
        onConnect: async function() {
            try {
                this.provider = await this.web3Modal.connect();
                sessionStorage.setItem('wallet', 'connected');
            } catch (e) {
                console.log("Could not get a wallet connection", e);
                return;
            }
            this.web3 = new Web3(this.provider);
            let network = await this.web3.eth.net.getId();
            if (network != 56 && this.provider.chainId != '0x38') {
                try {
                    let BSC = {
                        chainId: '0x38',
                        chainName: 'Binance Smart Chain',
                        nativeCurrency: {
                            name: 'Binance Coin',
                            symbol: 'BNB',
                            decimals: 18,
                        },
                        rpcUrls: ['https://bsc-dataseed.binance.org'],
                        blockExplorerUrls: ['https://bscscan.com'],
                    };
                    await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [BSC]
                    });
                } catch (error) {
                    console.log(error);
                }
            }

            this.provider.on("accountsChanged", (accounts) => {
                this.fetchData();
            });
            this.provider.on("chainChanged", (chainId) => {
                this.fetchData();
            });
            this.provider.on("networkChanged", (networkId) => {
                this.fetchData();
            });

            await this.fetchData();
        },
        onDisconnect: async function() {
            if (this.provider.close) {
                await this.provider.close();
                this.provider = null;
            }
            sessionStorage.removeItem('wallet');
            await this.web3Modal.clearCachedProvider();
            this.selectedAccount = null;
            this.walletButton = {
                text: 'Connect Wallet'
            };
        },
        addressShortener: function(address, length = 15) {
            return address.slice(0, length / 2) + '...' + address.slice(-(length / 2 + length % 2));
        },
        walletButtonClick: function() {
            if (this.selectedAccount)
                this.onDisconnect();
            else
                this.onConnect();
        },
        DiAMSwapApprove: async function() {
            try {
                await this.waultTokenContract.methods.approve(this.DiAMSwapAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        DiAMSwapExecute: async function() {
            try {
                let amount = this.web3.utils.toWei(this.DiAMSwapAmount.toString());
                this.DiAMSwapAmount = '0.00';
                await this.DiAMSwapContract.methods.swap(amount).send({
                    'from': this.selectedAccount
                });
            } catch (e) {
                console.log(e);
            }
        },
        lm2Approve: async function(stake) {
            try {
                await this.waultLpContract.methods.approve(this.lm2Address, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Withdraw: async function(stake) {
            try {
                //let amount = this.web3.utils.toWei(stake.withdrawAmount);
                let amount = this.web3.utils.toWei(stake.amount.toString());
                //stake.withdrawAmount = 0;
                await this.lm2Contract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Claim: async function(stake) {
            try {
                await this.lm2Contract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        lm2Deposit: async function(stake) {
            try {
                let amount = this.web3.utils.toWei(stake.depositAmount.toString());
                //stake.depositAmount = 0;
                await this.lm2Contract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmApprove: async function(farm) {
            try {
                await this.eulerLpContract.methods.approve(this.eulerLmAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmWithdraw: async function(farm) {
            try {
                let amount = this.web3.utils.toWei(farm.withdrawAmount.toString());
                //farm.withdrawAmount = 0;
                await this.eulerLmContract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmDeposit: async function(farm) {
            try {
                let amount = this.web3.utils.toWei(farm.depositAmount.toString());
                //farm.depositAmount = 0;
                await this.eulerLmContract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        eulerLmClaim: async function(farm) {
            try {
                await this.eulerLmContract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        farmApprove: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmApprove(farm);
                return;
            }
            try {
                let contract = new this.web3.eth.Contract(erc20Abi, farm.address);
                await contract.methods.approve(this.farmAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmWithdraw: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmWithdraw(farm);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(farm.withdrawAmount.toString());
                //farm.withdrawAmount = 0;
                await this.farmContract.methods.withdraw(farm.poolId, amount, false).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmClaim: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmClaim(farm);
                return;
            }
            try {
                await this.farmContract.methods.claim(farm.poolId).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        farmDeposit: async function(farm) {
            if (farm.i === 7) {
                await this.eulerLmDeposit(farm);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(farm.depositAmount.toString());
                //farm.depositAmount = 0;
                await this.farmContract.methods.deposit(farm.poolId, amount, false).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolApprove: async function(wpool) {
            try {
                await this.DIAMContract.methods.approve(wpool.contractAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolWithdraw: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                let amount = this.web3.utils.toWei(wpool.withdrawAmount.toString());
                //wpool.withdrawAmount = 0;
                await contract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolClaim: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                await contract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        wpoolDeposit: async function(wpool) {
            try {
                let contract = new this.web3.eth.Contract(wpoolAbi, wpool.contractAddress);
                let amount = this.web3.utils.toWei(wpool.depositAmount.toString());
                //wpool.depositAmount = 0;
                await contract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e)
            }
        },
        stakeApprove: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Approve(stake);
                return;
            }
            try {
                if (stake.i == 4) {
                    await this.DiAMTokenContract.methods.approve(this.DiAMStakeAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerTokenContract.methods.approve(this.eulerStakingAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.DIAMContract.methods.approve(this.DIAMStakeAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.waultTokenContract.methods.approve(this.stakingAddress, '1' + (Array(78).join('0'))).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeWithdraw: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Withdraw(stake);
                return;
            }
            try {
                //let amount = this.web3.utils.toWei(stake.withdrawAmount);
                let amount = this.web3.utils.toWei(stake.amount.toString());
                if (stake.i == 4) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.DiAMStakeContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.eulerStakingContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    amount = this.web3.utils.toWei(stake.withdrawAmount.toString());
                    await this.DIAMStakeContract.methods.withdraw(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.withdraw(stake.i, amount).send({
                        'from': this.selectedAccount
                    });
                }
                //stake.withdrawAmount = 0;
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeClaim: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Claim(stake);
                return;
            }
            try {
                if (stake.i == 4) {
                    await this.DiAMStakeContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerStakingContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.DIAMStakeContract.methods.claim(0).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.claim(stake.i).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        stakeDeposit: async function(stake) {
            if (stake.i == 3) {
                await this.lm2Deposit(stake);
                return;
            }
            try {
                let amount = this.web3.utils.toWei(stake.depositAmount.toString());
                //stake.depositAmount = 0;
                if (stake.i == 4) {
                    await this.DiAMStakeContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 5) {
                    await this.eulerStakingContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else if (stake.i == 6) {
                    await this.DIAMStakeContract.methods.deposit(0, amount).send({
                        'from': this.selectedAccount
                    });
                } else {
                    await this.stakingContract.methods.deposit(stake.i, amount).send({
                        'from': this.selectedAccount
                    });
                }
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        formatNumber: function(n, digits = 2) {
            n = n.toString();
            let splitted = n.split('.');
            let result = '';

            if (n == 'N/A')
                return n;

            if (splitted.length < 2 && digits != 0)
                return splitted[0] + ".00";

            let digitsCount = 0;
            for (let i = splitted[0].length - 1; i >= 0; i--) {
                if (splitted[0][i] == ',')
                    continue;
                if (digitsCount != 0 && digitsCount % 3 == 0)
                    result = ',' + result;
                result = splitted[0][i] + result;
                digitsCount += 1;
            }
            if (splitted.length > 1 && digits > 0)
                result = result + '.' + splitted[1].slice(0, digits);


            return result;
        },
        vaultApprove: async function(vault) {
            try {
                await vault.tokenContract.methods.approve(vault.vaultContractAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultDeposit: async function(vault) {
            try {
                let amount = this.web3.utils.toWei(vault.depositAmount.toString(), vault.decimals);
                //vault.depositAmount = 0;
                await vault.vaultContract.methods.deposit(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultWithdraw: async function(vault) {
            try {
                let balance = this.web3.utils.fromWei(await vault.vaultContract.methods.balanceOf(this.selectedAccount).call());
                let amount;
                if (balance > vault.withdrawAmount || vault.id !== 'ellipsis-3eps')
                    amount = this.web3.utils.toWei(vault.withdrawAmount.toString());
                else
                    amount = this.web3.utils.toWei(balance.toString());
                //vault.withdrawAmount = 0;
                await vault.vaultContract.methods.withdraw(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        vaultClaim: async function(vault) {
            try {
                await vault.vaultContract.methods.claim().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        farmSetDepositAmount: function(i, e) {
            let el = e.target;
            this.farms[i].depositAmount = this.farms[i].balance;
            $(el).prev('input').val(this.farms[i].balance);
        },
        farmSetWithdrawAmount: function(i, e) {
            let el = e.target;
            this.farms[i].withdrawAmount = this.farms[i].amount;
            $(el).prev('input').val(this.farms[i].amount);
        },
        wpoolSetDepositAmount: function(i, e) {
            let el = e.target;
            this.wpools[i].depositAmount = this.wpools[i].balance;
            $(el).prev('input').val(this.wpools[i].balance);
        },
        wpoolSetWithdrawAmount: function(i, e) {
            let el = e.target;
            this.wpools[i].withdrawAmount = this.wpools[i].amount;
            $(el).prev('input').val(this.wpools[i].amount);
        },
        goToSwap: async function() {
            document.getElementById('preloader').style.display = 'flex';
            await new Promise(r => setTimeout(r, 1500));
            window.location.href = 'https://swap';
        },
        changeNetwork: async function(newNetwork) {
            if (newNetwork == 'polygon') {
                window.location.href = '/polygon/index.html';
            }
        },
        getCookies: function() {
            return window.$cookies;
        },
        changeSort: function(newSort) {
            this.sortBy = newSort;
        },
        usdtApprove: async function() {
            try {
                await this.usdtTokenContract.methods.approve(this.DiamMasterAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        usdtClaim: async function() {
            try {
                await this.DiamMasterContract.methods.claimUsdt(0).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        DiamMint: async function() {
            try {
                let amount = this.web3.utils.toWei(this.usdtInputAmount.toString());
                //this.usdtInputAmount = 0;
                await this.DiamMasterContract.methods.stake(amount, 0).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        DiamClaim: async function() {
            try {
                await this.DiamMasterContract.methods.claimDiam().send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        DiamApprove: async function() {
            try {
                await this.DiamTokenContract.methods.approve(this.DiamMasterAddress, '1' + (Array(78).join('0'))).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
        DIAMRedeem: async function() {
            try {
                let amount = this.web3.utils.toWei(this.DiamInputAmount.toString());
                //this.DiamInputAmount = 0;
                await this.DiamMasterContract.methods.redeem(amount).send({
                    'from': this.selectedAccount
                });
                this.fetchData();
            } catch (e) {
                console.log(e);
            }
        },
    },
};

const vm = Vue.createApp(APP).mount('#app');