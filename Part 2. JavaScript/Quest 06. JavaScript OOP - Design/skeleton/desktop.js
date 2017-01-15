var Desktop = function() {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.makeFolder = makeFolder;
    this.makeIcon = makeIcon;
};

var Icon = function() {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.positionX;
    this.positionY;
    this.move = move; // 드래그를 통한 MOVE -> 함수 정의 필요
    this.isFolder = isFolder; // 폴더인지 아닌지
    this.open = openFolder; // 폴더라면, 더블클릭을 통한 폴더 열기 -> 함수 정의 필요
};

var Folder = function() {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.positionX;
    this.positionY; // 폴더 창의 위치..
    this.move = move; // 드래그를 통한 MOVE -> 함수 정의 필요
};

var Window = function() {
	/* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    this.icons;

    // this.folder1 = Folder;
    // this.folder2 = Folder;
    // this.icon = Icon;
};
