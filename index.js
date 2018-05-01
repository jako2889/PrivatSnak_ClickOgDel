$(window).on("load", sidenvises);

function sidenvises() {
    console.log("Start af spillet");

    $("#dreng_container").addClass("dreng_positionstart");
    $("#noerd_container").addClass("noerd_positionstart");
    $("#kat_container").addClass("kat_positionstart");
    $("#celeb_container").addClass("celeb_positionstart");
    $("#kvinde_container").addClass("kvinde_positionstart");
    $("#phone_container").addClass("phone_positionin");
    $("#phone_container").hide();
    $("#doer_sprite").addClass("doer_open");

    setTimeout(doer_close, 3000);
}

function doer_close() {
    console.log("dreng kommer ind");

    $("#dreng_container").removeClass("dreng_positionstart");

    $("#dreng_container").addClass("dreng_movein");
    $("#dreng_sprite").addClass("dreng_walkcycle");

    $("#dreng_container").on("animationend", scene_skift);
}

function scene_skift() {
    console.log("skifter til pov vinkel");

    $("#dreng_container").off("animationend", scene_skift);

    $("#dreng_container").removeClass("dreng_movein");
    $("#dreng_sprite").removeClass("dreng_walkcycle");
    $("#doer_sprite").removeClass("doer_open");

    $("#phone_container").show();
    $("#doer_sprite").addClass("doer_closed");
    $("#dreng_container").addClass("dreng_positionin");
}
