require("./data/module.js")
/*
SC BY TIK505
AMBIL API
- API NOKOS https://virtusim.com/API
- API SUNTIK https://indosmm.id/api/v2

syarat pake sc TIK505
masuk gc tik505
https://chat.whatsapp.com/E6E6VnR2lbfHjIQCDBl0Wm
*/
global.owner = "DENZ - DEV"
global.dev = "66970095512" //GANTI PAKE NO LU
global.namabot = "Tik505" 
global.della = "DENZ HOSTING"
global.namaowner = "DENZ OFC"
global.versi = "Versi script 1.0.3"
global.idsaluran = "120363349892708976@newsletter"
global.gcreseller= "120363248233950379@g.us"
global.linkgc = 'https://chat.whatsapp.com/CGWMk08sm3BKb4EantTFZY'
global.linksaluran = "https://whatsapp.com/channel/0029VagTCBr1iUxQVNZbMA3I"
global.linkyt = "https://youtube.com/@denzstorex"
global.packname = "WhatsApo Bot denz"
global.author = "Denz BOTZ"

/*~~~~~~~~~~ SETTING APIKEY ~~~~~~~~~~~*/
global.apikey ={
"nokos": "Apikey_nokos_lu",//WAJIB ISI API LU
"indosmm": "API_INDOSMM_LU"} //MASUKAN API KKIAN .

/*~~~~~~~~~~ SETTING IMAGE ~~~~~~~~~~~*/
global.image = "./media/denz.png"
global.image2 = './media/denz.png'
global.thumbnail = "./media/denz.png"

/*~~~~~~~~~ SETTING MESSAGE ~~~~~~~~~~*/
global.msg = {
"error": "Fitur ini blm di fix, hubungi dev dengan perintah help",
"done": "Sukses..", 
"wait": "Sek", 
"group": "Keknya ini bukan gc", 
"private": "Ko cet di grup? bukanya ini buat di private kita", 
"bot": "khusus pengguna bot",
"admin": "Adminin dulu bot nya", 
"adminbot": "Jadiin admin dulu gw😓", 
"owner": "Fitur Ini Buat pengguna bot denz", 
"developer": "Fitur ini buat denz😓❗"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})