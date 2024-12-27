$(document).ready(function () {

  setUTMParameters();
  $("#meksa-hesap-ac").submit(function (event) {
    event.preventDefault();
    $("#submit-btn").prop('disabled', true).css('opacity', 0.5);
    $.ajax({
      type: "POST",
      url: "process.php",
      data: $('#meksa-hesap-ac').serialize(),
      dataType: "json",
      encode: true,
    }).done(function (data) {
      if(data.status === 'success') {
        window.location.href = '/landing1/tesekkurler.html';
      }else {
        $("#meksa-hesap-ac").html(
          '<div class="alert mb-0 border-0 p-0 rounded-0">'+data.message+'</div>'
        );
      }
    })
    .fail(function (data) {
      $("#meksa-hesap-ac").html(
        '<div class="alert mb-0 border-0 p-0 rounded-0">Lütfen daha sonra tekrar deneyiniz.</div>'
      );
    });
  });

  /* extracting UTM parameters */
  function setUTMParameters() {
    var urlParams = new URLSearchParams(window.location.search);
    var utmSource = urlParams.get('utm_source') || '';
    var utmMedium = urlParams.get('utm_medium') || '';
    var utmCampaign = urlParams.get('utm_campaign') || '';
    var gclid = urlParams.get('gclid') || '';

    $('#utm_source').val(utmSource);
    $('#utm_medium').val(utmMedium);
    $('#utm_campaign').val(utmCampaign);
    $('#gclid').val(gclid);
  }
});
