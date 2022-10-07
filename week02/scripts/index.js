window.onload = function () {

    function LoadMinHeader () {
        var header = document.getElementById('header');
        console.log(header);
        header.innerHTML = `
            <div id="menu">
                <img src="./imgs/icon-menu.svg" width="18" class="menu">
            </div>
            <div id="header-title">
                <img src="./imgs/logo-black.svg" width="82" class="header-title">
            </div>
            <div id="login">
                <div class="login">Sign in</div>
            </div>`;
        var menu = document.getElementById('menu').childNodes[1];
        menu.addEventListener('click', onClickMenu);
    }

    function LoadMaxHeader () {
        var header = document.getElementById('header');
        header.innerHTML = `
            <div class="header-left">
                <div id="header-title-plu">
                    <img src="./imgs/logo-black.svg" width="76" class="header-title">
                </div>
                <div class="menu-container">
                    <div class="menutext-plus">Inspiration</div>
                    <div class="menutext-plus">Find Work</div>
                    <div class="menutext-plus" id="spec">Learn Design</div>
                    <div class="menutext-plus">Go Pro</div>
                    <div class="menutext-plus">Hire Designers</div>
                </div>
            </div>
            <div class="header-right">
                <div class="login-plus">Sign in</div>
                <div class="banner-button-plus">Sign up</div>
            </div>`;

        var width = document.documentElement.clientWidth;
        if (width < 1366) {
            document.getElementById('spec').innerText = 'Learn';
        }

    }

    function LoadBanner () {
        var banner = document.createElement('div');
        banner.id = 'welcome';
        document.body.appendChild(banner);
        // console.log(banner);
        // banner.className = 'banner';
        banner.innerHTML = `
            <div class="banner">
                <div class="banner-img">
                    <img id="banner" src="./imgs/banner.webp">
                </div>
                <div class="banner-text">
                    <div class="banner-head">
                        Discover the world's top designers & creatives
                    </div>
                    <div class="banner-details">
                        Dribbble is the leading destination to find & showcase creative work and home to the world's best design prefessionals.
                    </div>
                    <div class="banner-button">Sign up</div>
                </div>
            </div>`;
    }

    function createPost (e) {
        var container = createPostDom('div', 'post');

        var cover = createPostDom('div', 'cover');
        var covImg = createPostDom('img', e.cover);
        cover.appendChild(covImg);

        var posterInfo = createPostDom('div', 'pinfo');

        var avatar = createPostDom('div', 'avatar');
        var avaImg = createPostDom('img', e.avatar);
        avaImg.className = 'avatarimg';
        avatar.appendChild(avaImg);
        posterInfo.appendChild(avatar);

        var name = createPostDom('a', e.name);
        name.className = 'poname';
        posterInfo.appendChild(name);

        if (e.badge != '') {
            var badge = createPostDom('div', 'badge');
            var badTex = createPostDom('a', e.badge);
            badTex.className = 'badTex';
            badge.appendChild(badTex);
            posterInfo.appendChild(badge);
        }

        var likesContainer = createPostDom('div', 'likes');
        var likesImg = createPostDom('img', './imgs/icon-like.svg');
        likesImg.width = '14';
        var likesNum = createPostDom('a', e.likes);
        likesNum.className = 'number';
        likesContainer.appendChild(likesImg);
        likesContainer.appendChild(likesNum);

        var viewsContainer = createPostDom('div', 'views');
        var viewsImg = createPostDom('img', './imgs/icon-view.svg');
        viewsImg.width = '14';
        var viewsNum = createPostDom('a', e.views);
        viewsNum.className = 'number';
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

        var sec = document.createElement('section');
        document.body.appendChild(sec);
        sec.className = 'list';
        sec.id = 'list';

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

    function onClickMenu () {

        var banner = document.getElementById('welcome');
        var menu = document.getElementById('menu').childNodes[1];
        if (banner != null) {
            menu.src = './imgs/icon-close.svg';
            menu.width = '24';

            var list = document.getElementById('list');
            var footer = document.getElementById('footer');
            banner.remove();
            list.remove();
            footer.remove();

            var unfoldMenu = document.createElement('div');
            document.body.appendChild(unfoldMenu);
            unfoldMenu.id = 'unfoldMenu';
            unfoldMenu.innerHTML = `
                <div class="menutext">Inspiration</div>
                <div class="menutext">Find Work</div>
                <div class="menutext">Learn Design</div>
                <div class="menutext">Go Pro</div>
                <div class="menutext">Hire Designers</div>`;
            unfoldMenu.className = 'tabbanner';

        } else {

            menu.src = './imgs/icon-menu.svg';
            menu.width = '18';
            var unfoldMenu = document.getElementById('unfoldMenu');
            unfoldMenu.remove();

            LoadBanner();
            // console.log(POST_DATA);
            LoadTaskData();
            LoadFooter();
        }
    }

    function LoadFooter () {
        var footer = document.createElement('footer');
        document.body.appendChild(footer);
        footer.id = 'footer';
        footer.innerHTML = `
            <div class="foologo"><img src="./imgs/logo-red.svg"></div>
            <div class="footext">
                <a>Dribbble is the world's leading
                    </br>community for creatives to share, grow
                    </br>and get hired.
                </a>
            </div>`;
    }


    var POST_DATA = [];
    var width = document.documentElement.clientWidth;

    if (width < 920) {
        LoadMinHeader();
        LoadBanner();
        LoadTaskData();
        LoadFooter();
    } else {
        LoadMaxHeader();
        LoadBanner();
        LoadTaskData();
        LoadFooter();
    }

    window.addEventListener('resize', function () {
        var widthListen = document.documentElement.clientWidth;
        console.log(widthListen);
        if (widthListen >= 920) {
            LoadMaxHeader();
        } else {
            LoadMinHeader();
        }
    })
}
