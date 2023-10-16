const db = require("../mongoDB");
module.exports = {
    name: "stop",
    description: "Stops the currently playing song.",
    permissions: "0x0000000000000800",
    options: [],
    voiceChannel: true,
    run: async (client, interaction) => {
        let lang = await db?.musicbot?.findOne({ guildID: interaction.guild.id })
        lang = lang?.language || client.language
        lang = require(`../languages/${lang}.js`);

        try {

            const queue = client.player.getQueue(interaction.guild.id);
            if (!queue || !queue.playing) return interaction.reply({ content: lang.msg5, ephemeral: true }).catch(e => { })
            queue.stop(interaction.guild.id);
            return interaction.reply({ content: lang.msg85 }).catch(e => { })

        } catch (e) {
            const errorNotifer = require("../functions.js")
            errorNotifer(client, interaction, e, lang)
        }
    },
};
