const panelOption = {
    width: 210,
    height: 297,
    paperType:'A4',
    paperHeader: 45,
    paperFooter: 700,
    paperNumberLeft: 280,
    paperNumberTop: 780,
    paperNumberDisabled: false,
    rotate: false,
}

const labelOption = {
    width: 200,
    height: 24,
    top: 60,
    left: 30,
    title: '测试文本',
    field: 'name',
    data: '123456',
    textAlign:'center'
}

var hiprintTemplate = null

window.onload = () => {
    hiprint.init({
        // providers: [new configElementTypeProvider()]
    })

    hiprintTemplate = new hiprint.PrintTemplate({
        // settingContainer: '#templateSettingDiv',
    })

    var panelA = hiprintTemplate.addPrintPanel({...panelOption})
    panelA.addPrintText({ options: {...labelOption} })

    var panelB = hiprintTemplate.addPrintPanel({...panelOption})
    panelB.addPrintText({ options: {...labelOption} })

    hiprintTemplate.design('#templateDesignDiv')

    $('.hiprint-headerLine').css('border', '1px solid red')
    $('.hiprint-footerLine').css('border', '1px solid red')
}


const previewHandler = () => {
    $('.preview').html(hiprint.getHtml({
        templates: [
            {template: hiprintTemplate, data: {}, options: {}},
            {template: hiprintTemplate, data: {}, options: {}},
            {template: hiprintTemplate, data: {}, options: {}},
        ]
    }))

    // hiprint.print({
    //     templates: [
    //         {template: hiprintTemplate, data: {}, options: {}},
    //         {template: hiprintTemplate, data: {}, options: {}},
    //         {template: hiprintTemplate, data: {}, options: {}},
    //     ]
    // })

    var template = hiprintExtern()
    template.externHtml2Pdf(hiprint.getHtml({
        templates: [
            {template: hiprintTemplate, data: {}, options: {}},
            {template: hiprintTemplate, data: {}, options: {}},
            {template: hiprintTemplate, data: {}, options: {}},
        ]
    }), 'test.pdf', {})

    // $.ajax({
    //     method: "POST",
    //     url: '/report/topdf',
    //     data: {html: $('.preview').html()}
    // }).done((msg) => {
        
    // })
}
