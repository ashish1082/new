const username = "guest_user";
const password = "123456";
$(".button").click((event) => {
  event.preventDefault();
  const user = $("#user").val();
  const pass = $("#pass").val();
  if (user === username && pass === password) {
    window.location.href = "./table_v_0_3_SS.html";
  } else {
    alert("Wrong Password!! Please try again with correct credentials.");
  }
});
