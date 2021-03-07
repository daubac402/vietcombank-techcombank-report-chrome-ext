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
    var $target = $("div[id^='enquiry_response_MainBody']");

    $("table[id^='datadisplay_MainBody'] tr").each(function () {
        let $this = $(this);
        let transferContent = $this.find("td:nth-child(2)").html();
        let money = $this.find("td:nth-child(3)").html();

        if (
            (money && !money.includes("-")) &&
            (transferContent && !transferContent.includes("TT GOC + LAI TIET KIEM"))
        ) {
            reportMain += $this.find("td:nth-child(1)").html() + "<br>";
            reportMain += transferContent + "<br>";
            reportMain += "+ " + money + "<br>";
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