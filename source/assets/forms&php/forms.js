"use strict";
$(document).ready(function () {

  var checkIt = function (target, text) {
    target.find(".form-err-place").html('<div class="err">' + text + "</div>");
  };

  // форма

  $("#id").submit(function (evt) {
    evt.preventDefault();
    var form = $(this);

    form.ajaxSubmit({
      url: "./form.php",
      beforeSubmit: function () {

        if (!form.find("input[type=checkbox]").prop("checked")) {
          checkIt(form, "Поставьте галочку");
          return false;
        }

        if (form.find("input[name=name]").val() === "") {
          checkIt(form, "Введите ваше имя");
          return false;
        }

        if (form.find("input[name=tel]").val() === "") {
          checkIt(form, "Введите ваш телефон");
          return false;
        }

      },
      success: function (data) {
        // яндекс цель для метрики
        // ym(ID_COUNTER, 'reachGoal', 'ID_OF_TARGET');

        console.log(data);

        if ($.fancybox) {
          parent.jQuery.fancybox.close();

          var instance = $.fancybox.open(
            "<div class='modal-success'><p class='success-text'>Спасибо!</p></div>"
          );

          setTimeout(function () {
            instance.close();
          }, 5000);
        }

        form.find("input[name=name]").val("");
        form.find("input[name=tel]").val("");
        form.find(".form-err-place .err").text("");
      }
    });
  });
});
