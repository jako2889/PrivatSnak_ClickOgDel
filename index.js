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

    $("#fodtrin_lyd")[0].play();

    $("#dreng_container").on("animationend", scene_skift);
}

function scene_skift() {
    console.log("skifter til pov vinkel");

    $("#dreng_container").off("animationend", scene_skift);

    $("#dreng_container").removeClass("dreng_movein");
    $("#dreng_sprite").removeClass("dreng_walkcycle");
    $("#doer_sprite").removeClass("doer_open");

    $("#doer_lyd")[0].play();

    $("#phone_container").show();
    $("#doer_sprite").addClass("doer_closed");
    $("#dreng_container").addClass("dreng_positionin");

    setTimeout(doer_open, 2000);

}

function doer_open() {
    console.log("dør åbnes til næste scene");
    $("#doer_sprite").removeClass("doer_closed");

    $("#doer_lyd")[0].currentTime = 0;
    $("#doer_lyd")[0].play();

    $("#doer_sprite").addClass("doer_open");

    setTimeout(noerd_intro, 2000);
}

function noerd_intro() {
    console.log("Nørd kommer ind");
    $("#noerd_container").removeClass("noerd_positionstart");

    $("#fodtrin_lyd")[0].play();

     $("#noerd_container").addClass("noerd_movein");
    $("#noerd_sprite").addClass("noerd_walkcycle");

    $("#noerd_container").on("animationend", noerd_position_in);
}

function noerd_position_in() {
    console.log("Nørd står på position");
    $("#noerd_container").off("animationend", noerd_position_in);

    $("#noerd_container").removeClass("noerd_movein");
    $("#noerd_sprite").removeClass("noerd_walkcycle");
    $("#doer_sprite").removeClass("doer_open");
    $("#fodtrin_lyd")[0].pause();

    $("#noerd_container").addClass("noerd_positionin");
    $("#doer_sprite").addClass("doer_closed");

    $("#doer_lyd")[0].currentTime = 0;
    $("#doer_lyd")[0].play();

    setTimeout(scene_blitz, 2000);
}

function scene_blitz() {
    console.log("kamera blitzer");
    $("#phone_container").removeClass("phone_positionin");

    $("#scene").addClass("scene_flash");
    $("#blitz_lyd")[0].play();
    $("#phone_sprite").addClass("phone_noerd");
    $("#phone_container").addClass("phone_positionblitz");
}
