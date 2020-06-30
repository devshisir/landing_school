function redirect1() {
	$(".form_3_input1").addClass("show").removeClass("hide"), $(".form_3_input2").addClass("hide").removeClass("show"), $(".form_3_input3").addClass("hide").removeClass("show"), $(".form_3_input4").addClass("hide").removeClass("show"), $("#name").focus(), $("#name").click()
}

function redirect2() {
	$(".form_3_input1").addClass("hide").removeClass("show"), $(".form_3_input2").addClass("show").removeClass("hide"), $(".form_3_input3").addClass("hide").removeClass("show"), $(".form_3_input4").addClass("hide").removeClass("show"), $("#phone").focus(), $("#phone").click()
}

function redirect3() {
	$(".form_3_input1").addClass("hide").removeClass("show"), $(".form_3_input2").addClass("hide").removeClass("show"), $(".form_3_input3").addClass("show").removeClass("hide"), $(".form_3_input4").addClass("hide").removeClass("show"), $("#email").focus(), $("#email").click()
}

function scrollFunction() {
	document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ? ($(".hideBook").css({
		display: "block"
	}), $(".bookParent").css({
		display: "block"
	})) : ($(".hideBook").css({
		display: "none"
	}), $(".bookParent").css({
		display: "none"
	}))
}
$("#mobile_quote_btn_link").on("click", function (e) {
	if (e.preventDefault(), this.href) {
		var o = this.href;
		setTimeout(function () {
			window.location = o
		}, 1e3)
	}
}), $("input").click(function () {
	$(".hideBook").css({
		display: "none"
	}), $(".bookParent").css({
		display: "none"
	})
}), $("input").focusout(function () {}), window.onscroll = function () {
	scrollFunction()
}, $(document).keypress(function (e) {
	if ($("#email").on("keydown", function (e) {
			13 == e.keyCode && $("#EmailNext").click()
		}), $("#phone").on("keydown", function (e) {
			13 == e.keyCode && $("#PhoneNext").click()
		}), $("#drop_val").on("keydown", function (e) {
			event.stopPropagation()
		}), $("#dropState").on("keydown", function (e) {
			event.stopPropagation()
		}), $(".form_3_input4").hasClass("show")) {
		if ("0" == $("#drop_val").val()) return void mdtoast("Please select an option", {
			type: "info"
		});
		$(".form_3_input4").removeClass("show"), $(".form_3_input1").removeClass("hide"), $("#inputNext").addClass("show"), $("#name").click(), $("#progressBar1").animate({
			width: "75%"
		}, 300)
	}
}), $("[data-pin]").pin({
	allowSequential: !0,
	allowRepeat: !0,
	count: 4
}), $(document).ready(function () {
	$('.fa-angle-right').addClass('fa').removeClass('fal');
	$('.fa-angle-left').addClass('fa').removeClass('fal');
	$("select").on("change", function () {
		"0" != this.value && ($("#progress8").removeAttr("hidden"), $("#progress4").hide(), $("#phone").focus(), $("#inputNext4").css("background", "#FF9C40"), $("#progressBar8").animate({
			width: "75%"
		}, 300))
	});
	var e = $(".sightbox__slideshow");

	function o(e) {
		e.innerHTML = ""
	}
	$("#sightbox__slide--2").show(), e.slick({
		arrows: !1,
		autoplay: !0,
		infinite: !1,
		dots: !0
	}), document.querySelectorAll(".slick-dots button").forEach(o), e.on("afterChange", function (o, n, t, s) {
		console.log(t), 1 === t && (setTimeout(function () {
			e.slick("slickGoTo", 0)
		}, 2e3), console.log("last slide"))
	});
	var n = $(".sightbox__slideshow1");

	function o(e) {
		e.innerHTML = ""
	}
	$("#sightbox__slide1--2").show(), n.slick({
		arrows: !1,
		autoplay: !0,
		infinite: !1,
		dots: !0
	}), document.querySelectorAll(".slick-dots button").forEach(o), n.on("afterChange", function (e, o, t, s) {
		console.log(t), 1 === t && (setTimeout(function () {
			n.slick("slickGoTo", 0)
		}, 2e3), console.log("last slide"))
	}), $("#name").focus(), $(this).scrollTop(0), $("form input:radio").change(function () {
		"Others" == $(this).val() && $("#SubmitButton").attr("class", "showSubmit")
	})
}), $("#name").focus(), jQuery(document).bind("pageshow", function () {
	jQuery($("#name")).focus()
}), $("input").on("keyup", function () {
	$(this).scrollTop(0)
}), errorMsg = document.querySelector("#phoneError"), input = document.querySelector("#phone"), $("#phone").on("input", function (e) {
	if (input.value.trim())
		if (10 == input.value.trim().length) {
			console.log("+"), $("#phoneCode").text("+"), $("#inputNext2").css("background", "#FF9C40"), $("#inputNext2").css("background", "#FF9C40"), phoneCheck()
		} else input.classList.add("error"), errorMsg.innerHTML = "Error. Enter valid number.", errorMsg.classList.remove("hide"), $("#inputNext2").css("background", "#C4C4C4"), phoneError.innerHTML = "Error. Enter valid number.", PhoneNext.classList.add("dissable")
});
var phoneError = document.getElementById("phoneError"),
	PhoneNext = document.getElementById("inputNext2"),
	phone = document.getElementById("phone");

function phoneCheck() {
	phone.value.length < 6 ? (PhoneNext.classList.remove("show"), phoneError.innerHTML = "Error. Please enter 10 digit mobile no.", PhoneNext.classList.add("dissable")) : (phoneError.innerHTML = "", PhoneNext.classList.remove("dissable"), PhoneNext.classList.add("show"))
}
input.addEventListener("change", reset), input.addEventListener("keyup", reset), input = document.querySelector("#phoneEdit"), $("#name").on("focus", function () {
	document.body.scrollTop = $(this).offset().top
}), $("#email").on("focus", function () {
	document.body.scrollTop = $(this).offset().top
}), $("#email").on("click", function () {
	document.body.scrollTop = $(this).offset().top
}), $(window).on("load", function () {
	var e = window.location.href,
		o = new URL(e);
	console.log(o);
	try {
		var t = o.searchParams.get("source");
		$("#source").val(t.replace("%20", " ")), console.log("source_name" + $("#source").val());
	} catch (err) {
		err.message;
	}
});
var upsc = $(window),
	page = $("html, body");
$("button").click(function () {
		var e = document.getElementById("mobile_quote_bottom_custom").offsetTop;
		alert(e)
	}), $(document).ready(function () {
		$(".rippler").rippler({
			effectClass: "rippler-effect",
			effectSize: 10,
			addElement: "div",
			duration: 800
		})
	}),
	function (e, o, n, t, s) {
		e[t] = e[t] || [], e[t].push({
			"gtm.start": (new Date).getTime(),
			event: "gtm.js"
		});
		var i = o.getElementsByTagName(n)[0],
			r = o.createElement(n);
		r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-P8V7M4P", i.parentNode.insertBefore(r, i)
	}(window, document, "script", "dataLayer");