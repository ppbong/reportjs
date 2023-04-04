# [hiprint](http://hiprint.io/)

## 初始化

```js
hiprint.init()
```

## 模板对象

```js
var hiprintTemplate = new hiprint.PrintTemplate() // 空模板
var hiprintTemplate = new hiprint.PrintTemplate({
    template, // json格式模板
    settingContainer: '#selector', // 模板设置组件使用的HTML容器
    fields: [{field:'',text:''}],  // 元素字段数据源，优先级低于元素类型数据源，fields?下拉框:输入框
})
```

## 模板业务

### `addPrintPanel(options)` 新增面板 `width` 宽mm `height` 高mm `paperHeader` 页眉线pt `paperFooter` 页尾线pt

### `setFileds(fields)` 设置元素字段数据源

### `getOrient()` 纸张方向（1纵向、2横向）

### `rotatePaper()` 旋转纸张

### `getPrintStyle(panelIndex)` 打印样式（border、padding、margin、size等）`panelIdex=0/1/...`

### `getPaperType(panelIndex)` 纸张类型（A4、A3等）`panelIdex=0/1/...`

### `clear()` 清空模板

### `getJson()` 模板格式数据（非配置型）

### `getJsonTid()` 模板格式数据（配置型）

### `getHtml(data,options)` 模板渲染数据为HTML格式 `leftOffset`左偏移 `topOffset`右偏移 `pagerNumberToggleInEven`偶数页页码是否对称

### `print(data,options)` 模板打印数据（含预览）`leftOffset`左偏移 `topOffset`右偏移 `pagerNumberToggleInEven`偶数页页码是否对称

### `print2(data,options)` 模板打印数据（无预览，须对应windows/mac/linux软件支持）

### `printByHtml(html)` 打印任意HTML `printByHtml($('#id').html())`

### `toPdf(data,filename,options)` 导出PDF文件 `leftOffset`左偏移 `topOffset`右偏移 `pagerNumberToggleInEven`偶数页页码是否对称 `scale` 清晰度2/4

### `on(eventName, callback(data))` 打印事件回调，eventName='printSuccess|printError'

### `getPrinterList()` 本地打印机列表（不可用）

### `design(elementSelector)` 模板预览 `#elementId`或`.elementClassName`

### `getElementByName(name, panelIndex=0)` 面板范围内查找元素[]

## 面板对象

```js
var panel = hiprintTemplate.addPrintPanel() // 默认面板（A4=210mm*297mm）
var panel = hiprintTemplate.addPrintPanel({width,height,paperType:'A4',
    paperHeader,paperFooter, // 页眉线和页尾线位置（pt）
    paperNumberLeft,paperNumberTop, // 页码位置（pt）
    paperNumberDisabled, // 是否禁用页码
    rotate, // 是否旋转，改变纵向横向
})
```

## 页面元素

### 文本

```js
panel.addPrintText({options:{width,height,top,left,title,textAlign:'center'}}) // 位置（pt）
```

### 条形码

```js
panel.addPrintText({options:{width,height,top,left,title,textType:'barcode'}}) // 位置（pt）
```

### 二维码

```js
panel.addPrintText({options:{width,height,top,left,title,textType:'qrcode'}}) // 位置（pt）
```

### 长文本

```js
panel.addPrintLongText({options:{width,height,top,left,title}}) // 位置（pt）
```

### 表格

```js
panel.addPrintTable({options:{width,height,top,left,content:$('#testTable').html()}}) // 位置（pt）
```

### HTML

```js
panel.addPrintHtml({options:{width,height,top,left,content:$('selector').html()}}) // 位置（pt）
```

### 竖线

```js
panel.addPrintVline({options:{height,top,left}}) // 位置（pt）
```

### 横线

```js
panel.addPrintHline({options:{width,top,left}}) // 位置（pt）
```

### 矩形

```js
panel.addPrintRect({options:{width,height,top,left}}) // 位置（pt）
```

## 模板预览

```js
hiprintTemplate.design('selector')
```
