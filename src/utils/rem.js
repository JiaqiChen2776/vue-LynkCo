(function(doc, win) {
  var docEl = doc.documentElement,    //拿到 html 标签
      resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          console.log(clientWidth);
          docEl.style.fontSize = 16 * (clientWidth / 750) + 'px';
      };
  if (!doc.addEventListener) return;   // 安全处理
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);     //  DOMContentLoaded 比 Load 更快
    
})(document, window)
