$(function () {
    var config = {
     
        'loading': 'loading-ic'
    };

    window.onload = function() {
        $('#loading').hide();
    }

    var data = {
        iWidth: document.documentElement.clientWidth,
        iHeight: document.documentElement.clientHeight,
        contaniner: $("#main"),
        aLi: $("#main li")
    }
    setSize(data.iWidth, data.iHeight);
    var len = data.aLi.size();

    setTransition();


    function setSize(iW, iH) {
        data.aLi.width(iW).height(iH);
    }

    var iNow = 0;

    data.contaniner.swipe("up", function () {
        iNow++;
        if (iNow>=len-1) {
            iNow = len - 1;
        }
        data.contaniner.css("-webkit-transform", "translateY(" + -(iNow * data.iHeight) + "px)").off("webkitTransitionEnd").on("webkitTransitionEnd", function () {
            //data.aLi.eq(iNow).find("*").css("-webkit-transform", "none").css("-webkit-transition", ".5s").css({ opacity: 1 });
        });
    }).swipe("down", function () {
        iNow--;
        if (iNow<=0) {
            iNow = 0;
        }
        data.contaniner.css("-webkit-transform", "translateY(" + -(iNow * data.iHeight) + "px)");
    });
    function setTransition() {
        data.contaniner.css("-webkit-transition", isSupportBezier() ? "1s -webkit-transform cubic-bezier(1.000, 0.055, 0.930, 0.980)" : ".8s -webkit-transform ease-out");
    }
});
