import StallObject from "./Stall";
import ZoneManager from "./ZoneManager";
import Zone from "./Zone";
import Production from "./Production";

class TestData {
    /**
     *
     * @returns dict containing stall data
     * {
     *     building: {
     *         stall: {
     *             coords: {
     *                 [00.00, 00.00],
     *                 [00.00, 00.00]
     *             },
     *             fields: {
     *                 name: "name"
     *                 isMC: false
     *                 isDisabled: false
     *                 isElectric: false
     *             }
     *         }
     *     }
     * }
     */
    static getStallData() {
        let dStallData = {
            d1: {
                coords: [
                    [50.65, -49.45],
                    [49.8, -45.85],
                ],
                fields: {
                    name: "d1"
                },
            },
            d2: {
                coords: [
                    [49.6, -49.45],
                    [48.65, -45.85],
                ],
                fields: {
                    name: "d2"
                },
            },
            d3: {
                coords: [
                    [48.45, -49.45],
                    [47.5, -45.85],
                ],
                fields: {
                    name: "d3"
                },
            },
            d4: {
                coords: [
                    [47.3, -49.45],
                    [46.35, -45.85],
                ],
                fields: {
                    name: "d4"
                },
            },
            d5: {
                coords: [
                    [46.15, -49.45],
                    [45.2, -45.85],
                ],
                fields: {
                    name: "d5"
                },
            },
            d6: {
                coords: [
                    [45, -49.45],
                    [44, -45.85],
                ],
                fields: {
                    name: "d6"
                },
            },
            d7: {
                coords: [
                    [43.8, -49.45],
                    [42.75, -45.85],
                ],
                fields: {
                    name: "d7"
                },
            },
            d8: {
                coords: [
                    [42.55, -49.45],
                    [41.55, -45.85],
                ],
                fields: {
                    name: "d8"
                },
            },
            d9: {
                coords: [
                    [41.3, -49.45],
                    [40.3, -45.85],
                ],
                fields: {
                    name: "d9"
                },
            },
            d10: {
                coords: [
                    [40, -49.45],
                    [38.9, -45.85],
                ],
                fields: {
                    name: "d10"
                },
            },
            d11: {
                coords: [
                    [38.7, -49.45],
                    [37.6, -45.85],
                ],
                fields: {
                    name: "d11"
                },
            },
            d12: {
                coords: [
                    [37.4, -49.45],
                    [36.3, -45.85],
                ],
                fields: {
                    name: "d12"
                },
            },
            d13: {
                coords: [
                    [36, -49.45],
                    [34.9, -45.85],
                ],
                fields: {
                    name: "d13"
                },
            },
            d14: {
                coords: [
                    [34.6, -49.45],
                    [33.5, -45.85],
                ],
                fields: {
                    name: "d14"
                },
            },
            d15: {
                coords: [
                    [33.2, -49.45],
                    [32.1, -45.85],
                ],
                fields: {
                    name: "d15"
                },
            },
            d16: {
                coords: [
                    [33.2, -45.5],
                    [32.1, -41.7],
                ],
                fields: {
                    name: "d16"
                },
            },
            d17: {
                coords: [
                    [34.6, -45.5],
                    [33.5, -41.7],
                ],
                fields: {
                    name: "d17"
                },
            },
            d18: {
                coords: [
                    [36, -45.5],
                    [34.9, -41.7],
                ],
                fields: {
                    name: "d18"
                },
            },
            d19: {
                coords: [
                    [37.4, -45.5],
                    [36.3, -41.7],
                ],
                fields: {
                    name: "d19"
                },
            },
            d20: {
                coords: [
                    [38.7, -45.5],
                    [37.6, -41.7],
                ],
                fields: {
                    name: "d20"
                },
            },
            d21: {
                coords: [
                    [40, -45.5],
                    [38.9, -41.7],
                ],
                fields: {
                    name: "d21"
                },
            },
            d22: {
                coords: [
                    [41.3, -45.5],
                    [40.3, -41.7],
                ],
                fields: {
                    name: "d22"
                },
            },
            d23: {
                coords: [
                    [42.55, -45.5],
                    [41.55, -41.7],
                ],
                fields: {
                    name: "d23"
                },
            },
            d24: {
                coords: [
                    [43.8, -45.5],
                    [42.75, -41.7],
                ],
                fields: {
                    name: "d24"
                },
            },
            d25: {
                coords: [
                    [45, -45.5],
                    [44, -41.7],
                ],
                fields: {
                    name: "d25"
                },
            },
            d26: {
                coords: [
                    [46.15, -45.5],
                    [45.2, -41.7],
                ],
                fields: {
                    name: "d26"
                },
            },
            d27: {
                coords: [
                    [47.3, -45.5],
                    [46.35, -41.7],
                ],
                fields: {
                    name: "d27"
                },
            },
            d28: {
                coords: [
                    [48.45, -45.5],
                    [47.5, -41.7],
                ],
                fields: {
                    name: "d28"
                },
            },
            d29: {
                coords: [
                    [49.6, -45.5],
                    [48.65, -41.7],
                ],
                fields: {
                    name: "d29"
                },
            },
            d30: {
                coords: [
                    [50.65, -45.5],
                    [49.8, -41.7],
                ],
                fields: {
                    name: "d30"
                },
            },
            d31: {
                coords: [
                    [50.65, -32.5],
                    [49.8, -36.15],
                ],
                fields: {
                    name: "d31"
                },
            },
            d32: {
                coords: [
                    [49.6, -32.5],
                    [48.65, -36.15],
                ],
                fields: {
                    name: "d32"
                },
            },
            d33: {
                coords: [
                    [48.45, -32.5],
                    [47.5, -36.15],
                ],
                fields: {
                    name: "d33"
                },
            },
            d34: {
                coords: [
                    [47.3, -32.5],
                    [46.35, -36.15],
                ],
                fields: {
                    name: "d34"
                },
            },
            d35: {
                coords: [
                    [46.15, -32.5],
                    [45.2, -36.15],
                ],
                fields: {
                    name: "d35"
                },
            },
            d36: {
                coords: [
                    [45, -32.5],
                    [44, -36.15],
                ],
                fields: {
                    name: "d36"
                },
            },
            d37: {
                coords: [
                    [43.8, -32.5],
                    [42.75, -36.15],
                ],
                fields: {
                    name: "d37"
                },
            },
            d38: {
                coords: [
                    [42.55, -32.5],
                    [41.55, -36.15],
                ],
                fields: {
                    name: "d38"
                },
            },
            d39: {
                coords: [
                    [41.3, -32.5],
                    [40.3, -36.15],
                ],
                fields: {
                    name: "d39"
                },
            },
            d40: {
                coords: [
                    [40, -32.5],
                    [38.9, -36.15],
                ],
                fields: {
                    name: "d40"
                },
            },
            d41: {
                coords: [
                    [38.7, -32.5],
                    [37.6, -36.15],
                ],
                fields: {
                    name: "d41"
                },
            },
            d42: {
                coords: [
                    [37.4, -32.5],
                    [36.3, -36.15],
                ],
                fields: {
                    name: "d42"
                },
            },
            d43: {
                coords: [
                    [36, -32.5],
                    [34.9, -36.15],
                ],
                fields: {
                    name: "d43"
                },
            },
            d44: {
                coords: [
                    [33.2, -28.36],
                    [32.1, -32.2],
                ],
                fields: {
                    name: "d44"
                },
            },
            d45: {
                coords: [
                    [34.6, -28.36],
                    [33.5, -32.2],
                ],
                fields: {
                    name: "d45"
                },
            },
            d46: {
                coords: [
                    [36, -28.36],
                    [34.9, -32.2],
                ],
                fields: {
                    name: "d46"
                },
            },
            d47: {
                coords: [
                    [38.7, -28.36],
                    [37.6, -32.2],
                ],
                fields: {
                    name: "d47"
                },
            },
            d48: {
                coords: [
                    [40, -28.36],
                    [38.9, -32.2],
                ],
                fields: {
                    name: "d48"
                },
            },
            d49: {
                coords: [
                    [41.3, -28.36],
                    [40.3, -32.2],
                ],
                fields: {
                    name: "d49"
                },
            },
            d50: {
                coords: [
                    [42.55, -28.36],
                    [41.55, -32.2],
                ],
                fields: {
                    name: "d50"
                },
            },
            d51: {
                coords: [
                    [43.8, -28.36],
                    [42.75, -32.2],
                ],
                fields: {
                    name: "d51"
                },
            },
            d52: {
                coords: [
                    [45, -28.36],
                    [44, -32.2],
                ],
                fields: {
                    name: "d52"
                },
            },
            d53: {
                coords: [
                    [46.15, -28.36],
                    [45.2, -32.2],
                ],
                fields: {
                    name: "d53"
                },
            },
            d54: {
                coords: [
                    [50.45, -30.75],
                    [47.5, -32.2],
                ],
                fields: {
                    name: "d54"
                },
            },
            d_mc1: {
                coords: [
                    [37.4, -28.36],
                    [36.3, -32.2],
                ],
                fields: {
                    name: "d_mc1",
                    isMC: true
                },
            },
            d_mc2: {
                coords: [
                    [47.3, -28.36],
                    [46.35, -32.2],
                ],
                fields: {
                    name: "d_mc2",
                    isMC: true
                },
            },
            d55: {
                coords: [
                    [55.8, -31],
                    [53.7, -32.5],
                ],
                fields: {
                    name: "d55",
                    isDisabled: true
                },
            },
            d56: {
                coords: [
                    [55.8, -28.2],
                    [53.7, -29.7],
                ],
                fields: {
                    name: "d56",
                    isDisabled: true
                },
            },
        }
        let csStallData = {
            cs1: {
                coords: [
                    [28.05, -39.6],
                    [25.5, -41.2],
                ],
                fields: {
                    name: "cs1"
                },
            },
            cs2: {
                coords: [
                    [28.05, -41.6],
                    [25.5, -43.2],
                ],
                fields: {
                    name: "cs2"
                },
            },
            cs3: {
                coords: [
                    [28.05, -43.5],
                    [25.5, -45.2],
                ],
                fields: {
                    name: "cs3"
                },
            },
            cs4: {
                coords: [
                    [28.05, -45.45],
                    [25.5, -47.15],
                ],
                fields: {
                    name: "cs4"
                },
            },
            cs5: {
                coords: [
                    [28.95, -47.45],
                    [25.4, -49.1],
                ],
                fields: {
                    name: "cs5",
                    isElectric: true
                },
            },
            cs6: {
                coords: [
                    [28.95, -49.4],
                    [25.4, -51.0],
                ],
                fields: {
                    name: "cs6",
                    isElectric: true
                },
            },
            cs7: {
                coords: [
                    [28.95, -51.4],
                    [25.4, -53.0],
                ],
                fields: {
                    name: "cs7",
                    isElectric: true
                },
            },
            cs8: {
                coords: [
                    [28.95, -53.4],
                    [25.4, -55.0],
                ],
                fields: {
                    name: "cs8",
                    isElectric: true
                },
            },
        }
        let cnStallData = {
            cn1: {
                coords: [
                    [29.8, -55.5],
                    [31.0, -59],
                ],
                fields: {
                    name: "cn1"
                },
            },
            cn2: {
                coords: [
                    [31.3, -55.5],
                    [32.4, -59],
                ],
                fields: {
                    name: "cn2"
                },
            },
            cn3: {
                coords: [
                    [32.7, -55.5],
                    [33.8, -59],
                ],
                fields: {
                    name: "cn3"
                },
            },
            cn4: {
                coords: [
                    [34.1, -55.5],
                    [35.2, -59],
                ],
                fields: {
                    name: "cn4"
                },
            },
            cn5: {
                coords: [
                    [35.4, -55.5],
                    [36.5, -59],
                ],
                fields: {
                    name: "cn5"
                },
            },
            cn6: {
                coords: [
                    [36.8, -55.5],
                    [37.8, -59],
                ],
                fields: {
                    name: "cn6"
                },
            },
            cn7: {
                coords: [
                    [38.1, -55.5],
                    [39.15, -59],
                ],
                fields: {
                    name: "cn7"
                },
            },
            cn8: {
                coords: [
                    [39.40, -55.5],
                    [40.45, -59],
                ],
                fields: {
                    name: "cn8"
                },
            },
            cn9: {
                coords: [
                    [40.65, -55.5],
                    [41.65, -59],
                ],
                fields: {
                    name: "cn9"
                },
            },
            cn10: {
                coords: [
                    [41.90, -55.5],
                    [42.90, -59],
                ],
                fields: {
                    name: "cn10"
                },
            },
            cn11: {
                coords: [
                    [43.10, -55.5],
                    [44.10, -59],
                ],
                fields: {
                    name: "cn11"
                },
            },
            cn12: {
                coords: [
                    [44.30, -55.5],
                    [45.30, -59],
                ],
                fields: {
                    name: "cn12"
                },
            },
            cn13: {
                coords: [
                    [45.50, -55.5],
                    [46.40, -59],
                ],
                fields: {
                    name: "cn13"
                },
            },
            cn14: {
                coords: [
                    [46.60, -55.5],
                    [47.60, -59],
                ],
                fields: {
                    name: "cn14"
                },
            },
            cn15: {
                coords: [
                    [47.80, -55.5],
                    [48.70, -59],
                ],
                fields: {
                    name: "cn15"
                },
            },
            cn16: {
                coords: [
                    [48.9, -55.5],
                    [49.8, -59],
                ],
                fields: {
                    name: "cn16"
                },
            },
            cn17: {
                coords: [
                    [50, -55.5],
                    [50.8, -59],
                ],
                fields: {
                    name: "cn17"
                },
            },
            cn18: {
                coords: [
                    [50, -59.3],
                    [50.8, -62.9],
                ],
                fields: {
                    name: "cn18"
                },
            },
            cn19: {
                coords: [
                    [48.9, -59.3],
                    [49.8, -62.9],
                ],
                fields: {
                    name: "cn19"
                },
            },
            cn20: {
                coords: [
                    [47.80, -59.3],
                    [48.70, -62.9],
                ],
                fields: {
                    name: "cn20"
                },
            },
            cn21: {
                coords: [
                    [46.60, -59.3],
                    [47.60, -62.9],
                ],
                fields: {
                    name: "cn21"
                },
            },
        }
        let cwStallData = {
            cw1: {
                coords: [
                    [55.5, -77.2],
                    [53.5, -79],
                ],
                fields: {
                    name: "cw1"
                },
            },
            cw2: {
                coords: [
                    [55.6, -75.2],
                    [53.6, -77],
                ],
                fields: {
                    name: "cw2:"
                },
            },
            cw3: {
                coords: [
                    [55.7, -73.2],
                    [53.7, -75],
                ],
                fields: {
                    name: "cw3"
                },
            },
            cw4: {
                coords: [
                    [55.8, -71.3],
                    [53.8, -73.05],
                ],
                fields: {
                    name: "cw4"
                },
            },
            cw5: {
                coords: [
                    [55.9, -69.4],
                    [53.8, -71.1],
                ],
                fields: {
                    name: "cw5"
                },
            },
            cw6: {
                coords: [
                    [55.9, -67.57],
                    [53.82, -69.15],
                ],
                fields: {
                    name: "cw6"
                },
            },
            cw7: {
                coords: [
                    [55.9, -65.8],
                    [53.82, -67.25],
                ],
                fields: {
                    name: "cw7"
                },
            },
            cw8: {
                coords: [
                    [55.9, -64.0],
                    [53.82, -65.45],
                ],
                fields: {
                    name: "cw8"
                },
            },
            cw9: {
                coords: [
                    [55.9, -62.2],
                    [53.82, -63.65],
                ],
                fields: {
                    name: "cw9"
                },
            },
            cw10: {
                coords: [
                    [55.9, -60.3],
                    [53.82, -61.85],
                ],
                fields: {
                    name: "cw10"
                },
            },
            cw11: {
                coords: [
                    [55.9, -58.5],
                    [53.82, -60],
                ],
                fields: {
                    name: "cw11"
                },
            },
            cw12: {
                coords: [
                    [55.9, -56.7],
                    [53.82, -58.2],
                ],
                fields: {
                    name: "cw12"
                },
            },
            cw13: {
                coords: [
                    [55.9, -54.9],
                    [53.82, -56.4],
                ],
                fields: {
                    name: "cw13"
                },
            },
            cw14: {
                coords: [
                    [55.9, -53.1],
                    [53.82, -54.6],
                ],
                fields: {
                    name: "cw14"
                },
            },
            cw15: {
                coords: [
                    [55.9, -51.2],
                    [53.82, -52.7],
                ],
                fields: {
                    name: "cw15"
                },
            },
            cw16: {
                coords: [
                    [55.9, -49.4],
                    [53.82, -50.9],
                ],
                fields: {
                    name: "cw16"
                },
            },
            cw17: {
                coords: [
                    [55.9, -47.6],
                    [53.82, -49.1],
                ],
                fields: {
                    name: "cw17"
                },
            },
            cw18: {
                coords: [
                    [55.9, -45.8],
                    [53.82, -47.3],
                ],
                fields: {
                    name: "cw18"
                },
            },
            cw19: {
                coords: [
                    [55.9, -44.0],
                    [53.82, -45.5],
                ],
                fields: {
                    name: "cw19"
                },
            },
            cw20: {
                coords: [
                    [55.9, -42.2],
                    [53.82, -43.7],
                ],
                fields: {
                    name: "cw20"
                },
            },
            cw21: {
                coords: [
                    [48.6, -83.9],
                    [46.4, -85.4],
                ],
                fields: {
                    name: "cw21"
                },
            },
            cw22: {
                coords: [
                    [48.6, -82.1],
                    [46.4, -83.6],
                ],
                fields: {
                    name: "cw22"
                },
            },
            cw23: {
                coords: [
                    [48.6, -80.3],
                    [46.4, -81.8],
                ],
                fields: {
                    name: "cw23"
                },
            },
            cw24: {
                coords: [
                    [48.6, -78.5],
                    [46.4, -80.0],
                ],
                fields: {
                    name: "cw24"
                },
            },
            cw25: {
                coords: [
                    [48.6, -76.7],
                    [46.4, -78.2],
                ],
                fields: {
                    name: "cw25"
                },
            },
            cw26: {
                coords: [
                    [44.6, -76.4],
                    [46.75, -74.9],
                ],
                fields: {
                    name: "cw26"
                },
            },
            cw27: {
                coords: [
                    [44.6, -74.6],
                    [46.75, -73.1],
                ],
                fields: {
                    name: "cw27"
                },
            },
            cw28: {
                coords: [
                    [44.6, -72.8],
                    [46.75, -71.3],
                ],
                fields: {
                    name: "cw28"
                },
            },
            cw29: {
                coords: [
                    [44.6, -71.0],
                    [46.75, -69.5],
                ],
                fields: {
                    name: "cw29"
                },
            },
            cw30: {
                coords: [
                    [44.6, -69.2],
                    [46.75, -67.7],
                ],
                fields: {
                    name: "cw30"
                },
            },
            cw31: {
                coords: [
                    [44.6, -67.4],
                    [46.75, -65.9],
                ],
                fields: {
                    name: "cw31"
                },
            },
            cw32: {
                coords: [
                    [44.6, -65.6],
                    [46.75, -64.1],
                ],
                fields: {
                    name: "cw32"
                },
            },
        }
        let cStallData = {
            c1: {
                coords: [
                    [12.2, -79.7],
                    [15.1, -77.8],
                ],
                fields: {
                    name: "c1"
                },
            },
            c2: {
                coords: [
                    [12.2, -77.7],
                    [15.1, -75.8],
                ],
                fields: {
                    name: "c2"
                },
            },
            c3: {
                coords: [
                    [12.2, -75.7],
                    [15.1, -73.8],
                ],
                fields: {
                    name: "c3"
                },
            },
            c4: {
                coords: [
                    [12.2, -73.7],
                    [15.1, -71.8],
                ],
                fields: {
                    name: "c4"
                },
            },
            c5: {
                coords: [
                    [12.2, -71.7],
                    [15.1, -69.8],
                ],
                fields: {
                    name: "c5"
                },
            },
            c6: {
                coords: [
                    [12.2, -69.7],
                    [15.1, -67.8],
                ],
                fields: {
                    name: "c6"
                },
            },
            c7: {
                coords: [
                    [12.2, -67.7],
                    [15.1, -65.8],
                ],
                fields: {
                    name: "c7"
                },
            },
            c8: {
                coords: [
                    [12.2, -65.7],
                    [15.1, -63.8],
                ],
                fields: {
                    name: "c8"
                },
            },
            c9: {
                coords: [
                    [12.2, -63.7],
                    [15.1, -61.8],
                ],
                fields: {
                    name: "c9"
                },
            },
            c10: {
                coords: [
                    [16.0, -58.0],
                    [14.5, -61.5],
                ],
                fields: {
                    name: "c10"
                },
            },
            c11: {
                coords: [
                    [14.2, -58.0],
                    [12.7, -61.5],
                ],
                fields: {
                    name: "c11"
                },
            },
            c12: {
                coords: [
                    [3.5, -94.9],
                    [7.5, -93.0],
                ],
                fields: {
                    name: "c12"
                },
            },
            c13: {
                coords: [
                    [3.5, -92.9],
                    [7.5, -91.0],
                ],
                fields: {
                    name: "c13"
                },
            },
            c14: {
                coords: [
                    [3.5, -90.9],
                    [7.5, -89.0],
                ],
                fields: {
                    name: "c14"
                },
            },
            c15: {
                coords: [
                    [3.5, -88.9],
                    [7.5, -87.0],
                ],
                fields: {
                    name: "c15"
                },
            },
            c16: {
                coords: [
                    [3.5, -86.9],
                    [7.5, -85.0],
                ],
                fields: {
                    name: "c16"
                },
            },
            c17: {
                coords: [
                    [3.5, -84.9],
                    [7.5, -83.0],
                ],
                fields: {
                    name: "c17"
                },
            },
            c18: {
                coords: [
                    [3.5, -82.9],
                    [7.5, -81.0],
                ],
                fields: {
                    name: "c18"
                },
            },
            c19: {
                coords: [
                    [3.5, -80.9],
                    [7.5, -79.0],
                ],
                fields: {
                    name: "c19"
                },
            },
            c20: {
                coords: [
                    [3.5, -78.9],
                    [7.5, -77.0],
                ],
                fields: {
                    name: "c20"
                },
            },
            c21: {
                coords: [
                    [3.5, -76.9],
                    [7.5, -75.0],
                ],
                fields: {
                    name: "c21"
                },
            },
            c22: {
                coords: [
                    [3.5, -74.9],
                    [7.5, -73.0],
                ],
                fields: {
                    name: "c22"
                },
            },
            c23: {
                coords: [
                    [3.5, -72.9],
                    [7.5, -71.0],
                ],
                fields: {
                    name: "c23"
                },
            },
            c24: {
                coords: [
                    [3.5, -70.9],
                    [7.5, -69.0],
                ],
                fields: {
                    name: "c24"
                },
            },
            c25: {
                coords: [
                    [3.5, -68.9],
                    [7.5, -67.0],
                ],
                fields: {
                    name: "c25"
                },
            },
            c26: {
                coords: [
                    [3.5, -66.9],
                    [7.5, -65.0],
                ],
                fields: {
                    name: "c26"
                },
            },
            c27: {
                coords: [
                    [3.5, -64.9],
                    [7.5, -63.0],
                ],
                fields: {
                    name: "c27"
                },
            },
            c28: {
                coords: [
                    [3.5, -62.9],
                    [7.5, -61.0],
                ],
                fields: {
                    name: "c28"
                },
            },
            c29: {
                coords: [
                    [-0.6, -94.9],
                    [3.4, -93.0],
                ],
                fields: {
                    name: "c29"
                },
            },
            c30: {
                coords: [
                    [-0.6, -92.9],
                    [3.4, -91.0],
                ],
                fields: {
                    name: "c30"
                },
            },
            c31: {
                coords: [
                    [-0.6, -90.9],
                    [3.4, -89.0],
                ],
                fields: {
                    name: "c31"
                },
            },
            c32: {
                coords: [
                    [-0.6, -88.9],
                    [3.4, -87.0],
                ],
                fields: {
                    name: "c32"
                },
            },
            c33: {
                coords: [
                    [-0.6, -86.9],
                    [3.4, -85.0],
                ],
                fields: {
                    name: "c33"
                },
            },
            c34: {
                coords: [
                    [-0.6, -84.9],
                    [3.4, -83.0],
                ],
                fields: {
                    name: "c34"
                },
            },
            c35: {
                coords: [
                    [-0.6, -82.9],
                    [3.4, -81.0],
                ],
                fields: {
                    name: "c35"
                },
            },
            c36: {
                coords: [
                    [-0.6, -80.9],
                    [3.4, -79.0],
                ],
                fields: {
                    name: "c36"
                },
            },
            c37: {
                coords: [
                    [-0.6, -78.9],
                    [3.4, -77.0],
                ],
                fields: {
                    name: "c37"
                },
            },
            c38: {
                coords: [
                    [-0.6, -76.9],
                    [3.4, -75.0],
                ],
                fields: {
                    name: "c38"
                },
            },
            c39: {
                coords: [
                    [-0.6, -74.9],
                    [3.4, -73.0],
                ],
                fields: {
                    name: "c39"
                },
            },
            c40: {
                coords: [
                    [-0.6, -72.9],
                    [3.4, -71.0],
                ],
                fields: {
                    name: "c40"
                },
            },
            c41: {
                coords: [
                    [-0.6, -70.9],
                    [3.4, -69.0],
                ],
                fields: {
                    name: "c41"
                },
            },
            c42: {
                coords: [
                    [-0.6, -68.9],
                    [3.4, -67.0],
                ],
                fields: {
                    name: "c42"
                },
            },
            c43: {
                coords: [
                    [-0.6, -66.9],
                    [3.4, -65.0],
                ],
                fields: {
                    name: "c43"
                },
            },
            c44: {
                coords: [
                    [-0.6, -64.9],
                    [3.4, -63.0],
                ],
                fields: {
                    name: "c44"
                },
            },
            c45: {
                coords: [
                    [-0.6, -62.9],
                    [3.4, -61.0],
                ],
                fields: {
                    name: "c45"
                },
            },
            c46: {
                coords: [
                    [-8.2, -94.9],
                    [-4.7, -93.0],
                ],
                fields: {
                    name: "c46"
                },
            },
            c47: {
                coords: [
                    [-8.2, -92.9],
                    [-4.7, -91.0],
                ],
                fields: {
                    name: "c47"
                },
            },
            c48: {
                coords: [
                    [-8.2, -90.9],
                    [-4.7, -89.0],
                ],
                fields: {
                    name: "c48"
                },
            },
            c49: {
                coords: [
                    [-8.2, -88.9],
                    [-4.7, -87.0],
                ],
                fields: {
                    name: "c49"
                },
            },
            c50: {
                coords: [
                    [-8.2, -86.9],
                    [-4.7, -85.0],
                ],
                fields: {
                    name: "c50"
                },
            },
            c51: {
                coords: [
                    [-8.2, -84.9],
                    [-4.7, -83.0],
                ],
                fields: {
                    name: "c51"
                },
            },
            c52: {
                coords: [
                    [-8.2, -72.9],
                    [-4.7, -71.0],
                ],
                fields: {
                    name: "c52"
                },
            },
            c53: {
                coords: [
                    [-8.2, -70.9],
                    [-4.7, -69.0],
                ],
                fields: {
                    name: "c53"
                },
            },
            c54: {
                coords: [
                    [-8.2, -68.9],
                    [-4.7, -67.0],
                ],
                fields: {
                    name: "c54"
                },
            },
            c55: {
                coords: [
                    [-8.2, -66.9],
                    [-4.7, -65.0],
                ],
                fields: {
                    name: "c55"
                },
            },
            c56: {
                coords: [
                    [-8.2, -64.9],
                    [-4.7, -63.0],
                ],
                fields: {
                    name: "c56"
                },
            },
            c57: {
                coords: [
                    [-8.2, -62.9],
                    [-4.7, -61.0],
                ],
                fields: {
                    name: "c57"
                },
            },
            c58: {
                coords: [
                    [-8.2, -60.9],
                    [-4.7, -59.0],
                ],
                fields: {
                    name: "c58"
                },
            },
            c59: {
                coords: [
                    [-8.2, -58.9],
                    [-4.7, -57.0],
                ],
                fields: {
                    name: "c59"
                },
            },
            c60: {
                coords: [
                    [-8.2, -56.9],
                    [-4.7, -55.0],
                ],
                fields: {
                    name: "c60"
                },
            },
            c61: {
                coords: [
                    [-8.2, -54.9],
                    [-4.7, -53.0],
                ],
                fields: {
                    name: "c61"
                },
            },
            c62: {
                coords: [
                    [-8.2, -52.9],
                    [-4.7, -51.0],
                ],
                fields: {
                    name: "c62"
                },
            },
            c63: {
                coords: [
                    [-8.2, -50.9],
                    [-4.7, -49.0],
                ],
                fields: {
                    name: "c63"
                },
            },
            c64: {
                coords: [
                    [-8.2, -48.9],
                    [-4.7, -47.0],
                ],
                fields: {
                    name: "c64"
                },
            },
            c65: {
                coords: [
                    [-8.2, -46.9],
                    [-4.7, -45.0],
                ],
                fields: {
                    name: "c65"
                },
            },
            c66: {
                coords: [
                    [-8.2, -44.9],
                    [-4.7, -43.0],
                ],
                fields: {
                    name: "c66"
                },
            },
            c66_2: {
                coords: [
                    [-8.2, -42.9],
                    [-4.7, -41.0],
                ],
                fields: {
                    name: "c67"
                },
            },
            c67: {
                coords: [
                    [23.2, -50.0],
                    [21.7, -53.5],
                ],
                fields: {
                    name: "c67"
                },
            },
            c68: {
                coords: [
                    [21.4, -50.0],
                    [19.9, -53.5],
                ],
                fields: {
                    name: "c68"
                },
            },
            c69: {
                coords: [
                    [19.6, -50.0],
                    [18.1, -53.5],
                ],
                fields: {
                    name: "c69"
                },
            },
            c70: {
                coords: [
                    [17.8, -50.0],
                    [16.3, -53.5],
                ],
                fields: {
                    name: "c70"
                },
            },
            c71: {
                coords: [
                    [16.0, -50.0],
                    [14.5, -53.5],
                ],
                fields: {
                    name: "c71"
                },
            },
            c72: {
                coords: [
                    [14.2, -50.0],
                    [12.7, -53.5],
                ],
                fields: {
                    name: "c72"
                },
            },
            c73: {
                coords: [
                    [12.4, -50.0],
                    [10.9, -53.5],
                ],
                fields: {
                    name: "c73"
                },
            },
            c74: {
                coords: [
                    [10.6, -50.0],
                    [9.1, -53.5],
                ],
                fields: {
                    name: "c74"
                },
            },
            c75: {
                coords: [
                    [8.8, -50.0],
                    [7.3, -53.5],
                ],
                fields: {
                    name: "c75"
                },
            },
            c76: {
                coords: [
                    [7.0, -50.0],
                    [5.5, -53.5],
                ],
                fields: {
                    name: "c76"
                },
            },
            c77: {
                coords: [
                    [5.2, -50.0],
                    [3.7, -53.5],
                ],
                fields: {
                    name: "c77"
                },
            },
            c78: {
                coords: [
                    [3.4, -50.0],
                    [1.9, -53.5],
                ],
                fields: {
                    name: "c78"
                },
            },
            c79: {
                coords: [
                    [23.2, -46.3],
                    [21.7, -49.8],
                ],
                fields: {
                    name: "c79"
                },
            },
            c80: {
                coords: [
                    [21.4, -46.3],
                    [19.9, -49.8],
                ],
                fields: {
                    name: "c80"
                },
            },
            c81: {
                coords: [
                    [19.6, -46.3],
                    [18.1, -49.8],
                ],
                fields: {
                    name: "c81"
                },
            },
            c82: {
                coords: [
                    [17.8, -46.3],
                    [16.3, -49.8],
                ],
                fields: {
                    name: "c82"
                },
            },
            c83: {
                coords: [
                    [16.0, -46.3],
                    [14.5, -49.8],
                ],
                fields: {
                    name: "c83"
                },
            },
            c84: {
                coords: [
                    [14.2, -46.3],
                    [12.7, -49.8],
                ],
                fields: {
                    name: "c84"
                },
            },
            c85: {
                coords: [
                    [12.4, -46.3],
                    [10.9, -49.8],
                ],
                fields: {
                    name: "c85"
                },
            },
            c86: {
                coords: [
                    [10.6, -46.3],
                    [9.1, -49.8],
                ],
                fields: {
                    name: "c86"
                },
            },
            c87: {
                coords: [
                    [8.8, -46.3],
                    [7.3, -49.8],
                ],
                fields: {
                    name: "c87"
                },
            },
            c88: {
                coords: [
                    [7.0, -46.3],
                    [5.5, -49.8],
                ],
                fields: {
                    name: "c88"
                },
            },
            c89: {
                coords: [
                    [5.2, -46.3],
                    [3.7, -49.8],
                ],
                fields: {
                    name: "c89"
                },
            },
            c90: {
                coords: [
                    [3.4, -46.3],
                    [1.9, -49.8],
                ],
                fields: {
                    name: "c90"
                },
            },
            c91: {
                coords: [
                    [25.0, -40.1],
                    [23.5, -43.6],
                ],
                fields: {
                    name: "c91"
                },
            },
            c92: {
                coords: [
                    [23.2, -40.1],
                    [21.7, -43.6],
                ],
                fields: {
                    name: "c92"
                },
            },
            c93: {
                coords: [
                    [21.4, -40.1],
                    [19.9, -43.6],
                ],
                fields: {
                    name: "c93"
                },
            },
            c94: {
                coords: [
                    [19.6, -40.1],
                    [18.1, -43.6],
                ],
                fields: {
                    name: "c94"
                },
            },
            c95: {
                coords: [
                    [17.8, -40.1],
                    [16.3, -43.6],
                ],
                fields: {
                    name: "c95"
                },
            },
            c96: {
                coords: [
                    [16.0, -40.1],
                    [14.5, -43.6],
                ],
                fields: {
                    name: "c96"
                },
            },
            c97: {
                coords: [
                    [14.2, -40.1],
                    [12.7, -43.6],
                ],
                fields: {
                    name: "c97"
                },
            },
            c98: {
                coords: [
                    [12.4, -40.1],
                    [10.9, -43.6],
                ],
                fields: {
                    name: "c98"
                },
            },
            c99: {
                coords: [
                    [10.6, -40.1],
                    [9.1, -43.6],
                ],
                fields: {
                    name: "c99"
                },
            },
            c100: {
                coords: [
                    [8.8, -40.1],
                    [7.3, -43.6],
                ],
                fields: {
                    name: "c100"
                },
            },
            c101: {
                coords: [
                    [7.0, -40.1],
                    [5.5, -43.6],
                ],
                fields: {
                    name: "c101"
                },
            },
            c102: {
                coords: [
                    [5.2, -40.1],
                    [3.7, -43.6],
                ],
                fields: {
                    name: "c102"
                },
            },
            c103: {
                coords: [
                    [3.4, -40.1],
                    [1.9, -43.6],
                ],
                fields: {
                    name: "c103"
                },
            },
            c104: {
                coords: [
                    [1.6, -40.1],
                    [0.1, -43.6],
                ],
                fields: {
                    name: "c104"
                },
            },
            c105: {
                coords: [
                    [-0.2, -40.1],
                    [-1.7, -43.6],
                ],
                fields: {
                    name: "c105"
                },
            },
            c106: {
                coords: [
                    [-2.0, -40.1],
                    [-3.5, -43.6],
                ],
                fields: {
                    name: "c106"
                },
            },
        }
        let jStallData = {
            j1: {
                coords: [
                    [24.2, -9.2],
                    [27.0, -7.5],
                ],
                fields: {
                    name: "j1"
                },
            },
            j2: {
                coords: [
                    [24.2, -7.2],
                    [27.0, -5.5],
                ],
                fields: {
                    name: "j2"
                },
            },
            j3: {
                coords: [
                    [26.2, -5.1],
                    [27.6, -1.4],
                ],
                fields: {
                    name: "j3"
                },
            },
            j4: {
                coords: [
                    [24.2, -1.05],
                    [27.0, 0.5],
                ],
                fields: {
                    name: "j4"
                },
            },
            j5: {
                coords: [
                    [24.2, 0.8],
                    [27.0, 2.3],
                ],
                fields: {
                    name: "j5"
                },
            },
            j6: {
                coords: [
                    [24.2, 6.6],
                    [27.0, 8.3],
                ],
                fields: {
                    name: "j6"
                },
            },
            j7: {
                coords: [
                    [24.2, 8.6],
                    [27.0, 10.3],
                ],
                fields: {
                    name: "j7"
                },
            },
            j8: {
                coords: [
                    [24.2, 10.6],
                    [27.0, 12.3],
                ],
                fields: {
                    name: "j8"
                },
            },
            j9: {
                coords: [
                    [24.2, 12.6],
                    [27.7, 14.3],
                ],
                fields: {
                    name: "j9"
                },
            },
        }
        let iStallData = {
            i1: {
                coords: [
                    [24.2, 37.9],
                    [27.7, 39.5],
                ],
                fields: {
                    name: "i1"
                },
            },
            i2: {
                coords: [
                    [24.2, 39.8],
                    [27.7, 41.5],
                ],
                fields: {
                    name: "i2"
                },
            },
        }
        let hStallData = {
            h1: {
                coords: [
                    [24.2, 62.3],
                    [27.7, 63.9],
                ],
                fields: {
                    name: "h1"
                },
            },
            h2: {
                coords: [
                    [24.2, 64.2],
                    [27.7, 65.8],
                ],
                fields: {
                    name: "h2"
                },
            },
            h3: {
                coords: [
                    [24.2, 66.2],
                    [27.7, 67.8],
                ],
                fields: {
                    name: "h3"
                },
            },
            h4: {
                coords: [
                    [24.2, 76.1],
                    [27.7, 77.7],
                ],
                fields: {
                    name: "h4"
                },
            },
            h5: {
                coords: [
                    [22.5, 75.9],
                    [23.9, 79.0],
                ],
                fields: {
                    name: "h5"
                },
            },
            h6: {
                coords: [
                    [20.9, 75.9],
                    [22.2, 79.0],
                ],
                fields: {
                    name: "h6"
                },
            },
            h7: {
                coords: [
                    [19.3, 75.9],
                    [20.6, 79.0],
                ],
                fields: {
                    name: "h7"
                },
            },
            h8: {
                coords: [
                    [17.6, 75.9],
                    [19.0, 79.0],
                ],
                fields: {
                    name: "h8"
                },
            },
            h9: {
                coords: [
                    [15.9, 75.9],
                    [17.3, 79.0],
                ],
                fields: {
                    name: "h9"
                },
            },
            h10: {
                coords: [
                    [14.2, 75.9],
                    [15.6, 79.0],
                ],
                fields: {
                    name: "h10"
                },
            },
            h11: {
                coords: [
                    [12.5, 75.9],
                    [13.9, 79.0],
                ],
                fields: {
                    name: "h11"
                },
            },
            h12: {
                coords: [
                    [10.8, 75.9],
                    [12.2, 79.0],
                ],
                fields: {
                    name: "h12"
                },
            },
            h13: {
                coords: [
                    [9.0, 75.9],
                    [10.5, 79.0],
                ],
                fields: {
                    name: "h13"
                },
            },
            h14: {
                coords: [
                    [7.3, 75.9],
                    [8.7, 79.0],
                ],
                fields: {
                    name: "h14"
                },
            },
            h15: {
                coords: [
                    [5.6, 75.9],
                    [7.0, 79.0],
                ],
                fields: {
                    name: "h15"
                },
            },
            h16: {
                coords: [
                    [3.8, 75.9],
                    [5.2, 79.0],
                ],
                fields: {
                    name: "h16"
                },
            },
            h17: {
                coords: [
                    [2.0, 75.9],
                    [3.5, 79.0],
                ],
                fields: {
                    name: "h17"
                },
            },
            h18: {
                coords: [
                    [0.3, 75.9],
                    [1.7, 79.0],
                ],
                fields: {
                    name: "h18"
                },
            },
            h19: {
                coords: [
                    [-1.5, 75.9],
                    [0.0, 79.0],
                ],
                fields: {
                    name: "h19"
                },
            },
            h20: {
                coords: [
                    [-3.2, 75.9],
                    [-1.8, 79.0],
                ],
                fields: {
                    name: "h20"
                },
            },
            h21: {
                coords: [
                    [-5.0, 75.9],
                    [-3.6, 79.0],
                ],
                fields: {
                    name: "h21"
                },
            },
            h22: {
                coords: [
                    [-6.8, 75.9],
                    [-5.4, 79.0],
                ],
                fields: {
                    name: "h22"
                },
            },
            h23: {
                coords: [
                    [-8.5, 75.9],
                    [-7.1, 79.0],
                ],
                fields: {
                    name: "h23"
                },
            },
        }
        let gStallData = {
            g1: {
                coords: [
                    [-6.6, 95.4],
                    [-2.8, 96.9],
                ],
                fields: {
                    name: "g1"
                },
            },
            g2: {
                coords: [
                    [-6.6, 97.3],
                    [-2.8, 98.6],
                ],
                fields: {
                    name: "g2",
                    isElectric: true
                },
            },
            g3: {
                coords: [
                    [-6.6, 98.9],
                    [-2.8, 100.2],
                ],
                fields: {
                    name: "g3",
                    isElectric: true
                },
            },
            g4: {
                coords: [
                    [-6.6, 100.6],
                    [-2.8, 101.8],
                ],
                fields: {
                    name: "g4",
                    isElectric: true
                },
            },
            g5: {
                coords: [
                    [-6.6, 102.1],
                    [-2.8, 103.5],
                ],
                fields: {
                    name: "g5"
                },
            },
            g6: {
                coords: [
                    [-6.6, 103.8],
                    [-2.8, 105.1],
                ],
                fields: {
                    name: "g6"
                },
            },
            g7: {
                coords: [
                    [-6.6, 105.4],
                    [-2.8, 106.7],
                ],
                fields: {
                    name: "g7"
                },
            },
            g8: {
                coords: [
                    [-6.6, 107.1],
                    [-2.8, 108.4],
                ],
                fields: {
                    name: "g8"
                },
            },
            g9: {
                coords: [
                    [-6.6, 108.6],
                    [-2.8, 110.0],
                ],
                fields: {
                    name: "g9"
                },
            },
            g10: {
                coords: [
                    [-6.6, 110.3],
                    [-2.8, 111.7],
                ],
                fields: {
                    name: "g10"
                },
            },
            g11: {
                coords: [
                    [-3.6, 123.7],
                    [-0.2, 125.1],
                ],
                fields: {
                    name: "g11"
                },
            },
            g12: {
                coords: [
                    [-3.6, 125.4],
                    [-0.2, 126.8],
                ],
                fields: {
                    name: "g12"
                },
            },
            g13: {
                coords: [
                    [-3.6, 127.1],
                    [-0.2, 128.4],
                ],
                fields: {
                    name: "g13"
                },
            },
            g14: {
                coords: [
                    [-3.6, 128.7],
                    [-0.2, 130.1],
                ],
                fields: {
                    name: "g14"
                },
            },
            g15: {
                coords: [
                    [3.2, 133],
                    [4.5, 137.4],
                ],
                fields: {
                    name: "g15"
                },
            },
            g16: {
                coords: [
                    [4.9, 133],
                    [6.2, 137.4],
                ],
                fields: {
                    name: "g16"
                },
            },
            g17: {
                coords: [
                    [6.6, 133],
                    [7.9, 137.4],
                ],
                fields: {
                    name: "g17"
                },
            },
            g18: {
                coords: [
                    [8.3, 133],
                    [9.6, 137.4],
                ],
                fields: {
                    name: "g18"
                },
            },
            g19: {
                coords: [
                    [9.9, 133],
                    [11.2, 137.4],
                ],
                fields: {
                    name: "g19"
                },
            },
            g20: {
                coords: [
                    [11.6, 133],
                    [12.9, 137.4],
                ],
                fields: {
                    name: "g20"
                },
            },
            g21: {
                coords: [
                    [13.2, 133],
                    [14.5, 137.4],
                ],
                fields: {
                    name: "g21"
                },
            },
            g22: {
                coords: [
                    [14.8, 133],
                    [16.1, 137.4],
                ],
                fields: {
                    name: "g22"
                },
            },
            g23: {
                coords: [
                    [16.5, 133],
                    [17.7, 137.4],
                ],
                fields: {
                    name: "g23"
                },
            },
            g24: {
                coords: [
                    [18.1, 133],
                    [19.3, 137.4],
                ],
                fields: {
                    name: "g24"
                },
            },
            g25: {
                coords: [
                    [19.7, 133],
                    [20.9, 137.4],
                ],
                fields: {
                    name: "g25"
                },
            },
            g26: {
                coords: [
                    [21.2, 133],
                    [22.5, 137.4],
                ],
                fields: {
                    name: "g26"
                },
            },
            g27: {
                coords: [
                    [22.8, 133],
                    [24.0, 137.4],
                ],
                fields: {
                    name: "g27"
                },
            },
            g28: {
                coords: [
                    [24.3, 133],
                    [25.6, 137.4],
                ],
                fields: {
                    name: "g28"
                },
            },
            g29: {
                coords: [
                    [25.9, 133],
                    [27.1, 137.4],
                ],
                fields: {
                    name: "g29"
                },
            },
            g30: {
                coords: [
                    [27.4, 133],
                    [28.55, 137.4],
                ],
                fields: {
                    name: "g30"
                },
            },
            g31: {
                coords: [
                    [28.85, 133],
                    [30.0, 137.4],
                ],
                fields: {
                    name: "g31"
                },
            },
            g32: {
                coords: [
                    [30.3, 133],
                    [31.5, 137.4],
                ],
                fields: {
                    name: "g32",
                    isMC: true
                },
            },
            g33: {
                coords: [
                    [37.3, 131.0],
                    [34.5, 132.5],
                ],
                fields: {
                    name: "g33"
                },
            },
            g34: {
                coords: [
                    [38.4, 129.2],
                    [35.6, 130.7],
                ],
                fields: {
                    name: "g34"
                },
            },
        }
        let fStallData = {
            f1: {
                coords: [
                    [45.0, 79.5],
                    [42.0, 81.7],
                ],
                fields: {
                    name: "f1"
                },
            },
            f2: {
                coords: [
                    [45.0, 82.0],
                    [42.0, 83.7],
                ],
                fields: {
                    name: "f2"
                },
            },
            f3: {
                coords: [
                    [45.0, 84.0],
                    [42.0, 85.7],
                ],
                fields: {
                    name: "f3"
                },
            },
            f4: {
                coords: [
                    [45.0, 86.0],
                    [42.0, 87.7],
                ],
                fields: {
                    name: "f4"
                },
            },
            f5: {
                coords: [
                    [45.0, 88.0],
                    [42.0, 89.7],
                ],
                fields: {
                    name: "f5"
                },
            },
            f6: {
                coords: [
                    [45.0, 92.1],
                    [42.0, 93.8],
                ],
                fields: {
                    name: "f6",
                    isDisabled: true
                },
            },
            f7: {
                coords: [
                    [45.0, 94.9],
                    [42.0, 96.6],
                ],
                fields: {
                    name: "f7",
                    isDisabled: true
                },
            },
            f8: {
                coords: [
                    [45.0, 96.9],
                    [42.0, 98.6],
                ],
                fields: {
                    name: "f8"
                },
            },
            f9: {
                coords: [
                    [37.3, 106.3],
                    [34.2, 108.0],
                ],
                fields: {
                    name: "f9",
                    isSmallCar: true
                },
            },
            f10: {
                coords: [
                    [37.3, 104.3],
                    [34.2, 106.0],
                ],
                fields: {
                    name: "f10"
                },
            },
            f11: {
                coords: [
                    [37.3, 102.3],
                    [34.2, 104.0],
                ],
                fields: {
                    name: "f11"
                },
            },
            f12: {
                coords: [
                    [37.3, 100.3],
                    [34.2, 102.0],
                ],
                fields: {
                    name: "f12"
                },
            },
            f13: {
                coords: [
                    [37.3, 98.4],
                    [34.2, 100.1],
                ],
                fields: {
                    name: "f13"
                },
            },
            f14: {
                coords: [
                    [37.3, 96.4],
                    [34.2, 98.1],
                ],
                fields: {
                    name: "f14"
                },
            },
            f15: {
                coords: [
                    [37.3, 94.4],
                    [34.2, 96.1],
                ],
                fields: {
                    name: "f15"
                },
            },
            f16: {
                coords: [
                    [37.3, 92.4],
                    [34.2, 94.1],
                ],
                fields: {
                    name: "f16"
                },
            },
            f17: {
                coords: [
                    [37.3, 86.0],
                    [34.2, 87.7],
                ],
                fields: {
                    name: "f17"
                },
            },
            f18: {
                coords: [
                    [37.3, 84.0],
                    [34.2, 85.7],
                ],
                fields: {
                    name: "f18"
                },
            },
            f19: {
                coords: [
                    [37.3, 82.0],
                    [34.2, 83.7],
                ],
                fields: {
                    name: "f19",
                    isElectric: true
                },
            },
            f20: {
                coords: [
                    [37.3, 79.4],
                    [34.2, 81.7],
                ],
                fields: {
                    name: "f20",
                    isElectric: true
                },
            },
        }
        let eStallData = {
            e1: {
                coords: [
                    [55.1, 34.3],
                    [54.2, 39.0],
                ],
                fields: {
                    name: "e1",
                    isDisabled: true
                },
            },
            e2: {
                coords: [
                    [53.35, 34.3],
                    [52.5, 39.0],
                ],
                fields: {
                    name: "e2",
                    isDisabled: true
                },
            },
            e3: {
                coords: [
                    [52.25, 34.3],
                    [51.3, 39.0],
                ],
                fields: {
                    name: "e3"
                },
            },
            e4: {
                coords: [
                    [43.3, 37.2],
                    [40.6, 38.8],
                ],
                fields: {
                    name: "e4"
                },
            },
            e5: {
                coords: [
                    [40.35, 34.3],
                    [39.3, 39.0],
                ],
                fields: {
                    name: "e5"
                },
            },
            e6: {
                coords: [
                    [39.05, 34.3],
                    [38.0, 39.0],
                ],
                fields: {
                    name: "e6"
                },
            },
            e7: {
                coords: [
                    [37.65, 34.3],
                    [36.55, 38.4],
                ],
                fields: {
                    name: "e7",
                    isSmallCar: true
                },
            },
            e8: {
                coords: [
                    [36.3, 34.3],
                    [35.2, 38.4],
                ],
                fields: {
                    name: "e8",
                    isSmallCar: true
                },
            },
            e9: {
                coords: [
                    [34.87, 34.3],
                    [33.78, 38.4],
                ],
                fields: {
                    name: "e9",
                    isSmallCar: true
                },
            },
            e10: {
                coords: [
                    [36.0, 45.2],
                    [34.8, 49.8],
                ],
                fields: {
                    name: "e10"
                },
            },
            e11: {
                coords: [
                    [37.5, 45.2],
                    [36.3, 49.8],
                ],
                fields: {
                    name: "e11"
                },
            },
            e12: {
                coords: [
                    [38.9, 45.2],
                    [37.7, 49.8],
                ],
                fields: {
                    name: "e12"
                },
            },
            e13: {
                coords: [
                    [40.3, 45.2],
                    [39.1, 49.8],
                ],
                fields: {
                    name: "e13"
                },
            },
            e14: {
                coords: [
                    [41.6, 45.2],
                    [40.5, 49.8],
                ],
                fields: {
                    name: "e14"
                },
            },
            e15: {
                coords: [
                    [42.95, 45.2],
                    [41.85, 49.8],
                ],
                fields: {
                    name: "e15"
                },
            },
            e16: {
                coords: [
                    [44.3, 45.2],
                    [43.2, 49.8],
                ],
                fields: {
                    name: "e16"
                },
            },
            e17: {
                coords: [
                    [45.55, 45.2],
                    [44.5, 49.8],
                ],
                fields: {
                    name: "e17"
                },
            },
            e17_2: {
                coords: [
                    [46.83, 45.2],
                    [45.8, 49.8],
                ],
                fields: {
                    name: "e17 1/2"
                },
            },
            e17_3: {
                coords: [
                    [48.4, 45.2],
                    [47.0, 49.8],
                ],
                fields: {
                    name: "e17 3/4"
                },
            },
            e18: {
                coords: [
                    [49.6, 45.2],
                    [48.6, 49.8],
                ],
                fields: {
                    name: "e18"
                },
            },
            e19: {
                coords: [
                    [50.85, 45.2],
                    [49.85, 49.8],
                ],
                fields: {
                    name: "e19"
                },
            },
            e20: {
                coords: [
                    [52.05, 45.2],
                    [51.05, 49.8],
                ],
                fields: {
                    name: "e20"
                },
            },
            e_loading_1: {
                coords: [
                    [54.35, 44.0],
                    [53.30, 51.8],
                ],
                fields: {
                    name: "loading"
                },
            },
            e_loading_2: {
                coords: [
                    [55.6, 44.0],
                    [54.6, 51.8],
                ],
                fields: {
                    name: "loading"
                },
            },
        }
        let bStallData = {
            b1: {
                coords: [
                    [71.6, 3.1],
                    [70.6, 4.6],
                ],
                fields: {
                    name: "b1"
                },
            },
            b2: {
                coords: [
                    [71.6, 1.2],
                    [70.6, 2.8],
                ],
                fields: {
                    name: "b2"
                },
            },
            b3: {
                coords: [
                    [71.6, -0.7],
                    [70.6, 0.9],
                ],
                fields: {
                    name: "b3"
                },
            },
            b4: {
                coords: [
                    [71.6, -2.5],
                    [70.6, -1.0],
                ],
                fields: {
                    name: "b4"
                },
            },
            b5: {
                coords: [
                    [71.6, -4.4],
                    [70.6, -2.8],
                ],
                fields: {
                    name: "b5"
                },
            },
            b6: {
                coords: [
                    [71.6, -6.3],
                    [70.6, -4.7],
                ],
                fields: {
                    name: "b6"
                },
            },
            b7: {
                coords: [
                    [71.6, -8.1],
                    [70.6, -6.6],
                ],
                fields: {
                    name: "b7"
                },
            },
            b8: {
                coords: [
                    [69.0, -11.7],
                    [67.6, -9.8],
                ],
                fields: {
                    name: "b8"
                },
            },
            b9: {
                coords: [
                    [69.0, -13.6],
                    [67.6, -11.9],
                ],
                fields: {
                    name: "b9"
                },
            },
            b10: {
                coords: [
                    [69.0, -15.4],
                    [67.6, -13.7],
                ],
                fields: {
                    name: "b10"
                },
            },
            b11: {
                coords: [
                    [69.0, -17.3],
                    [67.6, -15.6],
                ],
                fields: {
                    name: "b11"
                },
            },
            b12: {
                coords: [
                    [69.0, -19.2],
                    [67.6, -17.5],
                ],
                fields: {
                    name: "b12"
                },
            },
            b13: {
                coords: [
                    [69.0, -21.1],
                    [67.6, -19.4],
                ],
                fields: {
                    name: "b13"
                },
            },
            b14: {
                coords: [
                    [69.0, -23.0],
                    [67.6, -21.2],
                ],
                fields: {
                    name: "b14"
                },
            },
            b15: {
                coords: [
                    [69.0, -24.9],
                    [67.6, -23.1],
                ],
                fields: {
                    name: "b15"
                },
            },
            b16: {
                coords: [
                    [69.0, -26.8],
                    [67.6, -25.0],
                ],
                fields: {
                    name: "b16"
                },
            },
            b17: {
                coords: [
                    [69.0, -28.7],
                    [67.6, -26.9],
                ],
                fields: {
                    name: "b17"
                },
            },
            b18: {
                coords: [
                    [69.0, -30.6],
                    [67.6, -28.8],
                ],
                fields: {
                    name: "b18"
                },
            },
            b19: {
                coords: [
                    [74.5, -13.7],
                    [74.1, -17.7],
                ],
                fields: {
                    name: "b19"
                },
            },
            b20: {
                coords: [
                    [74.97, -13.7],
                    [74.57, -17.7],
                ],
                fields: {
                    name: "b20",
                    isElectric: true
                },
            },
            b21: {
                coords: [
                    [75.45, -13.7],
                    [75.07, -17.7],
                ],
                fields: {
                    name: "b21",
                    isElectric: true
                },
            },
            b22: {
                coords: [
                    [75.9, -13.7],
                    [75.53, -17.7],
                ],
                fields: {
                    name: "b22",
                    isElectric: true
                },
            },
            b23: {
                coords: [
                    [76.33, -13.7],
                    [75.98, -17.7],
                ],
                fields: {
                    name: "b23",
                    isElectric: true
                },
            },
            b24: {
                coords: [
                    [76.75, -13.7],
                    [76.4, -17.7],
                ],
                fields: {
                    name: "b24"
                },
            },
            b25: {
                coords: [
                    [77.15, -13.7],
                    [76.83, -17.7],
                ],
                fields: {
                    name: "b25"
                },
            },
            b26: {
                coords: [
                    [77.55, -13.7],
                    [77.23, -17.7],
                ],
                fields: {
                    name: "b26"
                },
            },
            b27: {
                coords: [
                    [79.0, -10.1],
                    [78.28, -11.8],
                ],
                fields: {
                    name: "b27"
                },
            },
            b28: {
                coords: [
                    [79.0, -8.2],
                    [78.28, -9.75],
                ],
                fields: {
                    name: "b28"
                },
            },
            b29: {
                coords: [
                    [79.0, -6.25],
                    [78.28, -7.8],
                ],
                fields: {
                    name: "b29"
                },
            },
            b30: {
                coords: [
                    [79.0, -4.25],
                    [78.28, -5.85],
                ],
                fields: {
                    name: "b30"
                },
            },
            b31: {
                coords: [
                    [79.0, -2.3],
                    [78.28, -3.9],
                ],
                fields: {
                    name: "b31"
                },
            },
            b32: {
                coords: [
                    [79.0, -0.35],
                    [78.28, -1.95],
                ],
                fields: {
                    name: "b32"
                },
            },
            b33: {
                coords: [
                    [79.0, 1.6],
                    [78.28, 0.0],
                ],
                fields: {
                    name: "b33"
                },
            },
            b34: {
                coords: [
                    [81.34, -16.7],
                    [80.78, -18.2],
                ],
                fields: {
                    name: "b34"
                },
            },
            b35: {
                coords: [
                    [81.34, -14.75],
                    [80.78, -16.3],
                ],
                fields: {
                    name: "b35"
                },
            },
            b36: {
                coords: [
                    [81.34, -12.85],
                    [80.78, -14.4],
                ],
                fields: {
                    name: "b36"
                },
            },
            b37: {
                coords: [
                    [81.34, -10.95],
                    [80.78, -12.5],
                ],
                fields: {
                    name: "b37"
                },
            },
            b38: {
                coords: [
                    [81.34, -9.05],
                    [80.78, -10.6],
                ],
                fields: {
                    name: "b38"
                },
            },
            b39: {
                coords: [
                    [81.34, -7.15],
                    [80.78, -8.7],
                ],
                fields: {
                    name: "b39"
                },
            },
            b40: {
                coords: [
                    [81.34, -5.25],
                    [80.78, -6.8],
                ],
                fields: {
                    name: "b40"
                },
            },
            b41: {
                coords: [
                    [81.34, -3.35],
                    [80.78, -4.9],
                ],
                fields: {
                    name: "b41"
                },
            },
            b42: {
                coords: [
                    [81.34, -1.45],
                    [80.78, -3.0],
                ],
                fields: {
                    name: "b42"
                },
            },
            b43: {
                coords: [
                    [81.34, 0.45],
                    [80.78, -1.1],
                ],
                fields: {
                    name: "b43"
                },
            },
            b44: {
                coords: [
                    [81.34, 2.35],
                    [80.78, 0.8],
                ],
                fields: {
                    name: "b44"
                },
            },
        }
        let aStallData = {
            a1: {
                coords: [
                    [70.92, -65.2],
                    [69.82, -63.7],
                ],
                fields: {
                    name: "a1"
                },
            },
            a2: {
                coords: [
                    [70.92, -67.05],
                    [69.82, -65.55],
                ],
                fields: {
                    name: "a2"
                },
            },
            a3: {
                coords: [
                    [70.92, -68.95],
                    [69.82, -67.45],
                ],
                fields: {
                    name: "a3"
                },
            },
            a4: {
                coords: [
                    [70.92, -70.8],
                    [69.82, -69.3],
                ],
                fields: {
                    name: "a4"
                },
            },
            a5: {
                coords: [
                    [70.92, -72.65],
                    [69.82, -71.15],
                ],
                fields: {
                    name: "a5"
                },
            },
            a6: {
                coords: [
                    [74.0, -72.8],
                    [73.55, -69.35],
                ],
                fields: {
                    name: "a6"
                },
            },
            a7: {
                coords: [
                    [74.55, -72.8],
                    [74.10, -69.35],
                ],
                fields: {
                    name: "a7"
                },
            },
            a8: {
                coords: [
                    [75.07, -72.8],
                    [74.65, -69.35],
                ],
                fields: {
                    name: "a8"
                },
            },
            a9: {
                coords: [
                    [75.58, -72.8],
                    [75.17, -69.35],
                ],
                fields: {
                    name: "a9"
                },
            },
            a10: {
                coords: [
                    [76.07, -72.8],
                    [75.67, -69.35],
                ],
                fields: {
                    name: "a10"
                },
            },
            a11: {
                coords: [
                    [76.55, -72.8],
                    [76.14, -69.35],
                ],
                fields: {
                    name: "a11"
                },
            },
            a12: {
                coords: [
                    [77.0, -72.8],
                    [76.62, -69.35],
                ],
                fields: {
                    name: "a12"
                },
            },
            a13: {
                coords: [
                    [77.44, -72.8],
                    [77.08, -69.35],
                ],
                fields: {
                    name: "a13"
                },
            },
            a14: {
                coords: [
                    [77.86, -72.8],
                    [77.51, -69.35],
                ],
                fields: {
                    name: "a14"
                },
            },
            a15: {
                coords: [
                    [70.15, -80.8],
                    [69.7, -77.2],
                ],
                fields: {
                    name: "a15"
                },
            },
            a16: {
                coords: [
                    [70.75, -80.8],
                    [70.25, -77.2],
                ],
                fields: {
                    name: "a16"
                },
            },
            a17: {
                coords: [
                    [71.3, -80.8],
                    [70.85, -77.2],
                ],
                fields: {
                    name: "a17"
                },
            },
            a18: {
                coords: [
                    [71.8, -80.8],
                    [71.4, -77.2],
                ],
                fields: {
                    name: "a18"
                },
            },
            a19: {
                coords: [
                    [72.33, -80.8],
                    [71.9, -77.2],
                ],
                fields: {
                    name: "a19"
                },
            },
            a20: {
                coords: [
                    [72.86, -80.8],
                    [72.43, -77.2],
                ],
                fields: {
                    name: "a20"
                },
            },
            a21: {
                coords: [
                    [73.33, -80.8],
                    [72.96, -77.2],
                ],
                fields: {
                    name: "a21"
                },
            },
            a22: {
                coords: [
                    [73.80, -80.8],
                    [73.42, -77.2],
                ],
                fields: {
                    name: "a22"
                },
            },
            a23: {
                coords: [
                    [74.27, -80.8],
                    [73.89, -77.2],
                ],
                fields: {
                    name: "a23"
                },
            },
            a24: {
                coords: [
                    [74.73, -80.8],
                    [74.36, -77.2],
                ],
                fields: {
                    name: "a24"
                },
            },
            a25: {
                coords: [
                    [75.16, -80.8],
                    [74.83, -77.2],
                ],
                fields: {
                    name: "a25"
                },
            },
            a26: {
                coords: [
                    [75.60, -80.8],
                    [75.25, -77.2],
                ],
                fields: {
                    name: "a26"
                },
            },
            a27: {
                coords: [
                    [75.16, -84.95],
                    [74.83, -81.1],
                ],
                fields: {
                    name: "a27"
                },
            },
            a28: {
                coords: [
                    [74.73, -84.95],
                    [74.36, -81.1],
                ],
                fields: {
                    name: "a28"
                },
            },
            a29: {
                coords: [
                    [74.27, -84.95],
                    [73.89, -81.1],
                ],
                fields: {
                    name: "a29"
                },
            },
            a30: {
                coords: [
                    [73.80, -84.95],
                    [73.42, -81.1],
                ],
                fields: {
                    name: "a30"
                },
            },
            a31: {
                coords: [
                    [73.33, -84.95],
                    [72.96, -81.1],
                ],
                fields: {
                    name: "a31"
                },
            },
            a32: {
                coords: [
                    [72.86, -84.95],
                    [72.43, -81.1],
                ],
                fields: {
                    name: "a32"
                },
            },
            a33: {
                coords: [
                    [72.33, -84.95],
                    [71.9, -81.1],
                ],
                fields: {
                    name: "a33"
                },
            },
            a34: {
                coords: [
                    [71.8, -84.95],
                    [71.4, -81.1],
                ],
                fields: {
                    name: "a34"
                },
            },
            a35: {
                coords: [
                    [71.3, -84.95],
                    [70.85, -81.1],
                ],
                fields: {
                    name: "a35"
                },
            },
            a36: {
                coords: [
                    [70.75, -84.95],
                    [70.25, -81.1],
                ],
                fields: {
                    name: "a36"
                },
            },
            a37: {
                coords: [
                    [70.15, -84.95],
                    [69.7, -81.1],
                ],
                fields: {
                    name: "a37"
                },
            },
            a38: {
                coords: [
                    [70.15, -94.2],
                    [69.65, -90],
                ],
                fields: {
                    name: "a38"
                },
            },
            a39: {
                coords: [
                    [70.75, -94.2],
                    [70.27, -90],
                ],
                fields: {
                    name: "a39"
                },
            },
            a40: {
                coords: [
                    [71.32, -94.2],
                    [70.84, -90],
                ],
                fields: {
                    name: "a40"
                },
            },
            a41: {
                coords: [
                    [71.88, -94.2],
                    [71.41, -90],
                ],
                fields: {
                    name: "a41"
                },
            },
            a42: {
                coords: [
                    [73, -94.2],
                    [72.5, -90],
                ],
                fields: {
                    name: "a42"
                },
            },
            a43: {
                coords: [
                    [73.60, -94.2],
                    [73.09, -90],
                ],
                fields: {
                    name: "a43"
                },
            },
            a44: {
                coords: [
                    [74.19, -94.2],
                    [73.69, -90],
                ],
                fields: {
                    name: "a44"
                },
            },
            a45: {
                coords: [
                    [74.75, -94.2],
                    [74.29, -90],
                ],
                fields: {
                    name: "a45"
                },
            },
            a46: {
                coords: [
                    [75.28, -94.2],
                    [74.84, -90],
                ],
                fields: {
                    name: "a46"
                },
            },
            a47: {
                coords: [
                    [75.82, -94.2],
                    [75.38, -90],
                ],
                fields: {
                    name: "a47"
                },
            },
            a48: {
                coords: [
                    [76.32, -94.2],
                    [75.90, -90],
                ],
                fields: {
                    name: "a48"
                },
            },
            a49: {
                coords: [
                    [76.81, -94.2],
                    [76.40, -90],
                ],
                fields: {
                    name: "a49"
                },
            },
            a50: {
                coords: [
                    [77.7, -90],
                    [76.9, -88.35],
                ],
                fields: {
                    name: "a50"
                },
            },
            a51: {
                coords: [
                    [77.9, -88],
                    [77.1, -86.35],
                ],
                fields: {
                    name: "a51"
                },
            },
            a52: {
                coords: [
                    [78.1, -86],
                    [77.3, -84.35],
                ],
                fields: {
                    name: "a52"
                },
            },
            a53: {
                coords: [
                    [78.3, -84],
                    [77.5, -82.35],
                ],
                fields: {
                    name: "a53"
                },
            },
            a54: {
                coords: [
                    [78.5, -82],
                    [77.7, -80.35],
                ],
                fields: {
                    name: "a54"
                },
            },
            a55: {
                coords: [
                    [78.6, -80],
                    [77.9, -78.35],
                ],
                fields: {
                    name: "a55"
                },
            },
            a56: {
                coords: [
                    [78.8, -78],
                    [78.1, -76.35],
                ],
                fields: {
                    name: "a56"
                },
            },
            a57: {
                coords: [
                    [79.0, -76],
                    [78.3, -74.35],
                ],
                fields: {
                    name: "a57"
                },
            },
            a58: {
                coords: [
                    [79.14, -58.05],
                    [78.45, -56.55],
                ],
                fields: {
                    name: "a58"
                },
            },
            a59: {
                coords: [
                    [79.14, -56.15],
                    [78.45, -54.65],
                ],
                fields: {
                    name: "a59"
                },
            },
            a60: {
                coords: [
                    [79.14, -54.25],
                    [78.45, -52.75],
                ],
                fields: {
                    name: "a60"
                },
            },
            a61: {
                coords: [
                    [79.31, -24.96],
                    [79.01, -21.75],
                ],
                fields: {
                    name: "a61"
                },
            },
            a62: {
                coords: [
                    [78.95, -24.96],
                    [78.66, -21.75],
                ],
                fields: {
                    name: "a62"
                },
            },
            a63: {
                coords: [
                    [78.59, -24.96],
                    [78.28, -21.75],
                ],
                fields: {
                    name: "a63"
                },
            },
            a64: {
                coords: [
                    [78.21, -24.96],
                    [77.88, -21.75],
                ],
                fields: {
                    name: "a64"
                },
            },
            a65: {
                coords: [
                    [77.80, -24.96],
                    [77.47, -21.75],
                ],
                fields: {
                    name: "a65"
                },
            },
            a66: {
                coords: [
                    [77.39, -24.96],
                    [77.06, -21.75],
                ],
                fields: {
                    name: "a66"
                },
            },
            a67: {
                coords: [
                    [76.97, -24.96],
                    [76.62, -21.75],
                ],
                fields: {
                    name: "a67"
                },
            },
            a68: {
                coords: [
                    [76.53, -24.96],
                    [76.17, -21.75],
                ],
                fields: {
                    name: "a68"
                },
            },
            a69: {
                coords: [
                    [76.08, -24.96],
                    [75.70, -21.75],
                ],
                fields: {
                    name: "a69"
                },
            },
            a70: {
                coords: [
                    [75.61, -24.96],
                    [75.23, -21.75],
                ],
                fields: {
                    name: "a70"
                },
            },
            a71: {
                coords: [
                    [75.13, -24.96],
                    [74.73, -21.75],
                ],
                fields: {
                    name: "a71"
                },
            },
            a72: {
                coords: [
                    [74.63, -24.96],
                    [74.23, -21.75],
                ],
                fields: {
                    name: "a72"
                },
            },
            a73: {
                coords: [
                    [74.13, -24.96],
                    [73.70, -21.75],
                ],
                fields: {
                    name: "a73"
                },
            },
            a74: {
                coords: [
                    [73.61, -24.96],
                    [73.15, -21.75],
                ],
                fields: {
                    name: "a74"
                },
            },
            a75: {
                coords: [
                    [73.05, -24.96],
                    [72.59, -21.75],
                ],
                fields: {
                    name: "a75"
                },
            },
            a76: {
                coords: [
                    [72.48, -24.96],
                    [72.02, -21.75],
                ],
                fields: {
                    name: "a76"
                },
            },
            a77: {
                coords: [
                    [71.9, -24.96],
                    [71.4, -21.75],
                ],
                fields: {
                    name: "a77"
                },
            },
        }
        let xStallData = {
            x1: {
                coords: [
                    [69.66, -102.26],
                    [69.10, -98.70],
                ],
                fields: {
                    name: "x1"
                },
            },
            x2: {
                coords: [
                    [70.4, -102.26],
                    [69.85, -98.70],
                ],
                fields: {
                    name: "x2"
                },
            },
            x3: {
                coords: [
                    [71.14, -102.26],
                    [70.59, -98.70],
                ],
                fields: {
                    name: "x3"
                },
            },
            x4: {
                coords: [
                    [71.83, -102.26],
                    [71.28, -98.70],
                ],
                fields: {
                    name: "x4"
                },
            },
            x5: {
                coords: [
                    [72.51, -102.26],
                    [71.96, -98.70],
                ],
                fields: {
                    name: "x5"
                },
            },
            x6: {
                coords: [
                    [73.16, -102.26],
                    [72.61, -98.70],
                ],
                fields: {
                    name: "x6"
                },
            },
            x7: {
                coords: [
                    [73.79, -102.26],
                    [73.24, -98.70],
                ],
                fields: {
                    name: "x7"
                },
            },
            x8: {
                coords: [
                    [74.35, -102.26],
                    [73.86, -98.70],
                ],
                fields: {
                    name: "x8"
                },
            },
            x9: {
                coords: [
                    [74.95, -102.26],
                    [74.45, -98.70],
                ],
                fields: {
                    name: "x9"
                },
            },
            x10: {
                coords: [
                    [73.93, -109.95],
                    [72.84, -111.57],
                ],
                fields: {
                    name: "x10"
                },
            },
            x11: {
                coords: [
                    [73.63, -111.85],
                    [72.54, -113.47],
                ],
                fields: {
                    name: "x11"
                },
            },
            x12: {
                coords: [
                    [73.33, -113.75],
                    [72.24, -115.37],
                ],
                fields: {
                    name: "x12"
                },
            },
            x13: {
                coords: [
                    [73.03, -115.67],
                    [71.94, -117.4],
                ],
                fields: {
                    name: "x13"
                },
            },
            x14: {
                coords: [
                    [72.73, -117.57],
                    [71.64, -119.3],
                ],
                fields: {
                    name: "x14"
                },
            },
            x15: {
                coords: [
                    [72.43, -119.47],
                    [71.34, -121.2],
                ],
                fields: {
                    name: "x15"
                },
            },
            x16: {
                coords: [
                    [71.47, -125.0],
                    [70.19, -126.72],
                ],
                fields: {
                    name: "x16"
                },
            },
            x17: {
                coords: [
                    [71.17, -126.85],
                    [69.89, -128.57],
                ],
                fields: {
                    name: "x17"
                },
            },
            x18: {
                coords: [
                    [70.87, -128.7],
                    [69.59, -130.42],
                ],
                fields: {
                    name: "x18"
                },
            },
            x19: {
                coords: [
                    [70.57, -130.53],
                    [69.29, -132.20],
                ],
                fields: {
                    name: "x19"
                },
            },
            x20: {
                coords: [
                    [70.17, -132.33],
                    [68.89, -134.07],
                ],
                fields: {
                    name: "x20"
                },
            },
            x21: {
                coords: [
                    [69.84, -134.23],
                    [68.56, -135.97],
                ],
                fields: {
                    name: "x21"
                },
            },
            x22: {
                coords: [
                    [69.34, -136.13],
                    [68.06, -137.87],
                ],
                fields: {
                    name: "x22"
                },
            },
        }
        let kStallData = {
            k1: {
                coords: [
                    [-55.15, 139.90],
                    [-57.09, 138.40],
                ],
                fields: {
                    name: "k1"
                },
            },
            k2: {
                coords: [
                    [-55.15, 138.05],
                    [-57.09, 136.55],
                ],
                fields: {
                    name: "k2"
                },
            },
            k3: {
                coords: [
                    [-55.15, 136.2],
                    [-57.09, 134.7],
                ],
                fields: {
                    name: "k3"
                },
            },
            k4: {
                coords: [
                    [-55.15, 134.35],
                    [-57.09, 132.85],
                ],
                fields: {
                    name: "k4"
                },
            },
            k5: {
                coords: [
                    [-62.0, 138.05],
                    [-61.32, 142.03],
                ],
                fields: {
                    name: "k5"
                },
            },
            k6: {
                coords: [
                    [-62.9, 138.05],
                    [-62.14, 142.03],
                ],
                fields: {
                    name: "k6"
                },
            },
            k7: {
                coords: [
                    [-63.8, 138.05],
                    [-63.07, 142.03],
                ],
                fields: {
                    name: "k7"
                },
            },
            k8: {
                coords: [
                    [-64.65, 138.05],
                    [-63.99, 142.03],
                ],
                fields: {
                    name: "k8"
                },
            },
            k9: {
                coords: [
                    [-65.51, 138.05],
                    [-64.83, 142.03],
                ],
                fields: {
                    name: "k9"
                },
            },
            k10: {
                coords: [
                    [-66.32, 138.05],
                    [-65.66, 142.03],
                ],
                fields: {
                    name: "k10"
                },
            },
            k11: {
                coords: [
                    [-70.85, 133.90],
                    [-69.70, 135.48],
                ],
                fields: {
                    name: "k11"
                },
            },
            k12: {
                coords: [
                    [-70.85, 131.90],
                    [-69.70, 133.48],
                ],
                fields: {
                    name: "k12"
                },
            },
            k13: {
                coords: [
                    [-70.85, 129.95],
                    [-69.70, 131.53],
                ],
                fields: {
                    name: "k13"
                },
            },
            k14: {
                coords: [
                    [-70.85, 128.00],
                    [-69.70, 129.60],
                ],
                fields: {
                    name: "k14"
                },
            },
            k15: {
                coords: [
                    [-70.85, 126.10],
                    [-69.70, 127.70],
                ],
                fields: {
                    name: "k15"
                },
            },
            k16: {
                coords: [
                    [-70.85, 124.20],
                    [-69.70, 125.80],
                ],
                fields: {
                    name: "k16"
                },
            },
            k17: {
                coords: [
                    [-70.85, 122.20],
                    [-69.70, 123.80],
                ],
                fields: {
                    name: "k17"
                },
            },
            k18: {
                coords: [
                    [-70.85, 120.30],
                    [-69.70, 121.90],
                ],
                fields: {
                    name: "k18"
                },
            },
            k19: {
                coords: [
                    [-70.85, 118.30],
                    [-69.70, 119.90],
                ],
                fields: {
                    name: "k19"
                },
            },
            k20: {
                coords: [
                    [-70.85, 116.40],
                    [-69.70, 118.00],
                ],
                fields: {
                    name: "k20"
                },
            },
            k21: {
                coords: [
                    [-70.85, 114.40],
                    [-69.70, 116.00],
                ],
                fields: {
                    name: "k21"
                },
            },
            k22: {
                coords: [
                    [-70.85, 112.50],
                    [-69.70, 114.10],
                ],
                fields: {
                    name: "k22"
                },
            },
            k23: {
                coords: [
                    [-70.85, 110.50],
                    [-69.70, 112.10],
                ],
                fields: {
                    name: "k23"
                },
            },
            k24: {
                coords: [
                    [-70.85, 108.60],
                    [-69.70, 110.20],
                ],
                fields: {
                    name: "k24"
                },
            },
            k25: {
                coords: [
                    [-70.85, 106.70],
                    [-69.70, 108.30],
                ],
                fields: {
                    name: "k25"
                },
            },
            k26: {
                coords: [
                    [-70.85, 104.80],
                    [-69.70, 106.40],
                ],
                fields: {
                    name: "k26"
                },
            },
            k27: {
                coords: [
                    [-70.85, 102.90],
                    [-69.70, 104.50],
                ],
                fields: {
                    name: "k27"
                },
            },
        }
        let nStallData = {
            n1: {
                coords: [
                    [-82.62, 26.78],
                    [-81.97, 28.49],
                ],
                fields: {
                    name: "n1"
                },
            },
            n2: {
                coords: [
                    [-82.62, 28.80],
                    [-81.97, 30.35],
                ],
                fields: {
                    name: "n2"
                },
            },
            n3: {
                coords: [
                    [-82.62, 30.65],
                    [-81.97, 32.2],
                ],
                fields: {
                    name: "n3"
                },
            },
            n4: {
                coords: [
                    [-82.62, 32.5],
                    [-81.97, 34.0],
                ],
                fields: {
                    name: "n4"
                },
            },
            n5: {
                coords: [
                    [-82.62, 34.35],
                    [-81.97, 35.85],
                ],
                fields: {
                    name: "n5"
                },
            },
            n6: {
                coords: [
                    [-82.62, 36.15],
                    [-81.97, 37.65],
                ],
                fields: {
                    name: "n6"
                },
            },
            n7: {
                coords: [
                    [-82.62, 38.00],
                    [-81.97, 39.50],
                ],
                fields: {
                    name: "n7"
                },
            },
            n8: {
                coords: [
                    [-82.62, 39.85],
                    [-81.97, 41.35],
                ],
                fields: {
                    name: "n8"
                },
            },
            n9: {
                coords: [
                    [-82.62, 41.65],
                    [-81.97, 43.15],
                ],
                fields: {
                    name: "n9"
                },
            },
            n10: {
                coords: [
                    [-82.62, 43.55],
                    [-81.97, 45.05],
                ],
                fields: {
                    name: "n10"
                },
            },
            n11: {
                coords: [
                    [-82.62, 45.35],
                    [-81.97, 46.85],
                ],
                fields: {
                    name: "n11"
                },
            },
            n12: {
                coords: [
                    [-82.62, 47.20],
                    [-81.97, 48.70],
                ],
                fields: {
                    name: "n12"
                },
            },
            n13: {
                coords: [
                    [-82.62, 49.05],
                    [-81.97, 50.55],
                ],
                fields: {
                    name: "n13"
                },
            },
            n14: {
                coords: [
                    [-82.62, 50.90],
                    [-81.97, 52.65],
                ],
                fields: {
                    name: "n14"
                },
            },
            n15: {
                coords: [
                    [-80.36, 22.95],
                    [-80.06, 26.89],
                ],
                fields: {
                    name: "n15"
                },
            },
            n16: {
                coords: [
                    [-79.99, 22.95],
                    [-79.72, 26.89],
                ],
                fields: {
                    name: "n16"
                },
            },
            n17: {
                coords: [
                    [-79.65, 22.95],
                    [-79.36, 26.89],
                ],
                fields: {
                    name: "n17"
                },
            },
            n18: {
                coords: [
                    [-79.3, 22.95],
                    [-79.0, 26.89],
                ],
                fields: {
                    name: "n18"
                },
            },
            n19: {
                coords: [
                    [-78.93, 22.95],
                    [-78.63, 26.89],
                ],
                fields: {
                    name: "n19"
                },
            },
            n20: {
                coords: [
                    [-78.55, 22.95],
                    [-78.24, 26.89],
                ],
                fields: {
                    name: "n20"
                },
            },
            n21: {
                coords: [
                    [-78.16, 22.95],
                    [-77.84, 26.89],
                ],
                fields: {
                    name: "n21"
                },
            },
            n22: {
                coords: [
                    [-77.76, 22.95],
                    [-77.41, 26.89],
                ],
                fields: {
                    name: "n22"
                },
            },
            n23: {
                coords: [
                    [-77.34, 22.95],
                    [-77.00, 26.89],
                ],
                fields: {
                    name: "n23"
                },
            },
            n24: {
                coords: [
                    [-76.92, 22.95],
                    [-76.55, 26.89],
                ],
                fields: {
                    name: "n24"
                },
            },
            n25: {
                coords: [
                    [-76.46, 22.95],
                    [-76.09, 26.89],
                ],
                fields: {
                    name: "n25"
                },
            },
            n26: {
                coords: [
                    [-76.00, 22.95],
                    [-75.62, 26.89],
                ],
                fields: {
                    name: "n26"
                },
            },
            n27: {
                coords: [
                    [-75.52, 22.95],
                    [-75.13, 26.89],
                ],
                fields: {
                    name: "n27"
                },
            },
            n28: {
                coords: [
                    [-75.03, 22.95],
                    [-74.63, 26.89],
                ],
                fields: {
                    name: "n28"
                },
            },
            n29: {
                coords: [
                    [-74.53, 22.95],
                    [-74.10, 26.89],
                ],
                fields: {
                    name: "n29"
                },
            },
            n30: {
                coords: [
                    [-74.00, 22.95],
                    [-73.57, 26.89],
                ],
                fields: {
                    name: "n30"
                },
            },
            n31: {
                coords: [
                    [-73.46, 22.95],
                    [-73.01, 26.89],
                ],
                fields: {
                    name: "n31"
                },
            },
            n32: {
                coords: [
                    [-72.90, 22.95],
                    [-72.37, 26.89],
                ],
                fields: {
                    name: "n32"
                },
            },
            n33: {
                coords: [
                    [-67.18, 22.78],
                    [-65.60, 24.45],
                ],
                fields: {
                    name: "n33"
                },
            },
            n34: {
                coords: [
                    [-67.18, 24.78],
                    [-65.60, 26.45],
                ],
                fields: {
                    name: "n34"
                },
            },
            n35: {
                coords: [
                    [-67.18, 26.78],
                    [-65.60, 28.45],
                ],
                fields: {
                    name: "n35"
                },
            },
            n36: {
                coords: [
                    [-67.18, 28.78],
                    [-65.60, 30.45],
                ],
                fields: {
                    name: "n36"
                },
            },
            n37: {
                coords: [
                    [-67.18, 30.78],
                    [-65.60, 32.45],
                ],
                fields: {
                    name: "n37"
                },
            },
            n38: {
                coords: [
                    [-67.18, 32.78],
                    [-65.60, 34.45],
                ],
                fields: {
                    name: "n38"
                },
            },
            n39: {
                coords: [
                    [-67.18, 34.78],
                    [-65.60, 36.45],
                ],
                fields: {
                    name: "n39"
                },
            },
            n40: {
                coords: [
                    [-67.18, 36.78],
                    [-65.60, 38.45],
                ],
                fields: {
                    name: "n40"
                },
            },
            n41: {
                coords: [
                    [-63.49, 22.78],
                    [-61.77, 24.45],
                ],
                fields: {
                    name: "n41"
                },
            },
            n42: {
                coords: [
                    [-63.49, 24.78],
                    [-61.77, 26.45],
                ],
                fields: {
                    name: "n42"
                },
            },
            n43: {
                coords: [
                    [-63.49, 26.78],
                    [-61.77, 28.45],
                ],
                fields: {
                    name: "n43"
                },
            },
            n44: {
                coords: [
                    [-63.49, 28.78],
                    [-61.77, 30.45],
                ],
                fields: {
                    name: "n44"
                },
            },
            n45: {
                coords: [
                    [-63.49, 30.78],
                    [-61.77, 32.45],
                ],
                fields: {
                    name: "n45"
                },
            },
            n46: {
                coords: [
                    [-63.49, 32.78],
                    [-61.77, 34.45],
                ],
                fields: {
                    name: "n46"
                },
            },
            n47: {
                coords: [
                    [-63.49, 34.78],
                    [-61.77, 36.45],
                ],
                fields: {
                    name: "n47"
                },
            },
            n48: {
                coords: [
                    [-63.49, 36.78],
                    [-61.77, 38.45],
                ],
                fields: {
                    name: "n48"
                },
            },
            n49: {
                coords: [
                    [-61.60, 22.78],
                    [-59.79, 24.45],
                ],
                fields: {
                    name: "n49"
                },
            },
            n50: {
                coords: [
                    [-61.60, 24.78],
                    [-59.79, 26.45],
                ],
                fields: {
                    name: "n50"
                },
            },
            n51: {
                coords: [
                    [-61.60, 26.78],
                    [-59.79, 28.45],
                ],
                fields: {
                    name: "n51"
                },
            },
            n52: {
                coords: [
                    [-61.60, 28.78],
                    [-59.79, 30.45],
                ],
                fields: {
                    name: "n52"
                },
            },
            n53: {
                coords: [
                    [-61.60, 30.78],
                    [-59.79, 32.45],
                ],
                fields: {
                    name: "n53"
                },
            },
            n54: {
                coords: [
                    [-61.60, 32.78],
                    [-59.79, 34.45],
                ],
                fields: {
                    name: "n54"
                },
            },
            n55: {
                coords: [
                    [-61.60, 34.78],
                    [-59.79, 36.45],
                ],
                fields: {
                    name: "n55"
                },
            },
            n56: {
                coords: [
                    [-61.60, 36.78],
                    [-59.79, 38.45],
                ],
                fields: {
                    name: "n56"
                },
            },
            n57: {
                coords: [
                    [-61.60, 38.81],
                    [-59.79, 40.70],
                ],
                fields: {
                    name: "n57"
                },
            },
        }
        return {
            d: dStallData,
            cs: csStallData,
            cn: cnStallData,
            cw: cwStallData,
            c: cStallData,
            j: jStallData,
            i: iStallData,
            h: hStallData,
            g: gStallData,
            f: fStallData,
            e: eStallData,
            b: bStallData,
            a: aStallData,
            x: xStallData,
            k: kStallData,
            n: nStallData
        }
    }

    static getProductionData() {
        return {
            theflash: {
                id: "theflash",
                name: "The Flash",
                description: "The Flash is an American superhero television series developed by Greg Berlanti, Andrew Kreisberg, and Geoff Johns, airing on The CW. It is based on the Barry Allen incarnation of DC Comics character the Flash, a costumed superhero crime-fighter with the power to move at superhuman speeds. It is a spin-off of Arrow, existing in the same fictional universe known as the Arrowverse.",
                isActive: true,
                lastModified: new Date(2022, 8, 5),
                zones: {
                    z1: {
                        stalls: [
                            "a1",
                            "a2",
                            "a3",
                            "a4",
                            "a5",
                            "a6",
                            "a7",
                            "a8",
                            "a9",
                            "a10",
                            "a11",
                            "a12",
                            "a13",
                            "a14",
                            "a15",
                            "a16",
                            "a17",
                            "a18",
                            "a19",
                            "a20",
                            "a21",
                            "a22",
                            "a23",
                            "a24",
                            "a25",
                            "a26",
                            "a27",
                            "a28",
                            "a29",
                            "a30",
                            "a31",
                            "a32",
                            "a33",
                            "a34",
                            "a35",
                            "a36",
                            "a37",
                        ],
                        name: "A lot parking",
                        color: "red"
                    }
                },
            },
            battlestargalactica: {
                id: "battlestargalactica",
                name: "Battlestar Galactica",
                description: "Battlestar Galactica is an American science fiction media franchise created by Glen A. Larson. The franchise began with the original television series in 1978, and was followed by a short-run sequel series (Galactica 1980), a line of book adaptations, original novels, comic books, a board game, and video games.",
                isActive: true,
                lastModified: new Date(2022, 8, 4),
                zones: {
                    z1: {
                        stalls: [
                            "b1",
                            "b2",
                            "b3",
                            "b4",
                            "b5",
                            "b6",
                            "b7",
                            "b8",
                            "b9",
                            "b10",
                            "b11",
                            "b12",
                            "b13",
                            "b14",
                            "b15",
                            "b16",
                            "b17",
                            "b18",
                            "b19",
                            "b20",
                            "b21",
                            "b22",
                            "b23",
                            "b24",
                            "b25",
                            "b26",
                            "b27",
                            "b28",
                            "b29",
                            "b30",
                            "b31",
                            "b32",
                        ],
                        name: "B Lot Parking",
                        color: "purple"
                    },
                    z2: {
                        stalls: [
                            "cn1",
                            "cn2",
                            "cn3",
                            "cn4",
                            "cn5",
                            "cn6",
                            "cn7",
                            "cn8",
                            "cn9",
                            "cn10",
                            "cn11",
                            "cn12",
                            "cn13",
                            "cn14",
                            "cn15",
                            "cn16",
                            "cn17",
                            "cn18",
                            "cn19",
                            "cn20",
                            "cn21",
                        ],
                        name: "C North Parking",
                        color: "lightBlue"
                    }
                }
            },
            arrow: {
                id: "arrow",
                name: "Arrow",
                description: "Arrow is an American superhero television series developed by Greg Berlanti, Marc Guggenheim, and Andrew Kreisberg based on the DC Comics character Green Arrow, a costumed crime-fighter created by Mort Weisinger and George Papp, and is the first series of the Arrowverse, sharing continuity with other related television series.",
                isActive: true,
                lastModified: new Date(2022, 8, 3),
                zones: {
                    z1: {
                        stalls: [
                            "d1",
                            "d2",
                            "d3",
                            "d4",
                            "d5",
                            "d6",
                            "d7",
                            "d8",
                            "d9",
                            "d10",
                            "d11",
                            "d12",
                            "d13",
                            "d14",
                            "d15",
                            "d16",
                            "d17",
                            "d18",
                            "d19",
                            "d20",
                            "d21",
                            "d22",
                            "d23",
                            "d24",
                            "d25",
                            "d26",
                            "d27",
                            "d28",
                            "d29",
                            "d30",
                            "d31",
                            "d32",
                        ],
                        name: "D Parking",
                        color: "green"
                    },
                    z2: {
                        stalls: [
                            "e1",
                            "e2",
                            "e3",
                            "e4",
                            "e5",
                            "e6",
                            "e7",
                            "e8",
                            "e9",
                            "e10",
                            "e11",
                            "e12",
                            "e13",
                            "e14",
                            "e15",
                            "e16",
                            "e17",
                            "e18",
                            "e19",
                            "e20",
                        ],
                        name: "E Parking",
                        color: "orange"
                    },
                    z3: {
                        stalls: [
                            "f1",
                            "f2",
                            "f3",
                            "f4",
                            "f5",
                            "f6",
                            "f7",
                            "f8",
                            "f9",
                            "f10",
                            "f11",
                            "f12",
                            "f13",
                            "f14",
                            "f15",
                            "f16",
                            "f17",
                            "f18",
                            "f19",
                            "f20",
                        ],
                        name: "F Parking",
                        color: "pink"
                    }
                }
            }
        }
    }
}

export default TestData