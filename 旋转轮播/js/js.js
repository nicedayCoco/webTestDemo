/**
 * Created by Lenovo on 2016/9/13.
 */
window.onload = function () {

    var arr = [
        {// 1
            width:400,
            top:70,
            left:50,
            opacity:20,
            zIndex:2
        },
        {// 2
            width:600,
            top:120,
            left:0,
            opacity:80,
            zIndex:3
        },
        { // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            zIndex:4
        },
        { // 4
            width:600,
            top:120,
            left:600,
            opacity:80,
            zIndex:3

        },
        { // 5
            width:400,
            top:70,
            left:750,
            opacity:20,
            zIndex:2
        }

    ];

    var slide = document.getElementById("slide");
    var liArr = slide.getElementsByTagName("li");
    var arrow = slide.children[1];
    var arrowChildren = arrow.children;
    var flag = true;

    slide.onmouseenter = function () {
        animate(arrow,{"opacity":100});
    }

    slide.onmouseleave = function () {
        animate(arrow,{"opacity":0});
    }

    move();

    arrowChildren[0].onclick = function () {
        if(flag){
            flag = false;
            move(true);
        }
    }

    arrowChildren[1].onclick = function () {
        if(flag){
            flag = false;
            move(false);
        }
    }


    function move(bool) {
        if(bool === true || bool === false){
            if(bool){
                arr.unshift(arr.pop());
            }else {
                arr.push(arr.shift());
            }
        }

        for (var i=0;i<liArr.length;i++){
            animate(liArr[i],arr[i],function () {
                flag = true;
            });
        }
    }


}