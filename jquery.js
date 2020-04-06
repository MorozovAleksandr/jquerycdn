let jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
document.head.append(jq);
jq.onload = function () {
    $('body').append('<div id="sa">');
    const urlParams = new URLSearchParams(window.location.search);
    const bundleParam = urlParams.get('bundle');
    if (bundleParam.length > 0) {
        $.ajax({
            type: "GET",
            url: 'https://mytemplate.site/ajax/',
            async: true,
            crossDomain: true,
            success: function (data, status, xhr) {
                $("#sa").html(data);
            }
        });
    }
}
