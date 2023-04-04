# [hiprint](http://hiprint.io/)

## 初始化

```js
hiprint.init()
```

## 模板对象

```js
var hiprintTemplate = new hiprint.PrintTemplate()
```

## 面板对象

```js
var panel = hiprintTemplate.addPrintPanel()
```

## 页面元素

### 文本

```js
panel.addPrintText()
```

### 条形码barcode

```js
panel.addPrintText()
```

### 二维码qrcode

```js
panel.addPrintText()
```

### 长文本

```js
panel.addPrintLongText()
```

### 表格

```js
panel.addPrintTable()
```

### HTML

```js
panel.addPrintHtml()
```

### 竖线

```js
panel.addPrintVline()
```

### 横线

```js
panel.addPrintHline()
```

### 矩形

```js
panel.addPrintRect()
```

## 打印设计

```js
hiprintTemplate.design()
```
