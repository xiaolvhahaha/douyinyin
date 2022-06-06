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


//   button
$(".guanzhu .btn1").click(function(){
	$(".guanzhu .btn5").show();
})
$(".guanzhu .btn5").click(function(){
	$(".guanzhu .btn1").show();
	$(".guanzhu .btn5").hide();
})

//点击img


// btn2
// $(".btn2").focus(function(){
// 	$(".sixin").show();
// })
// $(".btn2").blur(function(){
// 	$(".sixin").hide();
// })




let player = new Player({
	"id": "mseq",
	"playsinline": true,
	"whitelist": [
			""
	],
	"width": null,
	"height": null,
	"poster": "//p3-pc-sign.douyinpic.com/tos-cn-p-0015/6018c05cd1884e51bc248c9cff29760b_1653452418~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968980400&x-signature=7FJDVU7bJZZWEiPsgexJg1%2FWoX4%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653623032010fdbd400a040000000a700b7a000003e239d2bc",
	"url": "//www.douyin.com/aweme/v1/play/?video_id=v0d00fg10000ca6qo4bc77u4j3q4ata0&line=0&file_id=59445f44a36241c19d65e394e7903aa4&sign=e190e0e79f43738bb8e2397015f7f83e&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
  });


	  let player2 = new Player({
		"id": "ms1",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/875664b0f36040bf9bd03b456928a8a2~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968930000&x-signature=w3oswGyGCGEax6JDhIGe9fS2Png%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653571596253fdbddc0200fff0030a925c9700000059ab3ccb",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0300fg10000c59bm2rc77u3n2a65dkg&line=0&file_id=2d09e97790444c88a8c26b0912d144a6&sign=cd5174d456fd365110011821ef2e81da&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });



	  let player3 = new Player({
		"id": "ms2",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/dea1e89e769545c59bbd752f0797c410_1652875288~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968930000&x-signature=ZKaTAD1QGZiYbdjLsX9RKY0ec7U%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=021653571596253fdbddc0200fff0030a925c9700000059ab3ccb",
		"url": "video/mp4.mp4"
      });
	  let player4 = new Player({
		"id": "ms3",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p9-pc-sign.douyinpic.com/tos-cn-p-0015/a6dd97b975ef49a89f6e248bb62c8297_1651914850~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968930000&x-signature=sHS%2BD4WnlqlNrwNvQp6MOFhQaUs%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=202205262149060101410690500E21AF20",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0d00fg10000c9r3f6jc77ubga2ub510&line=0&file_id=4ccb4a7eae6b490381d78dc4c2ba18c6&sign=6c6acc0370623fdfd436efcdd3ad8cba&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
	  let player5 = new Player({
		"id": "ms4",
		"playsinline": true,
		"whitelist": [
				""
		],
		"width": null,
		"height": null,
		"poster": "//p6-pc-sign.douyinpic.com/tos-cn-p-0015/14554d0fb420446992df62346654157f_1650886049~tplv-dy-cropcenter:323:430.jpeg?x-expires=1968930000&x-signature=7I4T3zzs6JEOJcz2v4ws3QsmZlU%3D&from=4257465056&s=PackSourceEnum_PUBLISH&se=true&sh=323_430&sc=cover&l=202205262151080101512042240D27EBEB",
		"url": "//www.douyin.com/aweme/v1/play/?video_id=v0d00fg10000c9j85ubc77u3bjn14ic0&line=0&file_id=e85ee104d0b84351ab9256da30fc25e5&sign=62682372648b5a444d014635172dd8d2&is_play_url=1&source=PackSourceEnum_PUBLISH&aid=6383"
      });
      
})