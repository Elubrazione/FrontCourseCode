window.onload = function () {

    /* 生成完整Albums节点，包含专辑封面、名称、歌手、时间、删除按钮等 */
    function createAlbumsDom (e) {
        var box = document.createElement('div');
        box.className = 'album';

        var imgbox1 = document.createElement('div');
        var imgbox2 = document.createElement('div');
        imgbox1.className = 'cover';
        imgbox2.className = 'mask';
        var img1 = document.createElement('img');
        var img2 = document.createElement('img');
        img1.src = e.cover;
        img2.src = './imgs/delete.png';
        img2.addEventListener('click', deleteAlbum);
        imgbox2.appendChild(img2);
        imgbox1.appendChild(img1);
        imgbox1.appendChild(imgbox2);

        var titleinfo = document.createElement('a');
        titleinfo.innerText = e.name;
        titleinfo.className = 'title nowrap';
        titleinfo.href = '#';

        var authorinfo = document.createElement('a');
        authorinfo.innerText = e.singer;
        authorinfo.href = '#';

        var timeinfo = document.createElement('div');
        timeinfo.innerText = e.release_time;

        box.appendChild(imgbox1);
        box.appendChild(titleinfo);
        box.appendChild(authorinfo);
        box.appendChild(timeinfo);

        var sec = document.getElementById('section0');
        sec.appendChild(box);
    }

    /* 从外部通过albums.json文件导入专辑信息 */
    function LoadAlbumData () {
        var request = new XMLHttpRequest();
        request.open('get', './data/albums.json');
        request.send(null);
        request.onload = function () {
            if (request.status === 200) {
                var json = JSON.parse(request.responseText);
                // console.log('ALBUMS.length: ', json.length);
                for (let i = 0; i < json.length; i++) {
                    ALBUM_DATA[i] = json[i];
                }
            }
        }
    }

    /* 根据地域名，从存有专辑信息的数组里筛选出待生成的专辑 */
    function selectAlbums (areaName) {
        for (let i = 0; i < ALBUM_DATA.length; i++) {
            // console.log('areaNum: ', ALBUM_DATA[i].area - 1)
            // console.log('Querry: ', AREA_DATA[ALBUM_DATA[i].area - 1])
            if (AREA_DATA[ALBUM_DATA[i].area - 1] != undefined) {
                if (AREA_DATA[ALBUM_DATA[i].area - 1].name === areaName) {
                    createAlbumsDom(ALBUM_DATA[i]);
                }
            } else  { return; }
        }
    }

    /* 导航栏点击事件 */
    function tabClick(e) {
        if (e.target.className === 'tab_item tab_active'){
            return;
        } else {
            var pre_tab = document.getElementsByClassName('tab_active');
            // console.log('pre_tab: ', pre_tab.length);
            if (pre_tab.length > 0) {
                pre_tab[0].className = 'tab_item';
            }

            var sec = document.getElementById('section0');
            sec.innerHTML = '';

            e.target.className = 'tab_item tab_active';
            var areaName = e.target.innerText;
            // console.log('areaName: ', areaName);
            selectAlbums(areaName);
        }
    }

    /* 删除专辑事件 */
    function deleteAlbum (e) {
        e.target.id = 'toDelete';
        var parDom = document.getElementById(e.target.id).parentElement.parentElement.parentElement;
        var NameDom = document.getElementById(e.target.id).parentElement.parentElement.nextElementSibling;
        // console.log(NameDom);
        var toDeleteData = ALBUM_DATA.find(ele => ele?.name === NameDom.innerText);
        var toDeleteIndex = ALBUM_DATA.indexOf(toDeleteData);
        ALBUM_DATA.splice(toDeleteIndex, 1);
        parDom.remove();
    }

    /* L O A D */
    var AREA_DATA = [];
    var ALBUM_DATA = [];
    LoadAlbumData();

    var list = document.getElementById('ul0');
    var request = new XMLHttpRequest();
    request.open('get', './data/areas.json');
    request.send(null);
    request.onload = function () {
        if (request.status === 200) {
            var json = JSON.parse(request.responseText);
            for (let i = 0; i < json.length; i++) {
                AREA_DATA[i] = json[i];
                // console.log(AREA_DATA[i].name);
                var item = document.createElement('li');
                item.innerText = json[i].name;
                if (i === 0) {
                    item.className = 'tab_item tab_active';
                    selectAlbums(json[i].name);
                } else {
                    item.className = 'tab_item';
                }
                item.addEventListener('click', tabClick);
                list.appendChild(item);
            }
        }
    }
}