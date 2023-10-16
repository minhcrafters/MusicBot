module.exports = {
    botToken: process.env.TOKEN,
    ownerID: [""], 
    botInvite: "", 
    supportServer: "", 
    mongodbURL: "", 
    status: 'ngao nghe 1t10',
    commandsDir: './commands', 
    language: "en", 
    embedColor: "ffa954", 
    errorLog: "", 


    sponsor: {
        status: true, 
        url: "https://example.com",
    },

    voteManager: { 
        status: false, 
        api_key: "", 
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], 
        vote_url: "", 
    },

    shardManager: {
        shardStatus: false 
    },

    playlistSettings: {
        maxPlaylist: 10, 
        maxMusic: 75, 
    },

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle'] 
        },

        voiceConfig: {
            leaveOnFinish: false, 
            leaveOnStop: false, 

            leaveOnEmpty: { 
                status: true, 
                cooldown: 10000000, 
            },

        },

        maxVol: 150, 

    }
}
