const config = {
    use: {
        baseURL: 'https://react-redux.realworld.io',
        // browserName: 'chromium',
        headless: false ,
        // viewport: { height: 1280, width:720 },
        launchOptions: {
            slowMO:50,
        },
       screenshot:'only-on-failure', // same as video
       video: 'on', // on/off(default) or on failture
       trace: 'on', // tracing !!!!
       workers: 2,  // how many workers can work at once (how many tests you can run at same time)
    },

    testDir:'tests',  //get tests from
    retries: 2,  // repeats of test if fail
    timeout: 60000,  //timeout

    projects: [
        {
            name: 'Chromium_600x800',
            use:{
                browserName: 'chromium',
                viewport: {height:800, width:600},
            }
        },

        {
            name: 'Chromium_1280x720',
            use:{
                browserName: 'chromium',
                viewport: {height: 720 , width: 1280}
            }
        },

        {
            name: 'WebKit',
            use:{
                browserName: 'webkit'
            }
        },



    ]  //  to check every test with different browsers and resolutions

}

module.exports = config