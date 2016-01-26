/*
 * @name 纪念日 jnr
 * @site www.dyniao.com
 * @version 1.1
 * @author dyniao
 */
;(function($) {

    $.fn.jnr = function(options) {

        var tpl=[
            "&#9829; 我们相遇 {d} 天，相识 {h} 小时，相知 {m} 分钟，相爱 {s} 秒 &#9829;",
            "&#9829; 我们相爱 {d} 天 {h} 小时 {m} 分钟 {s} 秒 &#9829;"
        ];

        var defaults = {
            mydatetime: new Date(),
            model: 0,
            template: tpl[options.model]
        };

        options = $.extend({},defaults, options);
        this.each(function(){

            var _this = $(this);

            function countTime()
            {
                var mydate = new Date(options.mydatetime);
                var totalSecs = (new Date() - mydate);
                var days,hours,mins,secs;
                var result = options.template;
                if(options.model)
                {
                    days = Math.floor(totalSecs/864E5);
                    hours = Math.floor(totalSecs%864E5/36E5);
                    mins = Math.floor(totalSecs%864E5%36E5/6E4);
                    secs = Math.round(totalSecs%864E5%36E5%6E4/1E3);
                }
                else
                {
                    days = Math.floor(totalSecs/1E3/3600/24);
                    hours = Math.floor(totalSecs/1E3/3600);
                    mins = Math.floor(totalSecs/1E3/60);
                    secs = Math.floor(totalSecs/1E3);
                }

                var arr = {d:days,h:hours,m:mins,s:secs,t:mydate};

                _this.html(result.replace(/{(\w+)}/g,function($0,$1,$2,$3,$4){return arr[$1];}));
            }
            _this.html("loading ...");
            setInterval(countTime,1000);
        });
    };
})(jQuery);