$(function(){
    $.ajax({
        url:'http://localhost:3000/details',
        type:'get',
        dataType:'json',
        data:{
            id:window.location.href.split("=")[1],
        },
        success:function(data){
           console.log(data)
           $('.c1').html(data.product.goodsname);
            $('#vertical img').attr('src',data.product.img_url);
            var tpic = '';
            var tpics = data.product.tpic.split('#');
            tpics.forEach(function(val,index){
                tpic += '<li><img src="'+val+'"></li>';
            });
            $('#simg').html(tpic);
            $('.name').html(data.product.goodsname);
            $('.code').html(data.product.gid);
            $('.price1').html(data.product.oldprice);
            $('.price2').html(data.product.price);
            $('#cz').html(data.product.cz);
            $('#zs').html(data.product.zs);
            $('#gj').html(data.product.gj);
            var img = '';
            var imgs = data.product.pic.split('#');
            imgs.forEach(function(val,index){
                img +='<p><img src="'+val+'"></p>';
            });
            $('.detailcontent').html(img);
        }
    });
});