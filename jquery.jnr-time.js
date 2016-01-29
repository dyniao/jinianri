/*
 * @name 纪念日 jnr
 * @site www.dyniao.com
 * @version 2.1
 * @author dyniao
 */
;(function ($) {

    $.fn.jnr = function (options) {

        var tpl = [
                "&#9829; 我们相逢在 {t} ，相遇 {d} 天，相识 {h} 小时，相知 {m} 分钟，相爱 {s} 秒 &#9829;",
                "&#9829; 自从 {t} 我们相爱了 {d} 天 {h} 小时 {m} 分钟 {s} 秒 &#9829;",
                "距离 {t} 还有 {d} 天 {h} 小时 {m} 分钟 {s} 秒"
            ],
            lng = {e: "设置了模板，但是没有填写内容", u: "错误元素", o: "倒计时结束", t: "超出模板范围了"},
            fmt = "yyyy年MM月dd日",
            mydate = new Date(options.mydatetime),
            now = new Date();

        options.model = (now > mydate) ? options.model : 2;

        var defaults = {
            mydatetime: new Date(),
            model: 0,
            language: lng,
            format: fmt,
            template: tpl[options.model]
        };

        options = $.extend({}, defaults, options);
        this.each(function () {

            var _this = $(this);

            function countTime() {
                now = new Date();
                var totalSecs = (now > mydate) ? (now - mydate) : (mydate - now);
                var days, hours, mins, secs;
                var result = (options.model < tpl.length) ? ( !((now > mydate) && (options.model == 2)) ? (options.template == "" ? options.language.e : options.template ) : options.language.o) : options.language.t;

                if (options.model) {
                    days = Math.floor(totalSecs / 864E5);
                    hours = Math.floor(totalSecs % 864E5 / 36E5);
                    mins = Math.floor(totalSecs % 864E5 % 36E5 / 6E4);
                    secs = Math.round(totalSecs % 864E5 % 36E5 % 6E4 / 1E3);
                }
                else {
                    days = Math.floor(totalSecs / 1E3 / 3600 / 24);
                    hours = Math.floor(totalSecs / 1E3 / 3600);
                    mins = Math.floor(totalSecs / 1E3 / 60);
                    secs = Math.floor(totalSecs / 1E3);
                }

                var arr = {d: days, h: hours, m: mins, s: secs, t: new Date(mydate).Format(options.format)};

                _this.html(result.replace(/{(\w+)}/g, function ($0, $1) {
                    return arr[$1] != undefined ? arr[$1] : (' ' + options.language.u + $0 + ' ');
                }));
            }

            _this.html("loading ...");
            setInterval(countTime, 1000);
        });
    };
Date.prototype.Format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)(new RegExp("("+c+")")).test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a};
})(jQuery);