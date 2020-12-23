// import HttpService from './httpService'
import axios from 'axios';

export const bitcoinService = {
    bitcoinRate,
}

async function bitcoinRate() {
    const res = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    console.log("🚀 ~ file: bitcoinService.js ~ line 11 ~ bitcoinRate ~ data", res.data)
    return 1/res.data
}


// async function getMarketPrice() {
// // const {data} = await axios.gat()
// const data = {"status":"ok","name":"Market Price (USD)","unit":"USD","period":"day","description":"Average USD market price across major bitcoin exchanges.","values":[{"x":1595462400,"y":9537.4},{"x":1595548800,"y":9613.11},{"x":1595635200,"y":9551.28},{"x":1595721600,"y":9707.5},{"x":1595808000,"y":9938.83},{"x":1595894400,"y":11042.4},{"x":1595980800,"y":10934.94},{"x":1596067200,"y":11102.67},{"x":1596153600,"y":11114.93},{"x":1596240000,"y":11343.88},{"x":1596326400,"y":11823.69},{"x":1596412800,"y":11077.77},{"x":1596499200,"y":11242.57},{"x":1596585600,"y":11194.25},{"x":1596672000,"y":11750.28},{"x":1596758400,"y":11772.94},{"x":1596844800,"y":11605.6},{"x":1596931200,"y":11767.6},{"x":1597017600,"y":11684.06},{"x":1597104000,"y":11893.03},{"x":1597190400,"y":11392.43},{"x":1597276800,"y":11573.11},{"x":1597363200,"y":11777.43},{"x":1597449600,"y":11774.38},{"x":1597536000,"y":11873.98},{"x":1597622400,"y":11914.01},{"x":1597708800,"y":12293.72},{"x":1597795200,"y":11969.53},{"x":1597881600,"y":11734.0},{"x":1597968000,"y":11865.82},{"x":1598054400,"y":11522.8},{"x":1598140800,"y":11683.44},{"x":1598227200,"y":11653.02},{"x":1598313600,"y":11763.93},{"x":1598400000,"y":11337.4},{"x":1598486400,"y":11467.37},{"x":1598572800,"y":11302.01},{"x":1598659200,"y":11534.75},{"x":1598745600,"y":11481.64},{"x":1598832000,"y":11707.78},{"x":1598918400,"y":11659.57},{"x":1599004800,"y":11923.25},{"x":1599091200,"y":11397.44},{"x":1599177600,"y":10187.51},{"x":1599264000,"y":10467.89},{"x":1599350400,"y":10159.62},{"x":1599436800,"y":10254.93},{"x":1599523200,"y":10367.74},{"x":1599609600,"y":10121.52},{"x":1599696000,"y":10227.83},{"x":1599782400,"y":10352.66},{"x":1599868800,"y":10395.44},{"x":1599955200,"y":10446.44},{"x":1600041600,"y":10330.77},{"x":1600128000,"y":10674.64},{"x":1600214400,"y":10785.62},{"x":1600300800,"y":10948.43},{"x":1600387200,"y":10943.89},{"x":1600473600,"y":10931.79},{"x":1600560000,"y":11081.43},{"x":1600646400,"y":10919.65},{"x":1600732800,"y":10430.46},{"x":1600819200,"y":10532.22},{"x":1600905600,"y":10234.48},{"x":1600992000,"y":10732.43},{"x":1601078400,"y":10692.84},{"x":1601164800,"y":10732.4},{"x":1601251200,"y":10774.24},{"x":1601337600,"y":10692.33},{"x":1601424000,"y":10840.8},{"x":1601510400,"y":10777.92},{"x":1601596800,"y":10619.24},{"x":1601683200,"y":10575.06},{"x":1601769600,"y":10551.77},{"x":1601856000,"y":10673.46},{"x":1601942400,"y":10788.56},{"x":1602028800,"y":10603.74},{"x":1602115200,"y":10670.8},{"x":1602201600,"y":10923.3},{"x":1602288000,"y":11063.19},{"x":1602374400,"y":11302.67},{"x":1602460800,"y":11376.61},{"x":1602547200,"y":11540.04},{"x":1602633600,"y":11428.24},{"x":1602720000,"y":11431.32},{"x":1602806400,"y":11503.73},{"x":1602892800,"y":11327.57},{"x":1602979200,"y":11366.51},{"x":1603065600,"y":11508.2},{"x":1603152000,"y":11758.16},{"x":1603238400,"y":11925.46},{"x":1603324800,"y":12831.56},{"x":1603411200,"y":12990.25},{"x":1603497600,"y":12944.52},{"x":1603584000,"y":13128.46},{"x":1603670400,"y":13036.77},{"x":1603756800,"y":13076.37},{"x":1603843200,"y":13651.47},{"x":1603929600,"y":13289.0},{"x":1604016000,"y":13458.66},{"x":1604102400,"y":13564.72},{"x":1604188800,"y":13810.32},{"x":1604275200,"y":13758.88},{"x":1604361600,"y":13575.17},{"x":1604448000,"y":14023.31},{"x":1604534400,"y":14155.59},{"x":1604620800,"y":15591.39},{"x":1604707200,"y":15595.77},{"x":1604793600,"y":14839.84},{"x":1604880000,"y":15490.6},{"x":1604966400,"y":15328.53},{"x":1605052800,"y":15317.04},{"x":1605139200,"y":15708.65},{"x":1605225600,"y":16295.57},{"x":1605312000,"y":16339.33},{"x":1605398400,"y":16091.07},{"x":1605484800,"y":15968.16},{"x":1605571200,"y":16725.15},{"x":1605657600,"y":17679.72},{"x":1605744000,"y":17798.45},{"x":1605830400,"y":17820.57},{"x":1605916800,"y":18687.45},{"x":1606003200,"y":18699.75},{"x":1606089600,"y":18422.28},{"x":1606176000,"y":18398.91},{"x":1606262400,"y":19172.52},{"x":1606348800,"y":18739.8},{"x":1606435200,"y":17151.44},{"x":1606521600,"y":17138.87},{"x":1606608000,"y":17732.42},{"x":1606694400,"y":18191.6},{"x":1606780800,"y":19709.73},{"x":1606867200,"y":18792.52},{"x":1606953600,"y":19226.97},{"x":1607040000,"y":19454.54},{"x":1607126400,"y":18670.49},{"x":1607212800,"y":19155.06},{"x":1607299200,"y":19377.66},{"x":1607385600,"y":19181.41},{"x":1607472000,"y":18318.87},{"x":1607558400,"y":18554.15},{"x":1607644800,"y":18247.76},{"x":1607731200,"y":18029.36},{"x":1607817600,"y":18803.44},{"x":1607904000,"y":19164.48},{"x":1607990400,"y":19276.59},{"x":1608076800,"y":19439.75},{"x":1608163200,"y":21379.48},{"x":1608249600,"y":22847.46},{"x":1608336000,"y":23150.79}]};
// return data
// }

// async function getConfirmedTransactions() {
// const {data} = await axios.gat()
// return data
// }



