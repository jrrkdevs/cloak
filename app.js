var title = document.createElement("div")
title.className = "cloaktitle"
title.innerText = "cloak"
appid.appendChild(title)

var items = document.createElement("center")

var tab = document.createElement("button")
tab.className = "cloaktab"
tab.innerText = "Tab Cloak"
tab.setAttribute("onclick", 'new Nightmare({"title": "Tab Cloak","type": "js","js": "https://cdn.jsdelivr.net/gh/FogNetwork/Vapor/tab.min.js","width": 400,"height": 300,"theme": "dark"})')
items.appendChild(tab)

var inspect = document.createElement("button")
inspect.className = "Cloak"
inspect.innerText = "X-Ray"
inspect.setAttribute("onclick", "javascript:(function () {var a = document.createElement('script');a.src = 'https://cdn.jsdelivr.net/gh/FogNetwork/Avo/avo.min.js';document.body.appendChild(a);}())")
items.appendChild(inspect)

appid.appendChild(items)

var cloakstyle = document.createElement("style")
cloakstyle.innerText = ".cloaktitle {font-size: 60px; text-align: center; color: white; user-select: none; margin-top: 10px;}.cloaktab{cursor: pointer;background: #303134;border-radius: 2.5px;height: 50px;text-align: center;line-height: 50px;color: white; border: none; font-size: 18px;user-select: none; margin: 5px;} .cloaktab:hover {background: darkslategrey;}"
document.getElementsByTagName("html")[0].appendChild(cloakstyle)