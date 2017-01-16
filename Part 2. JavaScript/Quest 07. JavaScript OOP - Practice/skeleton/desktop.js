var Desktop = function(icon, folder1, folder2) {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.icon = new Icon(icon, false, 'i1');
    this.folder1 = new Icon(folder1, true, 'f1');
    this.folder2 = new Icon(folder2, true, 'f2');
};

var Icon = function(icon, isFolder, id) {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // For icons
    this.id = id;
    this.icon = icon;
    this.move = move;
    var _x, _y, x_, y_;
    var clicked = false;

    this.icon.onmousemove = function(event) {
        x_ = event.pageX;
        y_ = event.pageY;
        if(clicked) {
            var gradient = move(this, _x, _y, x_, y_);
            _x += gradient[0];
            _y += gradient[1];
        }
    }

    this.icon.onmousedown = function(event) {
        _x = event.pageX;
        _y = event.pageY;
        clicked = true;
    }

    this.icon.onmouseup = function(event) {
        clicked = false;
    }

    // For folders
    this.isFolder = isFolder;
    var folder = null;
    var opened = false;

    if(isFolder) {
        folder = new Folder({ className: 'fopened',
                                left: '0px',
                                top: '0px',
                                width: '200px',
                                height: '200px',
                                id: this.id });
    }

    if(isFolder) {
        this.icon.ondblclick = function() {
            console.log("HIIHHI");
            folder.open();
        }
    }
};

var Folder = function(info) {
    /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.folder = (function() {
        var div = document.createElement("div");
        var idAtt = document.createAttribute("id");
        idAtt.value = info['id'];
        var classAtt = document.createAttribute("class");
        classAtt.value = info['className'];
        var styleAtt = document.createAttribute("style");
        styleAtt.value = 'left: ' + info['left'] + '; ' + 'top: ' + info['top'] + '; ' + 
                          'width: ' + info['width'] + '; ' + 'height: ' + info['height'] + ';';
        div.setAttributeNode(idAtt);
        div.setAttributeNode(classAtt);
        div.setAttributeNode(styleAtt);
        return div;
    })();

    this.move = move;
    var _x, _y, x_, y_;
    var clicked = false;

    this.open = function() {
        var element = document.getElementsByClassName("window");
        element[0].appendChild(this.folder);
    }

    this.close = function() {

    }

    this.folder.onmousemove = function(event) {
        x_ = event.pageX;
        y_ = event.pageY;
        if(clicked) {
            var gradient = move(this, _x, _y, x_, y_);
            _x += gradient[0];
            _y += gradient[1];
        }
    }

    this.folder.onmousedown = function(event) {
        _x = event.pageX;
        _y = event.pageY;
        clicked = true;
    }

    this.folder.onmouseup = function(event) {
        clicked = false;
    }

    this.folder.ondblclick = function(event) {
        var parent = document.getElementsByClassName("window");
        var child = document.getElementById(info['id']);
        parent[0].removeChild(child);
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
    return [dx, dy];
}
