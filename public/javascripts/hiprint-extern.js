const hiprintExtern = (hiprintTemplate) => {
    // 未使用hiprint组件
    if (hiprint === undefined) {
        console.log('hiprint not found')
        return null
    }

    // 现成模板
    var hiTemplate = hiprintTemplate

    // 默认模板
    if (hiTemplate === undefined) {
        hiTemplate = new hiprint.PrintTemplate()
        hiTemplate.addPrintPanel({
            width: 210,
            height: 297,
            paperType:'A4',
        })
    }

    hiTemplate.externHtml2Pdf = function (html, filename, options) {
        var template = this

        // 毫米转磅
        const mm2Pt = (t) => {
            return 72 / 25.4 * t
        }

        // 磅转像素
        const pt2px = (t) => {
            var externHiTempateDpiDiv = document.getElementById('externHiTempateDpiDiv')

            if (externHiTempateDpiDiv === null || externHiTempateDpiDiv === undefined) {
                externHiTempateDpiDiv = document.createElement("div")
                externHiTempateDpiDiv.id = 'externHiTempateDpiDiv'
                externHiTempateDpiDiv.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden"
                document.body.appendChild(externHiTempateDpiDiv)
            }

            return t * (externHiTempateDpiDiv.offsetHeight / 72);
        }

        if (this.printPanels.length) {
            var pageWidth = mm2Pt(this.printPanels[0].width),
                pageHeight = mm2Pt(this.printPanels[0].height),
                pageOptions = $.extend({
                    scale: 2, // 4
                    width: pt2px(pageWidth),
                    x: 0,
                    y: 0,
                    useCORS: !0
                }, options || {}),
    
                jspdfIntance = new jsPDF({
                    orientation: 1 == this.getOrient(0) ? "portrait" : "landscape",
                    unit: "pt",
                    format: this.printPanels[0].paperType ? this.printPanels[0].paperType.toLocaleLowerCase() : [pageWidth, pageHeight]
                })
    
                this.createTempContainer();
                var tempContainer = this.getTempContainer()
    
                this.svg2canvas(html)
            
                tempContainer.html(html[0])
    
                var pageNumber = tempContainer.find(".hiprint-printPanel .hiprint-printPaper").length
    
                $(html).css("position:fixed"), 
    
                html2canvas(html[0], pageOptions).then(function (canvas) {
                    var context = canvas.getContext("2d")
                    context.mozImageSmoothingEnabled = !1
                    context.webkitImageSmoothingEnabled = !1
                    context.msImageSmoothingEnabled = !1
                    context.imageSmoothingEnabled = !1
    
                    for (var o = canvas.toDataURL("image/jpeg"), p = 0; p < pageNumber; p++) {
                        jspdfIntance.addImage(o, "JPEG", 0, 0 - p * pageHeight, pageWidth, pageNumber * pageHeight)
                        p < pageNumber - 1 && jspdfIntance.addPage()
                    }
    
                    template.removeTempContainer()
                    filename.indexOf(".pdf") > -1 ? jspdfIntance.save(filename) : jspdfIntance.save(filename + ".pdf")
            })
        }
    }

    return hiTemplate
}