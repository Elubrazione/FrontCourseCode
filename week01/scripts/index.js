function createAlbums(e) {
    const box = document.createElement("div");
    box.classList = "album";

    const imgbox1 = document.createElement("div");
    const imgbox2 = document.createElement("div");
    imgbox1.classList = "cover";
    imgbox2.classList = "mask";
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    img1.src = e.cover;
    img2.src = './imgs/delete.png';
    imgbox2.appendChild(img2);
    imgbox1.appendChild(img1);
    imgbox1.appendChild(imgbox2);

    const titleinfo = document.createElement("a");
    titleinfo.innerText = e.name;
    titleinfo.classList = "title nowrap";
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

    const sec = document.getElementsByClassName("section");
    sec.appendChild(box);
}

window.onload = function() {

    const root = document.getElementById('root');
    /*
    ** Create tabs
    */
    const main = document.getElementById("mainbody");
    const list = document.getElementById("ul0");
    var request = new XMLHttpRequest();
    request.open("get", "./data/areas.json");
    request.send(null);
    request.onload = function() {
        if(request.status == 200) {
            var json = JSON.parse(request.responseText);
            for(let i=0; i<json.length; i++){
                // areas_data[i] = json[i];
                const item = document.createElement("li");
                item.innerText = json[i].name;
                item.className = "tab_item";
                list.appendChild(item);
            }
        }
    }

    // request.open("get", "./data/albums.json");
    // request.send(null);
    // request.onload = function() {
    //     if(request.status == 200) {
    //         var json = JSON.parse(request.responseText);
    //         for(let i=0; i<json.length; i++){
    //             albums_data[i] = json[i];
    //             console.log(albums_data[i]);
    //         }
    //     }
    // }
}