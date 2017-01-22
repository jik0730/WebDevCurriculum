var Desktop = function(desktop, win, icon, folder1, folder2) {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    var desktop = desktop;
    var win = new Window(win, icon, folder1, folder2);
    var opened = true;

    this.openWindow = function() {
        if(!opened) {
            var parent = desktop;
            var child = win.getWindow();
            parent.appendChild(child);
            opened = true;
        }
    }

    this.closeWindow = function() {
        if(opened) {
            var parent = desktop;
            var child = win.getWindow();
            parent.removeChild(child);
            opened = false;
        }
    }
};

var Icon = function(icon, isFolder, id) {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // For icons
    var id = id;
    var icon = icon;
    Moving(icon, icon);

    // For folders
    var isFolder = isFolder;
    var folder = null;

    if(isFolder) {
        folder = new Folder({ className: 'fopened',
                                left: '0px',
                                top: '0px',
                                width: '200px',
                                height: '200px',
                                id: id });
    }

    if(isFolder) {
        icon.ondblclick = function() {
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

        var table = CreateTable();
        div.appendChild(table);

        return div;
    })();

    var topLeft = this.folder.getElementsByClassName('ftop')[0].getElementsByClassName('fleft')[0];
    var topMid = this.folder.getElementsByClassName('ftop')[0].getElementsByClassName('fmidh')[0];
    var topRight = this.folder.getElementsByClassName('ftop')[0].getElementsByClassName('fright')[0];
    var midLeft = this.folder.getElementsByClassName('fmidv')[0].getElementsByClassName('fleft')[0];
    var midRight = this.folder.getElementsByClassName('fmidv')[0].getElementsByClassName('fright')[0];
    var botLeft = this.folder.getElementsByClassName('fbot')[0].getElementsByClassName('fleft')[0];
    var botMid = this.folder.getElementsByClassName('fbot')[0].getElementsByClassName('fmidh')[0];
    var botRight = this.folder.getElementsByClassName('fbot')[0].getElementsByClassName('fright')[0];

    Moving(this.folder, this.folder.getElementsByClassName('fmidv')[0].getElementsByClassName('fmidh')[0]);
    
    Resizing(this.folder, topLeft, [true, true], [true, true]);
    Resizing(this.folder, topMid, [true, false], [true, null]);
    Resizing(this.folder, topRight, [true, true], [true, false]);
    Resizing(this.folder, midLeft, [false, true], [null, true]);
    Resizing(this.folder, midRight, [false, true], [null, false]);
    Resizing(this.folder, botLeft, [true, true], [false, true]);
    Resizing(this.folder, botMid, [true, false], [false, null]);
    Resizing(this.folder, botRight, [true, true], [false, false]);

    this.open = function() {
        var element = document.getElementsByClassName("window");
        element[0].appendChild(this.folder);
    }

    // Close folder
    this.folder.ondblclick = function(event) {
        var parent = document.getElementsByClassName("window");
        var child = document.getElementById(info['id']);
        parent[0].removeChild(child);
    }
};

var Window = function(win, icon, folder1, folder2) {
    /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    var win = win;
    var icon = new Icon(icon, false, 'i1');
    var folder1 = new Icon(folder1, true, 'f1');
    var folder2 = new Icon(folder2, true, 'f2');

    this.getWindow = function() {
        return win;
    }    
};

// Moving function with element.
var Moving = function(icon, movingArea) {
    var icon = icon;
    var movingArea = movingArea;
    var _x, _y, x_, y_;
    var clicked = false;
    var win_left = 20;
    var win_top = 20;
    var win_right = 960;
    var win_bottom = 650;

    document.getElementsByClassName('window')[0].addEventListener('mousemove', function(event){
        if(clicked){
            x_ = event.pageX;
            y_ = event.pageY;
            var gradient = move(icon, _x, _y, x_, y_);
            _x += gradient[0];
            _y += gradient[1];
        }
    });

    movingArea.onmousedown = function(event) {
        _x = event.pageX;
        _y = event.pageY;
        clicked = true;
    }

    movingArea.onmouseup = function(event) {
        clicked = false;
    }

    var move = function(icon, _x, _y, x_, y_) {
        var dx = x_ - _x;
        var dy = y_ - _y;
        var leftVal = parseInt(icon.style.left, 10);
        var topVal = parseInt(icon.style.top, 10);
        var icon_width = parseInt(icon.style.width, 10);
        var icon_height = parseInt(icon.style.height, 10);

        if(dx+leftVal+icon_width > win_right || dx+leftVal < -win_left) {
            dx = 0;
            clicked = false;
        }
        if(dy+topVal+icon_height > win_bottom || dy+topVal < -win_top) {
            dy = 0;
            clicked = false;
        }
        icon.style.left = (leftVal + dx) + "px";
        icon.style.top = (topVal + dy) + "px";
        return [dx, dy];
    }
};

var CreateTable = function() {
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");
    var th6 = document.createElement("th");
    var th7 = document.createElement("th");
    var th8 = document.createElement("th");
    var th9 = document.createElement("th");

    var fleftAtt = document.createAttribute("class");
    fleftAtt.value = 'fleft';
    var frightAtt = document.createAttribute("class");
    frightAtt.value = 'fright';
    var fmidhAtt = document.createAttribute("class");
    fmidhAtt.value = 'fmidh';
    var ftopAtt = document.createAttribute("class");
    ftopAtt.value = 'ftop';
    var fmidvAtt = document.createAttribute("class");
    fmidvAtt.value = 'fmidv';
    var fbotAtt = document.createAttribute("class");
    fbotAtt.value = 'fbot';

    tr1.setAttributeNode(ftopAtt);
    th1.setAttributeNode(fleftAtt);
    th2.setAttributeNode(fmidhAtt);
    th3.setAttributeNode(frightAtt);
    tr1.appendChild(th1);
    tr1.appendChild(th2);
    tr1.appendChild(th3);
    fleftAtt = document.createAttribute("class");
    fleftAtt.value = 'fleft';
    frightAtt = document.createAttribute("class");
    frightAtt.value = 'fright';
    fmidhAtt = document.createAttribute("class");
    fmidhAtt.value = 'fmidh';
    tr2.setAttributeNode(fmidvAtt);
    th4.setAttributeNode(fleftAtt);
    th5.setAttributeNode(fmidhAtt);
    th6.setAttributeNode(frightAtt);
    tr2.appendChild(th4);
    tr2.appendChild(th5);
    tr2.appendChild(th6);
    fleftAtt = document.createAttribute("class");
    fleftAtt.value = 'fleft';
    frightAtt = document.createAttribute("class");
    frightAtt.value = 'fright';
    fmidhAtt = document.createAttribute("class");
    fmidhAtt.value = 'fmidh';
    tr3.setAttributeNode(fbotAtt);
    th7.setAttributeNode(fleftAtt);
    th8.setAttributeNode(fmidhAtt);
    th9.setAttributeNode(frightAtt);
    tr3.appendChild(th7);
    tr3.appendChild(th8);
    tr3.appendChild(th9);

    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);

    return table;
};

var Resizing = function(folder, area, direction, inverse) {
    var folder = folder;
    var area = area;
    var direction = direction;
    var inverse = inverse;
    var clicked = false;
    var _x, _y, x_, y_;

    area.onmousedown = function(event) {
        _x = event.pageX;
        _y = event.pageY;
        clicked = true;
    }
    area.onmouseup = function(event) {
        clicked = false;
    }
    document.getElementsByClassName('window')[0].addEventListener('mousemove', function(event){
        if(clicked){
            x_ = event.pageX;
            y_ = event.pageY;
            var gradient = resize(area, _x, _y, x_, y_, direction, inverse);
            _x += gradient[0];
            _y += gradient[1];
        }
    });

    var resize = function(area, _x, _y, x_, y_, direction, inverse) {
        var dx = x_ - _x;
        var dy = y_ - _y;
        var leftVal = parseInt(folder.style.left, 10);
        var topVal = parseInt(folder.style.top, 10);
        var widthVal = parseInt(folder.style.width, 10);
        var heightVal = parseInt(folder.style.height, 10);
        var vertical_direction = direction[0];
        var horizontal_direction = direction[1];
        var vertical_inverse = inverse[0];
        var horizontal_inverse = inverse[1];
        
        if(vertical_direction) {
            if(vertical_inverse) {
                if(heightVal < 30 && dy > 0) {
                    dy = 0;
                    clicked = false;
                }
                folder.style.top = (topVal + dy) + 'px';
                folder.style.height = (heightVal - dy) + 'px';
            } else {
                if(heightVal < 30 && dy < 0) {
                    dy = 0;
                    clicked = false;
                }
                folder.style.height = (heightVal + dy) + 'px';
            }
        } else {
            dy = 0;
        }
        
        if(horizontal_direction) {
            if(horizontal_inverse) {
                if(widthVal < 30 && dx > 0) {
                    dx = 0;
                    clicked = false;
                }
                folder.style.left = (leftVal + dx) + 'px';
                folder.style.width = (widthVal - dx) + 'px';
            } else {
                if(widthVal < 30 && dx < 0) {
                    dx = 0;
                    clicked = false;
                }
                folder.style.width = (widthVal + dx) + 'px';
            }
        } else {
            dx = 0;
        }

        return [dx, dy];
    }
};
