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
    var $target = $("#ChiTietTaiKhoan > div > div > div.box.no-p");

    $("#toanbo > div > div").each(function () {
        let $this = $(this);
        let transferContent = $this.find("div > div:nth-child(1) > div:nth-child(2)").html();
        let money = $this.find("div > div:nth-child(2) > div:nth-child(2)").html();

        if (
            money && !money.includes("-")
        ) {
            reportMain += $this.find("div > div:nth-child(1) > div:nth-child(1)").html() + "<br>";
            reportMain += transferContent + "<br>";
            reportMain += money + "<br>";
            reportMain += "<br>";
        }
    });
    reportMain += "</p></div>";

    if (!lastReportDom) {
        if ($target.length > 0) {
            $target.before(reportMain);
            lastReportDom = reportMain;
        }
    } else {
        if (lastReportDom != reportMain) {
            $("div.js-quick-report").remove();
            $target.before(reportMain);
            lastReportDom = reportMain;
        }
    }
}
setInterval(runFunction, 500);

$(document).on("click", ".js-copy-to-clipboard", function (e) {
    e.preventDefault();
    jsCopyToClipboard("div.js-quick-report p");
});