const axios = require("axios");
const fs = require("fs");
const request = require("request");
module.exports = {
	config: {
		name: "Out",
		aliases: ["leave","l"],
		version: "1.0",
		author: "Sandy",
		countDown: 5,
		role: 2,
		shortDescription: "bot will leave gc",
		longDescription: "",
		category: "admin",
		guide: {
			vi: "{pn} [tid,blank]",
			en: "{pn} [tid,blank]"
		}
	},

	onStart: async function ({ api,event,args, message }) {
 var id;
 if (!args.join(" ")) {
 id = event.threadID;
 } else {
 id = parseInt(args.join(" "));
 }
 return api.sendMessage('𝗚𝗼𝗼𝗱𝗯𝘆𝗲....𝖨𝗆 𝗅𝖾𝖺𝗏𝗂𝗇𝗀 𝗍𝗁𝗂𝗌 𝗀𝗋𝗈𝗎𝗉 𝖼𝖺𝗎𝗌𝖾𝖽 𝗈𝖿 𝖺𝖽𝗆𝗂𝗇(𝗌)  𝖼𝗈𝗆𝗆𝖺𝗇𝖽.', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
		}
	};
