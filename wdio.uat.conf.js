const merge = require("deepmerge")
const wdioconf = require ("./wdio.conf.js")

exports.config = merge(wdioconf.config,{
    baseUrl : "http://rahulshettyacademyUAT.com",
    waitforTimeout: 5000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep:"sanity"
    }
})