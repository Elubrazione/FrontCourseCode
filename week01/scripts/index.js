window.onload = function() {

    var AREA_DATA = [];
    const root = document.getElementById('root');

    function createAlbums(e) {
        const box = document.createElement("div");
        box.className = "album";
    
        const imgbox1 = document.createElement("div");
        const imgbox2 = document.createElement("div");
        imgbox1.className = "cover";
        imgbox2.className = "mask";
        const img1 = document.createElement("img");
        const img2 = document.createElement("img");
        img1.src = e.cover;
        img2.src = './imgs/delete.png';
        imgbox2.appendChild(img2);
        imgbox1.appendChild(img1);
        imgbox1.appendChild(imgbox2);

        const titleinfo = document.createElement("a");
        titleinfo.innerText = e.name;
        titleinfo.className = "title nowrap";
        titleinfo.href = "#";

        const authorinfo = document.createElement("a");
        authorinfo.innerText = e.singer;
        authorinfo.href = "#";

        const timeinfo = document.createElement("div");
        timeinfo.innerText = e.release_time;

        box.appendChild(imgbox1);
        box.appendChild(titleinfo);
        box.appendChild(authorinfo);
        box.appendChild(timeinfo);

        const sec = document.getElementById("section0");
        sec.appendChild(box);
    }


    function tabClick(e) {

        var pre_tab = document.getElementsByClassName("tab_active");
        // console.log("pre_tab: ", pre_tab.length);
        if(pre_tab.length > 0) {
            pre_tab[0].className = "tab_item";
        }

        const sec = document.getElementById("section0");
        sec.innerHTML = '';

        e.target.className = "tab_item tab_active";
        var areaName = e.target.innerText;
        // console.log("areaName: ", areaName);
        var request = new XMLHttpRequest();
        request.open("get", "./data/albums.json");
        request.send(null);
        request.onload = function() {
            if(request.status == 200) {
                var json = JSON.parse(request.responseText);
                // console.log("ALBUMS.length: ", json.length);
                for(let i=0; i<json.length; i++){
                    // ALBUM_DATA[i] = json[i];
                    // console.log("areaNum: ", json[i].area - 1)
                    // console.log("Querry: ", AREA_DATA[json[i].area - 1].name)
                    if(AREA_DATA[json[i].area - 1].name == areaName) {
                        createAlbums(json[i]);
                    }
                }
            }
        }
    }


    const list = document.getElementById("ul0");
    var request = new XMLHttpRequest();
    request.open("get", "./data/areas.json");
    request.send(null);
    request.onload = function() {
        if(request.status == 200) {
            var json = JSON.parse(request.responseText);
            for(let i=0; i<json.length; i++){
                AREA_DATA[i] = json[i];
                const item = document.createElement("li");
                item.innerText = json[i].name;
                item.className = "tab_item";
                list.appendChild(item);
            }
        }
    }
    // console.log(AREA_DATA);
    document.querySelector("ul").addEventListener("click", tabClick);
}