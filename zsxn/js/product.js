$(function(){
    $.ajax({
        url:'http://localhost:3000/product',
        type:'get',
        dataType:'json',
        data:{
            //id:''
        },
        success:function(data){
            var html='';
            data.product.forEach(function( val, index ) {
                html += '<li style="margin-bottom:30px;"><div class="pic"><a href="product_details.html?id='+val.id+'" target="_blank" style="overflow:hidden;display:block;position:relative;width:285px;height:235px;"><img src="'+val.img_url+'" alt="'+val.goodsname+'" class="imgEnlage" width="285" height="234" style="position:relative;width:286px;height:236px;top:-0.5px;left:-0.5px"></a></div><div class="title"><a href="" title="'+val.goodsname+'" target="_blank">'+val.goodsname+'</a></div><div class="price"><span class="price1">￥&nbsp;'+val.price+'</span><span class="price2">￥&nbsp;'+val.oldprice+'</span></div><div class="sold"><span class="number">售出&nbsp;'+val.count+'</span><span class="comment">评论&nbsp;290</span></div></li><li class="zw-x">&nbsp;</li>';
            
            });
            
               // html += '<li><div class="pic"><a href="product_details.html" target="_blank" style="overflow:hidden;display:block;position:relative;width:285px;height:235px;"><img src="'+val.img_url+'" alt="'+val.goodsname+'" class="imgEnlage" width="285" height="234" style="position:relative;width:286px;height:236px;top:-0.5px;left:-0.5px"></a></div><div class="title"><a href="" title="'+data.product['goodsname']+'" target="_blank">'+data.product['goodsname']+'</a></div><div class="price"><span class="price1">￥&nbsp;'+data.product['price']+'</span><span class="price2">￥&nbsp;'+data.product['oldprice']+'</span></div><div class="sold"><span class="number">售出&nbsp;'+data.product['count']+'</span><span class="comment">评论&nbsp;290</span></div></li><li class="zw-x">&nbsp;</li>';
            
            
            $('#ul').html(html);
        }
    });
});