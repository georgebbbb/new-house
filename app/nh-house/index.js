// Module definition
var nhHouse = angular.module('nhHouse', ['smart-table','nhLayout','w5c.validator','angularFileUpload', 'akoenig.deckgrid']);
nhHouse.config(["w5cValidatorProvider", function (w5cValidatorProvider) {

        // 全局配置
        w5cValidatorProvider.config({
            blurTrig   : true,
            showError  : true,
            removeError: true

        });
        w5cValidatorProvider.setRules({
            email   : {
                required: "输入的邮箱不能为空",
                email   : "输入邮箱地址格式不正确"
            },
              normal: {
                required: "输入的内容不能为空",
               
       
            },
         
        });
    }]);