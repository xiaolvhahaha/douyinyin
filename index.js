$(function(){
// 搜索框
$(".banner .sou input").focus(function(){
  $(".shousuo").show();
})
$(".banner .sou input").blur(function(){
  $(".shousuo").hide();
})

// 搜索
$(".sou_span").click(function(){
  $(".sou_span").css("background-color","white")
  $(".sou_span").css("color","black")
})
$(".sou_span").mouseout(function(){
  $(".sou_span").css("color","white");
  $(".sou_span").css("background-color","rgb(22,23,34)")
})

// 点击喜欢的时候让作品隐藏

$(".right_like").click(function(){
 
  $("#mse23").show(); 
  $("#mse").hide(); 
  $(this).css("color","white");
  $(".right_zuo").css("color","rgb(103, 112, 103)");
  $("#mse11").show();
  $("#mse12").hide();
  $("#mse13").hide();
})

$(".right_zuo").click(function(){
  $(this).css("color","white");
  $('.right_like').css("color","rgb(103, 112, 103)");
  $('.right_shou').css("color","rgb(103, 112, 103)");
  $("#mse23").hide(); 
  $("#mse").show();
  $("#mse11").hide();
  $("#mse12").show();
  $("#mse13").show();
})

$(".right_shou").click(function(){
  $(this).css("color","white");
  $('.right_like').css("color","rgb(103, 112, 103)");
  $(".right_zuo").css("color","rgb(103, 112, 103)");
  $("#mse23").show();
  $("#mse13").hide();
  $("#mse12").hide();
  $("#mse11").hide(); 

})


let player = new Player({
    "id": "mse",
    "playsinline": true,
    "whitelist": [
            ""
    ],
    "width": null,
    "height": null,
    "poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/5c62539de5dd438c9d501463e7b13aac~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968922800&x-signature=4P831JUEOY%2Fg%2FJKFxL7zk9P3Ov0%3D&from=4257465056&s=PackSourceEnum_FAVORITE&se=true&sh=323_430&sc=cover&l=202205261948550102080970704C0FECFB",
    "url": "video/one.mp4"
  });

  let player2 = new Player({
    "id": "mse23",
    "playsinline": true,
    "whitelist": [
            ""
    ],
    "width": null,
    "height": null,
    "poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/32bd81e70f40438c86b9bc97e0a35408~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968922800&x-signature=8ub1mq%2BFpgNM9UfVFQNU%2BMGOWQg%3D&from=4257465056&s=PackSourceEnum_FAVORITE&se=true&sh=323_430&sc=cover&l=202205261957280101410451480015540C",
    "url": "video/bbb.mp4"
  });


  let player3 = new Player({
		"id": "mse11",
		"playsinline": true,
		"whitelist": [
				""
		],
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/cfeeffe1ee594b4cb64db1b8438243b0~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968976800&x-signature=lKumA7QeXyE%2FzsUmxH0qypkkj7c%3D&from=4257465056&s=PackSourceEnum_FAVORITE&se=true&sh=323_430&sc=cover&l=20220527101746010150168096345AE703",
		"url": "video/aaa.mp4",
		"width": null,
		"height": null
      });

      let player4 = new Player({
        "id": "mse12",
        "playsinline": true,
        "whitelist": [
            ""
        ],
        "width": null,
        "height": null,
        "poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/b1e2a343bb8b435ca9091fa3fb3f5ebb~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968976800&x-signature=9S1Z0YS0K4X%2Fax13kgE0O1JhlM8%3D&from=4257465056&s=PackSourceEnum_FAVORITE&se=true&sh=323_430&sc=cover&l=202205271028160101511941363E5BBAD1",
        "url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c690verc77ucd0npt7m0&line=0&file_id=d60f573b960444969b6962ce47a3a8b8&sign=047f402cc356b4dfa6dc368d8ee39668&is_play_url=1&source=PackSourceEnum_FAVORITE&aid=6383"
          });

          let player5 = new Player({
            "id": "mse13",
            "playsinline": true,
            "whitelist": [
                ""
            ],
            "width": null,
            "height": null,
            "poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/ec2aedff5a454be18727f4dcb9544e8c~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968976800&x-signature=pkI84kbtUWAO6t4MhVaJZQBAx2U%3D&from=4257465056&s=PackSourceEnum_FAVORITE&se=true&sh=323_430&sc=cover&l=202205271028170102081641520E3D562C",
            "url": "video/aaa.mp4"
              });
})

