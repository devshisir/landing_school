var wasSubmitted=!1;function getBrowserName(){return navigator.userAgent.indexOf("Edge")>-1&&navigator.appVersion.indexOf("Edge")>-1?"Edge":-1!=navigator.userAgent.indexOf("Opera")||-1!=navigator.userAgent.indexOf("OPR")?"Opera":-1!=navigator.userAgent.indexOf("Chrome")?"Chrome":-1!=navigator.userAgent.indexOf("Safari")?"Safari":-1!=navigator.userAgent.indexOf("Firefox")?"Firefox":-1!=navigator.userAgent.indexOf("MSIE")||1==!!document.documentMode?"IE":"unknown"}$(document).ready(function(){var e=$(window);$("html, body");$(".formula_areaContent_slider").owlCarousel({items:1,margin:30,smartSpeed:450,autoplay:!0,autoplayTimeout:3e3,loop:!1,nav:!0,navText:["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"]}),$("select").niceSelect({}),$("#inputNext4").on("click",function(){"0"!=$("#drop_val").val()?($(".form_3_input4").removeClass("show"),$(".form_3_input1").removeClass("hide"),$("#name").focus(),$("#name").click(),$("#inputNext").addClass("show"),$("#progressBar1").animate({width:"75%"},300)):mdtoast("Please select an option",{type:"info"})}),$("#inputNext2").on("click",function(){$(".form_3_input2").removeClass("show"),$(".form_3_input3").addClass("show"),$("#email").focus(),$("#email").click(),$("#progressBar3").animate({width:"33.33%"},300)}),$("#inputNext3").on("click",function(){$(".form_3_input3").removeClass("show"),$(".form_3_input1").addClass("show"),$(".form_3_input1").removeClass("hide"),$("#name").focus(),$("#name").click(),$("#inputNext").addClass("show"),$("#progressBar1").animate({width:"66.66%"},300)}),e.on("scroll",function(){e.scrollTop()>200?$("#form_area").addClass("animated slideInDown fix"):$("#form_area").removeClass("animated slideInDown fix")}),$("#inputNext").on("click",function(){if($("#send_spinner").show(),console.log("before: "+wasSubmitted),$(this).val("Please wait ...").attr("disabled","disabled"),$("#progressBar1").animate({width:"100%"},100),!wasSubmitted){wasSubmitted=!0,console.log("after: "+wasSubmitted);var e=$("#name").val();""==e&&(e="-");var a=$("#email").val(),t=$("#phoneCode").text()+$("#phone").val(),n=$("#source").val(),o="Current Browser : "+getBrowserName(),s=$("#drop_val").val(),i=((new Date).getTime(),new Date),r=String(i.getDate()).padStart(2,"0"),l=String(i.getMonth()+1).padStart(2,"0"),d=i.getFullYear();i=r+"_"+l+"_"+d;t&&a&&s&&n&&$.ajax({method:"POST",url:"https://api.ufaber.com/api/leads-submit/fetch-lead/",data:{name:e,email:a,phone:t,do_what:s,source:n,otp_value:"",device_info:o+"  ***  "+navigator.userAgent}}).done(function(e){mdtoast("Your form has been submitted successfully!",{type:"success"}),"success"==e.message?window.location.replace("https://upscpathshala.com/online/no1coaching/thanks/"):"all_fields"==e.message?alert("Fields are missing, not all fields are selected"):"otp_match"==e.message?alert("OTP value doesn't match, please make sure that you are entering the correct OTP"):"no_otp"==e.message&&alert("Please enter the OTP, without that your enquiry cannot be processed")}).fail(function(){alert("error")})}})});