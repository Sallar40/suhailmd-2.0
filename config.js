const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923275196051";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_29_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgOTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODEsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICA1MixcbiAgICAgICAgNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHZtTDRSZlY2Y0x1cFp3MFh0OGtNNk9TZ2llZmVDZFhYTzk2K2lmRHdZST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzUxOTYwNTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQwRThBODVFMTY0NkJFQkU2N0Q1RDhEOUQwMTA1NzNEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTA5NDE3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3NTE5NjA1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTU4OUZFMENCMjQxMjYwQkM2QTQzMDczQUM5NDlBNjVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxMDk0MTcwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNRdjFXVWpGU2cyR0luRmJuX1piQ2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTY5MTA2NGYtNDg4Zi00N2RmLTgxMGQtYzk0ZGQ4NzBhZmRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMixcbiAgICAgIDEwNyxcbiAgICAgIDE4MixcbiAgICAgIDIzOSxcbiAgICAgIDE3NixcbiAgICAgIDg1LFxuICAgICAgNzcsXG4gICAgICA2NCxcbiAgICAgIDkzLFxuICAgICAgMTYxLFxuICAgICAgMTI2LFxuICAgICAgNjMsXG4gICAgICAxNzMsXG4gICAgICAzNyxcbiAgICAgIDE2NyxcbiAgICAgIDEzOSxcbiAgICAgIDI0MCxcbiAgICAgIDIyNSxcbiAgICAgIDIyOSxcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDU1LFxuICAgICAgNDUsXG4gICAgICAyMjQsXG4gICAgICAzLFxuICAgICAgMzksXG4gICAgICAxMTUsXG4gICAgICA5OSxcbiAgICAgIDEwOSxcbiAgICAgIDM1LFxuICAgICAgMjYsXG4gICAgICAxMDYsXG4gICAgICAyMDAsXG4gICAgICA4NyxcbiAgICAgIDk3LFxuICAgICAgNTEsXG4gICAgICAxNjksXG4gICAgICA0MyxcbiAgICAgIDE1MyxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVRTFhDU0hWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNzUxOTYwNTE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY4NTUyMzE3MzU0MTE2OjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi2LPZhNin2LEg44OjXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdxNGFZQ0VKUE51YmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqNXVaaUExNGxBZ0l2ditZb1RSUFNJZFk1aDdQdFVwVzlnZjZrRnc4TGdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFyVU1WVzNqTHJJaVhlalgvcFF4SFRTMlF3bHNtWER0K1ZyTHQyV1c4QzVkRlVGKzdvb0RCT281L3l0UHc0M2dYU3ZCS1RlSnV5akt3bjdocVVERURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNGWGowK0xWOVdrK0FOSFpRR3lsNUIzWlpyd2F5aytlcGExbklNUzZNRDZVUWJvYjVSY21ESDc0UFJEcUJLVm0wZzhTR3hCYzlBREhHdHVsMDAxRWd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3NTE5NjA1MTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwOTQxNjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaXdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVpdy5qc29uIjogIntcImtleURhdGFcIjpcIkJQOWlTZklUWUM5dUlvQ1FaYkdYeW9sWmJYdk91S3ZneVpnamk4dlZjSnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjE4MTU3NDI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMxMDM5MDI5MTY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
