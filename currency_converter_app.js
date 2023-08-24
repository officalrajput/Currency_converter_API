let fileJson =  async (value,currency) =>
{
    let myStr=""
    // url="https://api.currencyapi.com/v3/latest?apikey=cur_live_y2AtiFm4Ik19vmYM5hxgjtROwa4pzTjuNQ3bVjlr&base_currency=INR" + currency
    // let response= await fetch(url);
    // let getData= await response.json();
    let getData=JSON.parse(`
    
    {
      "meta": {
        "last_updated_at": "2023-08-23T23:59:59Z"
      },
      "data": {
        "ADA": {
          "code": "ADA",
          "value": 0.0452238464
        },
        "AED": {
          "code": "AED",
          "value": 0.0445196054
        },
        "AFN": {
          "code": "AFN",
          "value": 1.0070059062
        },
        "ALL": {
          "code": "ALL",
          "value": 1.194704238
        },
        "AMD": {
          "code": "AMD",
          "value": 4.6501863977
        },
        "ANG": {
          "code": "ANG",
          "value": 0.0216587738
        },
        "AOA": {
          "code": "AOA",
          "value": 9.9975222208
        },
        "ARB": {
          "code": "ARB",
          "value": 0.0120243458
        },
        "ARS": {
          "code": "ARS",
          "value": 4.2433065624
        },
        "AUD": {
          "code": "AUD",
          "value": 0.0187066003
        },
        "AVAX": {
          "code": "AVAX",
          "value": 0.0011735521
        },
        "AWG": {
          "code": "AWG",
          "value": 0.0216991382
        },
        "AZN": {
          "code": "AZN",
          "value": 0.0206081201
        },
        "BAM": {
          "code": "BAM",
          "value": 0.0218652178
        },
        "BBD": {
          "code": "BBD",
          "value": 0.0242448472
        },
        "BDT": {
          "code": "BDT",
          "value": 1.3275953465
        },
        "BGN": {
          "code": "BGN",
          "value": 0.0218361259
        },
        "BHD": {
          "code": "BHD",
          "value": 0.0045580313
        },
        "BIF": {
          "code": "BIF",
          "value": 34.299656917
        },
        "BMD": {
          "code": "BMD",
          "value": 0.0121224236
        },
        "BNB": {
          "code": "BNB",
          "value": 0.0000559611
        },
        "BND": {
          "code": "BND",
          "value": 0.0163815186
        },
        "BOB": {
          "code": "BOB",
          "value": 0.0840731413
        },
        "BRL": {
          "code": "BRL",
          "value": 0.0588952298
        },
        "BSD": {
          "code": "BSD",
          "value": 0.0121224236
        },
        "BTC": {
          "code": "BTC",
          "value": 4.584e-7
        },
        "BTN": {
          "code": "BTN",
          "value": 1.0059478419
        },
        "BUSD": {
          "code": "BUSD",
          "value": 0.012119116
        },
        "BWP": {
          "code": "BWP",
          "value": 0.1638128813
        },
        "BYN": {
          "code": "BYN",
          "value": 0.0303205955
        },
        "BYR": {
          "code": "BYR",
          "value": 303.2061698554
        },
        "BZD": {
          "code": "BZD",
          "value": 0.0242448472
        },
        "CAD": {
          "code": "CAD",
          "value": 0.0163987316
        },
        "CDF": {
          "code": "CDF",
          "value": 30.0802563548
        },
        "CHF": {
          "code": "CHF",
          "value": 0.0106380341
        },
        "CLF": {
          "code": "CLF",
          "value": 0.0002829374
        },
        "CLP": {
          "code": "CLP",
          "value": 10.3768840545
        },
        "CNY": {
          "code": "CNY",
          "value": 0.0882241049
        },
        "COP": {
          "code": "COP",
          "value": 49.3873960253
        },
        "CRC": {
          "code": "CRC",
          "value": 6.5435847741
        },
        "CUC": {
          "code": "CUC",
          "value": 0.0121224236
        },
        "CUP": {
          "code": "CUP",
          "value": 0.2909381663
        },
        "CVE": {
          "code": "CVE",
          "value": 1.2304671806
        },
        "CZK": {
          "code": "CZK",
          "value": 0.268353769
        },
        "DAI": {
          "code": "DAI",
          "value": 0.0121323984
        },
        "DJF": {
          "code": "DJF",
          "value": 2.1544092438
        },
        "DKK": {
          "code": "DKK",
          "value": 0.083162751
        },
        "DOP": {
          "code": "DOP",
          "value": 0.6875230277
        },
        "DOT": {
          "code": "DOT",
          "value": 0.0027018073
        },
        "DZD": {
          "code": "DZD",
          "value": 1.6570969014
        },
        "EGP": {
          "code": "EGP",
          "value": 0.3746618507
        },
        "ERN": {
          "code": "ERN",
          "value": 0.1818363539
        },
        "ETB": {
          "code": "ETB",
          "value": 0.6651588098
        },
        "ETH": {
          "code": "ETH",
          "value": 0.0000072108
        },
        "EUR": {
          "code": "EUR",
          "value": 0.0111573591
        },
        "FJD": {
          "code": "FJD",
          "value": 0.0273240677
        },
        "FKP": {
          "code": "FKP",
          "value": 0.009530136
        },
        "GBP": {
          "code": "GBP",
          "value": 0.0095317415
        },
        "GEL": {
          "code": "GEL",
          "value": 0.0318431864
        },
        "GGP": {
          "code": "GGP",
          "value": 0.0095301332
        },
        "GHS": {
          "code": "GHS",
          "value": 0.1376187391
        },
        "GIP": {
          "code": "GIP",
          "value": 0.0095301357
        },
        "GMD": {
          "code": "GMD",
          "value": 0.7060526214
        },
        "GNF": {
          "code": "GNF",
          "value": 103.581066913
        },
        "GTQ": {
          "code": "GTQ",
          "value": 0.0951073328
        },
        "GYD": {
          "code": "GYD",
          "value": 2.5359965348
        },
        "HKD": {
          "code": "HKD",
          "value": 0.0950426076
        },
        "HNL": {
          "code": "HNL",
          "value": 0.2983385964
        },
        "HRK": {
          "code": "HRK",
          "value": 0.085381276
        },
        "HTG": {
          "code": "HTG",
          "value": 1.65465682
        },
        "HUF": {
          "code": "HUF",
          "value": 4.2637518339
        },
        "IDR": {
          "code": "IDR",
          "value": 185.1905843228
        },
        "ILS": {
          "code": "ILS",
          "value": 0.0455529231
        },
        "IMP": {
          "code": "IMP",
          "value": 0.0095301313
        },
        "INR": {
          "code": "INR",
          "value": 1
        },
        "IQD": {
          "code": "IQD",
          "value": 15.8793474093
        },
        "IRR": {
          "code": "IRR",
          "value": 509.2428801459
        },
        "ISK": {
          "code": "ISK",
          "value": 1.6043769199
        },
        "JEP": {
          "code": "JEP",
          "value": 0.0095301371
        },
        "JMD": {
          "code": "JMD",
          "value": 1.8945316071
        },
        "JOD": {
          "code": "JOD",
          "value": 0.0086069208
        },
        "JPY": {
          "code": "JPY",
          "value": 1.7535958427
        },
        "KES": {
          "code": "KES",
          "value": 1.7500024095
        },
        "KGS": {
          "code": "KGS",
          "value": 1.0619465437
        },
        "KHR": {
          "code": "KHR",
          "value": 50.1809145099
        },
        "KMF": {
          "code": "KMF",
          "value": 5.5191923881
        },
        "KPW": {
          "code": "KPW",
          "value": 10.9098915068
        },
        "KRW": {
          "code": "KRW",
          "value": 16.0761777234
        },
        "KWD": {
          "code": "KWD",
          "value": 0.0037387984
        },
        "KYD": {
          "code": "KYD",
          "value": 0.0101019793
        },
        "KZT": {
          "code": "KZT",
          "value": 5.586428578
        },
        "LAK": {
          "code": "LAK",
          "value": 236.2100150027
        },
        "LBP": {
          "code": "LBP",
          "value": 181.9917447103
        },
        "LKR": {
          "code": "LKR",
          "value": 3.8887458545
        },
        "LRD": {
          "code": "LRD",
          "value": 2.2582711495
        },
        "LSL": {
          "code": "LSL",
          "value": 0.2278297209
        },
        "LTC": {
          "code": "LTC",
          "value": 0.0001846447
        },
        "LTL": {
          "code": "LTL",
          "value": 0.0385223407
        },
        "LVL": {
          "code": "LVL",
          "value": 0.007841028
        },
        "LYD": {
          "code": "LYD",
          "value": 0.0584366351
        },
        "MAD": {
          "code": "MAD",
          "value": 0.1212709297
        },
        "MATIC": {
          "code": "MATIC",
          "value": 0.0217714452
        },
        "MDL": {
          "code": "MDL",
          "value": 0.2157301875
        },
        "MGA": {
          "code": "MGA",
          "value": 54.2605801059
        },
        "MKD": {
          "code": "MKD",
          "value": 0.6881806334
        },
        "MMK": {
          "code": "MMK",
          "value": 25.3955179952
        },
        "MNT": {
          "code": "MNT",
          "value": 42.1567257418
        },
        "MOP": {
          "code": "MOP",
          "value": 0.0979144083
        },
        "MRO": {
          "code": "MRO",
          "value": 4.3277031385
        },
        "MUR": {
          "code": "MUR",
          "value": 0.5503084259
        },
        "MVR": {
          "code": "MVR",
          "value": 0.1872989932
        },
        "MWK": {
          "code": "MWK",
          "value": 13.0672086371
        },
        "MXN": {
          "code": "MXN",
          "value": 0.2034990406
        },
        "MYR": {
          "code": "MYR",
          "value": 0.0564370452
        },
        "MZN": {
          "code": "MZN",
          "value": 0.7721130092
        },
        "NAD": {
          "code": "NAD",
          "value": 0.2235833519
        },
        "NGN": {
          "code": "NGN",
          "value": 9.1744208712
        },
        "NIO": {
          "code": "NIO",
          "value": 0.4431846987
        },
        "NOK": {
          "code": "NOK",
          "value": 0.1283940581
        },
        "NPR": {
          "code": "NPR",
          "value": 1.5920333481
        },
        "NZD": {
          "code": "NZD",
          "value": 0.0202905157
        },
        "OMR": {
          "code": "OMR",
          "value": 0.0046448284
        },
        "OP": {
          "code": "OP",
          "value": 0.0077819585
        },
        "PAB": {
          "code": "PAB",
          "value": 0.0121128487
        },
        "PEN": {
          "code": "PEN",
          "value": 0.0448369732
        },
        "PGK": {
          "code": "PGK",
          "value": 0.0434573175
        },
        "PHP": {
          "code": "PHP",
          "value": 0.6859074292
        },
        "PKR": {
          "code": "PKR",
          "value": 3.6319617272
        },
        "PLN": {
          "code": "PLN",
          "value": 0.0498297147
        },
        "PYG": {
          "code": "PYG",
          "value": 88.4627250029
        },
        "QAR": {
          "code": "QAR",
          "value": 0.0441278123
        },
        "RON": {
          "code": "RON",
          "value": 0.0550850295
        },
        "RSD": {
          "code": "RSD",
          "value": 1.3029366875
        },
        "RUB": {
          "code": "RUB",
          "value": 1.1276676519
        },
        "RWF": {
          "code": "RWF",
          "value": 14.3840135159
        },
        "SAR": {
          "code": "SAR",
          "value": 0.0454089086
        },
        "SBD": {
          "code": "SBD",
          "value": 0.1020233057
        },
        "SCR": {
          "code": "SCR",
          "value": 0.1714897684
        },
        "SDG": {
          "code": "SDG",
          "value": 7.2916377927
        },
        "SEK": {
          "code": "SEK",
          "value": 0.1322809945
        },
        "SGD": {
          "code": "SGD",
          "value": 0.0163914591
        },
        "SHP": {
          "code": "SHP",
          "value": 0.0095317419
        },
        "SLL": {
          "code": "SLL",
          "value": 263.8052628514
        },
        "SOL": {
          "code": "SOL",
          "value": 0.0005588084
        },
        "SOS": {
          "code": "SOS",
          "value": 6.8932166833
        },
        "SRD": {
          "code": "SRD",
          "value": 0.4624241195
        },
        "STD": {
          "code": "STD",
          "value": 275.0033190888
        },
        "SVC": {
          "code": "SVC",
          "value": 0.1060712065
        },
        "SYP": {
          "code": "SYP",
          "value": 158.8015105578
        },
        "SZL": {
          "code": "SZL",
          "value": 0.2239941723
        },
        "THB": {
          "code": "THB",
          "value": 0.4212385207
        },
        "TJS": {
          "code": "TJS",
          "value": 0.1330330722
        },
        "TMT": {
          "code": "TMT",
          "value": 0.0424284826
        },
        "TND": {
          "code": "TND",
          "value": 0.0375804883
        },
        "TOP": {
          "code": "TOP",
          "value": 0.0285912253
        },
        "TRY": {
          "code": "TRY",
          "value": 0.3294014505
        },
        "TTD": {
          "code": "TTD",
          "value": 0.0816598096
        },
        "TWD": {
          "code": "TWD",
          "value": 0.3866994296
        },
        "TZS": {
          "code": "TZS",
          "value": 30.2197062186
        },
        "UAH": {
          "code": "UAH",
          "value": 0.4447714167
        },
        "UGX": {
          "code": "UGX",
          "value": 45.1658061912
        },
        "USD": {
          "code": "USD",
          "value": 0.0121224236
        },
        "USDC": {
          "code": "USDC",
          "value": 0.0121305802
        },
        "USDT": {
          "code": "USDT",
          "value": 0.0121310104
        },
        "UYU": {
          "code": "UYU",
          "value": 0.4591689704
        },
        "UZS": {
          "code": "UZS",
          "value": 145.4366976065
        },
        "VEF": {
          "code": "VEF",
          "value": 38749.0317769906
        },
        "VND": {
          "code": "VND",
          "value": 290.7532941287
        },
        "VUV": {
          "code": "VUV",
          "value": 1.4687541081
        },
        "WST": {
          "code": "WST",
          "value": 0.0335670461
        },
        "XAF": {
          "code": "XAF",
          "value": 7.3174538071
        },
        "XAG": {
          "code": "XAG",
          "value": 0.0004982864
        },
        "XAU": {
          "code": "XAU",
          "value": 0.0000063204
        },
        "XCD": {
          "code": "XCD",
          "value": 0.0327305437
        },
        "XDR": {
          "code": "XDR",
          "value": 0.0091229733
        },
        "XOF": {
          "code": "XOF",
          "value": 7.3174537629
        },
        "XPD": {
          "code": "XPD",
          "value": 0.0000094746
        },
        "XPF": {
          "code": "XPF",
          "value": 1.3300831249
        },
        "XPT": {
          "code": "XPT",
          "value": 0.0000129741
        },
        "XRP": {
          "code": "XRP",
          "value": 0.0228518463
        },
        "YER": {
          "code": "YER",
          "value": 3.0290716561
        },
        "ZAR": {
          "code": "ZAR",
          "value": 0.2241084922
        },
        "ZMK": {
          "code": "ZMK",
          "value": 109.1163592672
        },
        "ZMW": {
          "code": "ZMW",
          "value": 0.2363129737
        },
        "ZWL": {
          "code": "ZWL",
          "value": 55.6860337746
        }
      }
    }`)
    document.querySelector(".output").style.display="block"
 for(let key of Object.keys(getData["data"]))
 {
  myStr +=
  ` <tr>
        <td>${key}</td>
        <td>${getData["data"][key]["code"]}</td>
        <td>${(getData["data"][key]["value"]*value)}</td>
    </tr> `
 }
 let tableBody=document.querySelector("tbody")
 tableBody.innerHTML = myStr

}

let btn=document.querySelector(".btn");
btn.addEventListener('click',function(event)
{
    event.preventDefault();
    let value=parseInt(document.querySelector("input[name='quantity']").value)
    let currency=(document.querySelector("select[name='currency']").value)
    fileJson(value,currency);
})


