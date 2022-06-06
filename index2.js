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


  $(".guanzhu .btn1").click(function(){
	$(".guanzhu .btn5").show();
})
$(".guanzhu .btn5").click(function(){
	$(".guanzhu .btn1").show();
	$(".guanzhu .btn5").hide();
})
//   私信

// $(".btn2").click(function(){
// 	$(".sixin").show();
// })
// $(".btn2").mouseout(function(){
// 	$(".sixin").hide();
// })
    let player = new Player({
		"id": "mse",
		"playsinline": true,
		"whitelist": [
				""
		],
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000ca6vldjc77ufrvb3170g&line=0&file_id=20776683d5184b07bafdb65ec5cf7044&sign=a7d544fb693d5624b1695c44af4c3d40&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383",
		"width": null,
		"height": null,
		"poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/e25ffdd6df2a4b77bdc85b2f45d42334_1653472078~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=m1LYRjXI2q7ZmROiZNTWBybJyOA%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93"
      });

      let player1 = new Player({
		"id": "ms1",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/8809683ba0664a7eabdf65f6a02fab3d_1653471873~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=nG2wSD38yapQEO7lm8I5OkKCRUY%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000ca6vilrc77u84srme6bg&line=0&file_id=6d39c9f29785431fbf6d02b598e7ee2d&sign=d6157a10f8373bae3bb47879c3195393&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
    });


        let player3= new Player({
            "id": "ms2",
            "playsinline": true,
            "whitelist": [
                    ""
            ],
            "width": null,
            "height": null,
            "poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/84c5cd7b89ee41f6a2a80d4c291bfb06_1653131106~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=FyKOVADUD9BV%2BT9MC88Ev2Ep8%2BA%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
            "url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000ca4cel3c77uedupa0lpg&line=0&file_id=a8e9e675ce6543ada9f5c425024193f3&sign=aad45c54e811febdd992e3074aae51f5&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"

    })

    let player4 = new Player({
		"id": "ms3",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/971b6a3ccbeb4777887c6f9838b7cc36_1653125114~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=RuvlXk8d%2FatgvjJ%2BFnxEXIt%2FLdQ%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000ca4anbjc77u1cmp3nd5g&line=0&file_id=f7b86d7a90124148b3333bb6f01189c1&sign=d674309fc2bea61e168425b4aa905d4c&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      let player5 = new Player({
		"id": "ms4",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/7aa7dff7a613438fad091dcda28100e1_1648005186~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=VfpT3RiNQaVjtOtCo3hY5xLWiQA%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c8snfvrc77u7lnmtfgrg&line=0&file_id=b0e09360dc094d27bd7e6ebd8d8c0f1b&sign=272984fb1fcfa33135e77c775db8bc6c&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      let player6 = new Player({
		"id": "ms5",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/06288d8743524a36bda134b2b2ccdf0c_1646894386~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=1pAiqZ7jEL%2B84SNJpxDH2B7qpM0%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c8kplgjc77u473360d90&line=0&file_id=390b155a449e425da5d6f25ee04b1e34&sign=fd7aa3171f17ceae33398d06bfac7bc9&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      let player8 = new Player({
		"id": "ms6",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/7aa7dff7a613438fad091dcda28100e1_1648005186~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=VfpT3RiNQaVjtOtCo3hY5xLWiQA%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c8snfvrc77u7lnmtfgrg&line=0&file_id=b0e09360dc094d27bd7e6ebd8d8c0f1b&sign=272984fb1fcfa33135e77c775db8bc6c&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      let player9 = new Player({
		"id": "ms8",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/a260d885457b44b397aba9b7aae99f72_1639993023~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=SGVkNSvugPTFWdQ7QCzCier%2BUU0%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653547460464fdbddc0100ff2f010a707f5700000e05191d93",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c704s23c77u37r5fimjg&line=0&file_id=2639f16a3e544c278b44cd2b8415e413&sign=1a1d6c538a3c4e5262f1220b7fae7385&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      
      let player10 = new Player({
		"id": "ms9",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c59eegrc77u6n5gbg2i0&line=0&file_id=afe8a6b1dcbf4bf7911dddfedfaa5a05&sign=4cbeb2286b153b49323918c904074670&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383",
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/b06129c1c3664c3abc00da79cce261a8~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968904800&x-signature=%2FcJ%2BDz%2F9ShwtPiqwkkcf7nJr0LY%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=202205261444520101420050363802BD35"
      });  

      let player11= new Player({
		"id": "ms10",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c20jdhija8tdg9mg0fo0&line=0&file_id=f06bcb6515594490bbb16b3b2fdebd97&sign=0cba957c6771c695704f44877ec73bd4&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383",
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/b67bdf09faa74f9da8d611a98d4f9114_1619081046~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968908400&x-signature=65wOMPoVIXfUhbxDfsyqfUg9tio%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=202205261517270101330171594001EC80"
      });
      let player12 = new Player({
		"id": "ms11",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/9267b0dbdbd6443d8aec1932c07cae88~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968908400&x-signature=iq%2Fj1kKK7Ejl3xI5jcYg6kRZpRk%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=2022052615172601015815601921022074",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0d00fg10000c30n5n2ifijn14s418ag&line=0&file_id=034099243ab5414da15e7a6d1aa93398&sign=a2d200a5aaf0b97ab725218f694b8157&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
})