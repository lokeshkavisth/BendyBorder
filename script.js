function submitRadiusValue() {
  const topLeft = $("#topLeft").val() + "rem";
  const topRight = $("#topRight").val() + "rem";
  const bottomRight = $("#bottomRight").val() + "rem";
  const bottomLeft = $("#bottomLeft").val() + "rem";

  //   reflect radius value in box

  $(".radiusCode").text(
    "border-radius: " +
      topLeft +
      " " +
      topRight +
      " " +
      bottomRight +
      " " +
      bottomLeft +
      ";"
  );

  // set border radius value on box

  $("#borderBox").css("border-top-left-radius", topLeft);
  $("#borderBox").css("border-top-right-radius", topRight);
  $("#borderBox").css("border-bottom-right-radius", bottomRight);
  $("#borderBox").css("border-bottom-left-radius", bottomLeft);
}

// copy function

function copyRadius() {
  const bordeRadius = $(".radiusCode").text();
  navigator.clipboard.writeText(bordeRadius);
}
