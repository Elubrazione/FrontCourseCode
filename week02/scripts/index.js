window.onload = function () {

    function createPost (e) {
        var container = createPostDom('div', 'post');

        var cover = createPostDom('div', 'cover');
        var covImg = createPostDom('img', e.cover);
        cover.appendChild(covImg);

        var avatar = createPostDom('div', 'avatar');
        var avaImg = createPostDom('img', e.avatar);
        // avaImg.width = '28';
        // avaImg.height = '28';
        avatar.appendChild(avaImg);
        var name = createPostDom('a', e.name);
        var badge = createPostDom('div', 'badge');
        var badTex = createPostDom('a', e.badge);
        badge.appendChild(badTex);

        var posterInfo = createPostDom('div', 'pinfo');
        posterInfo.appendChild(avatar);
        posterInfo.appendChild(name);
        posterInfo.appendChild(badge);

        var likesContainer = createPostDom('div', 'likes');
        var likesImg = createPostDom('img', './imgs/icon-like.svg');
        likesImg.width = '18';
        var likesNum = createPostDom('a', e.likes);
        likesContainer.appendChild(likesImg);
        likesContainer.appendChild(likesNum);

        var viewsContainer = createPostDom('div', 'views');
        var viewsImg = createPostDom('img', './imgs/icon-view.svg');
        viewsImg.width = '18';
        var viewsNum = createPostDom('a', e.views);
        viewsContainer.appendChild(viewsImg);
        viewsContainer.appendChild(viewsNum);

        var dataInfo = createPostDom('div', 'dinfo');
        dataInfo.appendChild(likesContainer);
        dataInfo.appendChild(viewsContainer);

        var totalInfo = createPostDom('div', 'tinfo');
        totalInfo.appendChild(posterInfo);
        totalInfo.appendChild(dataInfo);

        container.appendChild(cover);
        container.appendChild(totalInfo);

        // console.log(container);
        var sec = document.getElementById('list');
        sec.appendChild(container);
    }

    function createPostDom (type, name) {
        var box = document.createElement(type);
        if (type === 'div') {
            box.className = name;
        } else if (type === 'img') {
            box.src = name;
        } else {
            box.innerText = name;
        }
        return box;
    }

    function LoadTaskData () {
        var request = new XMLHttpRequest();
        request.open('get', './task.json');
        request.send(null);
        request.onload = function () {
            if(request.status === 200) {
                var json = JSON.parse(request.responseText);
                for(let i = 0; i < json.length; i++) {
                    POST_DATA[i] = json[i];
                    createPost(POST_DATA[i]);
                }
            }
        }
    }

    var POST_DATA = [];

    LoadTaskData();
}