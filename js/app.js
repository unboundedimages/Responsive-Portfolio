$(function() {
  // Get the form.
  var form = $("#ajax-contact");

  // Get the messages div.
  var formMessages = $("#form-messages");

  // TODO: The rest of the code will go here...
  $(form).submit(function(event) {
    event.preventDefault();

    var formData = $(form).serialize();
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: formData
    })
      .done(function(response) {
        $(formMessages).removeClass("error");
        $(formMessages).addClass("success");

        $(formMessages).text(response);

        $("#name").val("");
        $("#name2").val("");
        $("#email").val("");
        $("#message").val("");
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass("success");
        $(formMessages).addClass("error");

        // Set the message text.
        if (data.responseText !== "") {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text(
            "Oops! An error occured and your message could not be sent."
          );
        }
      });
  });
});
