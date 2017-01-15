var Desktop = function(icon, folder1, folder2) {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    Icon(icon);
    // this.folder1 = new Icon(win, folder1);
    // this.folder2 = Icon(folder2);
};

var Icon = function(icon) {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // this.isFolder = isFolder; // 폴더인지 아닌지
    // this.open = openFolder; // 폴더라면, 더블클릭을 통한 폴더 열기 -> 함수 정의 필요
    this.icon = icon;
    this.xpos = window.getComputedStyle(this.icon).getPropertyValue('left');
    this.ypos = window.getComputedStyle(this.icon).getPropertyValue('top');
    this.move = move;
    var _x, _y, x_, y_;

    icon.onmousedown = function() {
        _x = event.clientX;
        _y = event.clientY;
    }
    this.onmousedown = function() {
        console.log(_x, _y, x_, y_);
        console.log(this);
        if(event.clientX != _x && event.clientY != _y) {
            _x = -1;
            _y = -1;
        }
    }
    this.onmouseup = function() {
        x_ = event.clientX;
        y_ = event.clientY;
        console.log(_x, _y, x_, y_);
        if(_x == -1 && _y == -1) {
            // do nothing
        } else {
            move(icon, _x, _y, x_, y_);
        }
    }
};

var Folder = function(folder) {
    /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // this.positionX;
    // this.positionY; // 폴더 창의 위치..
    // this.move = move; // 드래그를 통한 MOVE -> 함수 정의 필요
    this.folder = folder;
    this.folder.onclick = function() {
        console.log("IANFOLDER");
    }
};

var Window = function() {
    /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // this.icons;

    // this.folder1 = Folder;
    // this.folder2 = Folder;
    // this.icon = Icon;
};

var move = function(icon, _x, _y, x_, y_) {
    var dx = x_ - _x;
    var dy = y_ - _y;
    var leftVal = parseInt(icon.style.left, 10);
    var topVal = parseInt(icon.style.top, 10);
    icon.style.left = (leftVal + dx) + "px";
    icon.style.top = (topVal + dy) + "px";
    icon.xpos += dx;
    icon.ypos += dy;
}
