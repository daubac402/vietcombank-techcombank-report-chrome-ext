var isFirstRun = true;

jsCopyToClipboard = function(){
    console.log('🚀 ~ file: main.js ~ line 59 ~ $ ~ $("div.js-quick-report p").html()', $("div.js-quick-report p").html())
	$("div.js-quick-report p").html().select();
	document.execCommand("Copy");
};

function runFunction() {
	var report_main = `<div class="js-quick-report">
						   <h1>Quick Report</h1>
						   <button onClick="jsCopyToClipboard">Copy to Clipboard</button>
						   <p>`;
	$("#toanbo > div > div").each(function(){
		let $this = $(this);
		report_main += $this.find("div > div:nth-child(1) > div:nth-child(1)").html() + "<br>";
		report_main += $this.find("div > div:nth-child(1) > div:nth-child(2)").html() + "<br>";
		report_main += $this.find("div > div:nth-child(2) > div:nth-child(2)").html() + "<br>";
		report_main += "<br>";
	});
	report_main += "</p></div>";
	
	if (isFirstRun) {
		if ($("#ChiTietTaiKhoan > div > div > div.box.no-p").length > 0) {
			$("#ChiTietTaiKhoan > div > div > div.box.no-p").before(report_main);
			isFirstRun = false;
		}
	} else {
		$("div.js-quick-report").remove();
		$("#ChiTietTaiKhoan > div > div > div.box.no-p").before(report_main);
	}
}
setInterval(runFunction, 1000);

// $("label#ST2_Challenge").css({ "color": "#8cc63e", "font-size": "40px" });

// var changeEvent = document.createEvent("HTMLEvents");
// changeEvent.initEvent("change", true, true);

// $("input#SoTaiKhoanNguoiHuong").blur(() => {
// 	$("select#LoaiNganHang").val('0');
// 	$("select#LoaiNganHang")[0].dispatchEvent(changeEvent);
// });
// $("select#LoaiNganHang").select2().on('select2:select', function (e) {
// 	$(this)[0].dispatchEvent(changeEvent);
// });
// $("select#TenNganHangHuong").select2().on('select2:select', function (e) {
// 	$(this)[0].dispatchEvent(changeEvent);
// });
// $("select#TinhThanh").select2().on('select2:select', function (e) {
// 	$(this)[0].dispatchEvent(changeEvent);
// });
// $("select#ChiNhanh").select2().on('select2:select', function (e) {
// 	$(this)[0].dispatchEvent(changeEvent);
// });

// $("select#HinhThucChuyenTien").change(function() {
// 	$("select#MaNganHangHuong").select2().on('select2:select', function (e) {
// 		$(this)[0].dispatchEvent(changeEvent);
// 	});
// });
