# 纪念日插件
本插件基于 jQuery 实现计算当前时间距离纪念日的天时分秒，两种模式，可以自定义模板。

**新增** 一个倒计时功能，只要传入的日期比当前日期大，则自动开启倒计时功能。
**新增** 很简单的多语言设置。

# 例子
```
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.jnr-time.js" type="text/javascript"></script>
```

页面调用
```
<script type="text/javascript">
	$(document).ready(function() {
	$("body").jnr({
		mydatetime:date,
		model:0,
		format:"",
		language:"",
		template:"",
	});
});
</script>
```

# 参数介绍

**mydatetime** `默认值：当前时间`
填入要进行日期计算的 Date 值，只要是javascript可以识别的时间都可以，推荐 `2016/01/21 08:59:59` 这种方式。
如果不填写则从打开页面的时间开始算起，亦可以做计时器使用。

**model** `默认值：0`
两种计时模式(0和1)；一种倒计时模式(2)
如果设置的时间比当前时间晚，则自动设为模式2；

**0** _为计算出完整的天、时、分、秒_
```
示例：我们相逢在 2013年01月21日 08:59:59 ，相遇 1102 天，相识 26452 小时，相知 1587137 分钟，相爱 95228244 秒
```

**1** _为计算出逝去的时间_
```
示例：自从 2013年01月21日 08:59:59 我们相爱了 1102 天 4 小时 17 分钟 49 秒
```

**2** _为倒计时间_
```
示例：距离2019年01月21日 还有 1088 天 22 小时 10 分钟 31 秒
```

**template** `默认值：0`
自定义显示出来的html模板
>支持{d}天，{h}小时，{m}分钟，{s}秒，{t}为传入的完整的时间。


**format** `默认值：yyyy年MM月dd日 hh:mm:ss`
将时间{t}格式化。
>支持 yyyy年，MM月，dd日，hh时，mm分，ss秒。


**language** `默认值：{e: "", u: "", o: "", t: ""}`
可以设置出错的语句的语言。
>{e: "设置了模板，但是没有填写内容", u: "错误元素", o: "倒计时结束", t: "超出模板范围了"}

# 进阶

读取页面 HASH 的值（#）
```
var hash = window.location.hash.replace("#",""),date;
```

验证是否合法时间，如果不是则获取当前时间
```
date = hash?new Date(Date.parse(hash.replace(/-/g,"/"))):Date();
```