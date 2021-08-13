const ytdl = require("ytdl-core");
const fs = require("fs");
const readline = require("readline").createInterface({input: process.stdin, output: process.stdout});

readline.question("YT URL: ", (URL) => {
	readline.close();
	ytdl(URL, {filter: "audioonly"}).pipe(fs.createWriteStream("output.mp4"));
});
