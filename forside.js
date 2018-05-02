$(window).on("load", sidenvises2);

function sidenvises2() {
    console.log("siden vises");
    $("#credit_musik")[0].volume = 0.25;
    $("#credit_musik")[0].play();

}

