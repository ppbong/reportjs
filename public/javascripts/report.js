const PanelOptions = {
    /*A4=210mm*297mm*/
    width: 210, // 页宽 mm
    height: 297, // 页高 mm
    paperHeader: 48, // 页眉 pt
    paperFooter: 800, // 页尾 pt
    paperNumberDisabled: false, // 禁用页码
    // paperNumberFormat: 'paperNo-paperCount', // 页码格式
    // panelPaperRule: 'odd', // 面板打印纸张规则：odd保持奇数，even保持偶数
    // firstPaperFooter: 0, // 首页页尾线位置
    // lastPaperFooter: 0,  // 尾页页尾线位置
    // evenPaperFooter: 0,  // 偶数页页尾线位置
    // oddPapaerFooter: 0,  // 奇数页页尾线位置
    leftOffset: 0, // 打印左偏移
    topOffset: 0,  // 打印右偏移
}

const createPanel = (template, options) => {
    const mergeOptions = {...PanelOptions, ...options}
    var panel = template.addPrintPanel(mergeOptions)
    return panel
}

// PrintTemplate(options)

// var hiprintTemplate = new hiprint.hiprintTemplate({
//     template: 
// })

