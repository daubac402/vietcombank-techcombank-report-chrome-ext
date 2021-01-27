var lastReportDom = null;

function jsCopyToClipboard(element) {
	var $temp = $("<textarea></textarea>");
	$("body").append($temp);
	$temp.html($(element).html().replace(/<br[^>]*>/g, "\n")).select();
	document.execCommand("copy");
	$temp.remove();
}

function runFunction() {
	var reportMain = `<div class="js-quick-report">
						   <h1>Quick Report</h1>
						   <button class='js-copy-to-clipboard'">Copy to Clipboard</button>
						   <p>`;
	$("#toanbo > div > div").each(function () {
		let $this = $(this);
		let money = $this.find("div > div:nth-child(2) > div:nth-child(2)").html();
		if (money && !money.includes("-")) {
			reportMain += $this.find("div > div:nth-child(1) > div:nth-child(1)").html() + "<br>";
			reportMain += $this.find("div > div:nth-child(1) > div:nth-child(2)").html() + "<br>";
			reportMain += money + "<br>";
			reportMain += "<br>";
		}
	});
	reportMain += "</p></div>";

	if (!lastReportDom) {
		if ($("#ChiTietTaiKhoan > div > div > div.box.no-p").length > 0) {
			$("#ChiTietTaiKhoan > div > div > div.box.no-p").before(reportMain);
			lastReportDom = reportMain;
		}
	} else {
		if (lastReportDom != reportMain) {
			$("div.js-quick-report").remove();
			$("#ChiTietTaiKhoan > div > div > div.box.no-p").before(reportMain);
			lastReportDom = reportMain;
		}
	}
}
setInterval(runFunction, 500);

$(document).on("click", ".js-copy-to-clipboard", function() {
	jsCopyToClipboard("div.js-quick-report p");
});