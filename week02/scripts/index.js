window.onload = function () {
    function createPost (e) {
        var Container = createPostDom('div', 'post');

        var Cover = createPostDom('div', 'cover');
        var CovImg = createPostDom('img', e.cover);
        Cover.appendChild(CovImg);

        var Avatar = createPostDom('div', 'avatar');
        var AvaImg = createPostDom('img', e.avatar);
        Avatar.appendChild(AvaImg);

        var Name = createPostDom('a', e.name);
        var Badge = createPostDom('div', 'badge');
        var BadTex = createPostDom('a', e.badge);
        Badge.appendChild(BadTex);

        var likesContainer = createPostDom('div', 'likes');
        var likesImg = createPostDom('img', './imgs/icon-like.svg');
        var likesNum = createPostDom('a', e.likes);

        var viewsContainer = createPostDom('div', 'views');
        var viewsImg = createPostDom('img', './imgs/icon-view.svg');
        var viewsNum = createPostDom('a', e.views);

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
                }
            }
        }
    }

    var POST_DATA = [];
    LoadTaskData();
    // console.log(POST_DATA);
}