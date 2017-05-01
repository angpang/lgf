/**
 * Created by chenzhicheng496 on 17/5/1.
 */
$(document).ready(function(){

    var config = {
        '#back':'cb:back',
        '#loginBtn':'main',
        '#my':'my',
        '#search':'search',
        '#parkCar':'park_car',
        '#reserved':'reserved_no_input',
        '#flashsale':'flashsale',
        '#more':'more',
        '#huan':'cb:huan',
        '.pDetail':'product',
        '#reservedInput':'reserved_input',
        '#reservedInput2':'reserved_info',
        '#parkPostion':'park_find_car',
        '#confirmPosition':'park_car_buy',
        '#confirmPositionFinish':'park_car_buy_ok',
        '#toPay':'order_sucessful_park',
        '#toOrder':'my',
        '#finishOrder':'my',
        '#toTel':'cb:toTel',
        '#addCart':'cb:addCart',
        '#orderConfirm':'confirm_order',
        '#orderPay':'pay',
        '#orderSucc':'order_sucessful_food',
        '#daohang':'park_nav',
        '#toFloor':'park_floor_nav',
        '#startDh':'cb:startDh',
        '#buyDate':'park_car_date',
        '#cancelDate':'park_car_buy',
        '#confirmDate':'park_car_buy',
        '#toFlashsale':'flashsale'
    }

    var method = {
        back:function(){
            window.history.go(-1);
        },
        huan: function(){
            alert('没有更多数据换一换了/(ㄒoㄒ)/~~');
        },
        toTel: function(){
            alert('在手机上面将拨打电话');
        },
        addCart:function(){
            alert('已经触发加入购物车事件');
        },
        startDh:function(){
            alert('已经触发开始导航事件');
        }
    }

    var com = {
        idToPage:function(id,page){
            $(id).on('click',function(){
                if(page.indexOf('cb:') != -1){
                    var funName = page.split(':')[1];
                    method[funName]();
                }else{
                    window.location.href = page+'.html';
                }
            });
        }

    }

    var init = function(){
        for(i in config){
            console.log(config[i]);
            com.idToPage(i,config[i]);
        }
    }

    init();

});