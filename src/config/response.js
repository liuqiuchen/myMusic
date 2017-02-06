// screen.width IE8及以下不支持
// 缩小屏幕并刷新就能看到效果
(function (doc, win) {
    let size = '';
    let screenWidth = 0;
    let root = doc.documentElement; // 在html上生成一个class

    if(win.screen && screen.width) {
        screenWidth = screen.width;

        if(screenWidth > 1200 && screenWidth <= 1920) {
            size = 'pc';
        } else if(screenWidth <= 480) {
            size = 'mobile';
        }

        win.size = size; // js可以拿去判断
        root.className = size; // css可以拿去写样式
    }
})(document, window);





