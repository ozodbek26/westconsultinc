document.addEventListener("DOMContentLoaded", function () {
  let submit_button = document.querySelector("button[type='submit']");
  // let error_message = document.getElementById("error");
  // let success_message = document.getElementById("success");

  const form = document.getElementById("contact-form_id");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromContactPage = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[placeholder="Phone number"]').value,
      message: form.querySelector('textarea[placeholder="Message"]').value,
    };

    console.log(dataFromContactPage);

    // fetch("https://bektransgroup.com/backend/cpanel_mail.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataFromMainPage),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (success_message) {
    //       success_message.innerHTML = data.status;
    //       success_message.className = "n-success";
    //       setTimeout(() => {
    //         success_message.innerHTML = null;
    //         success_message.className = "";
    //       }, 5000);
    //     } else {
    //       console.log(data.status);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    form.reset();

    if (submit_button) {
      submit_button.disabled = true;
    }
  });
});
