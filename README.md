# 纪念日插件
本插件实现计算当前时间距离纪念日的天时分秒，两种模式，可以自定义模板。

# 用法
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
	});
});
</script>
```

# 介绍

`mydatetime` 为传入的 Date 值
`model` 两种模式，0和1。
> 0为计算出完整的天、时、分、秒
```
963 天，23125 小时 1387519 分钟 83251195 秒
```

> 1为计算出逝去的时间
```
963 天，13 小时，21 分钟，33 秒
```
`template` 自定义html模板，支持{d}天，{h}小时，{m}分钟，{s}秒

# 进阶

读取页面 HASH 的值（#）
```
var hash = window.location.hash.replace("#",""),date;
```

验证是否合法时间，如果不是则获取当前时间
```
date = hash?new Date(Date.parse(hash.replace(/-/g,"/"))):Date();
```