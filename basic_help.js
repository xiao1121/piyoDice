function (user , body){
	if(body.match(/^๕/)) return;
	if (user == "skype_webchat") {
		bodytemp = body.split(/ณ๑ฬญพF[\n\r]*?/, 2);
		user = bodytemp[0].split(" ")[1];
		body = bodytemp[1];
	}
	var linetemp = "";
	var output = "";
	if(body.match(/^[hHg][eEd][lLk][pPo]/)&&body.match(/^[hHg][eEd][lLk][pPo][^\s@]/)==null){
		//helpR}h
		linetemp ='\nuาๆาๆ`IาามIv' + '\n @\๊'+'\n@dice@\'+'\n@ACT : ANVfg\' + '\n@Yume : ฒฉ\'
			+ '\n@choice [A] [B]c : I๐@\' + '\n@Help : wv@\';
	}
	if (linetemp=="") return;
	output = '๕ ' + user + linetemp;
	if (output.match(/function\s\(user\,\sbody/)) return;
	return output;
}