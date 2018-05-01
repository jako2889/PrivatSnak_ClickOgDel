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

    $("#klasse_stoej")[0].volume = 0.25;
    $("#klasse_stoej")[0].play();

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

    $("#scene").on("animationend", noerd_valg);
}

function noerd_valg() {
    console.log("Nørd valg");
    $("#scene").off("animationend", noerd_valg);
    $("#scene").removeClass("scene_flash");

    $("#valg_question").show();
    $("#valg_ja").show();
    $("#valg_nej").show();

    $("#valg_ja").on("click", skrr_intro);
    $("#valg_nej").on("click", skrr_intro);
}

function skrr_intro() {
    console.log("Skifter til celeb intro");
    $("#valg_ja").off("click", skrr_intro);
    $("#valg_nej").off("click", skrr_intro);

    $("#valg_question").hide();
    $("#valg_ja").hide();
    $("#valg_nej").hide();
    $("#noerd_container").removeClass("noerd_positionin");
    $("#doer_sprite").removeClass("doer_closed");
    $("#phone_sprite").removeClass("phone_noerd");
    $("#phone_container").removeClass("phone_positionblitz");

    $("#doer_sprite").addClass("doer_open");
    $("#phone_sprite").addClass("phone_tom");
    $("#noerd_container").addClass("noerd_positionstart");
    $("#phone_container").addClass("phone_positionin");

    setTimeout(skrr_intro2, 2000);
}

function skrr_intro2() {
    console.log("celeb kommer ind");
    $("#celeb_container").removeClass("celeb_positionstart");

    $("#fodtrin_lyd")[0].play();

     $("#celeb_container").addClass("celeb_movein");
    $("#celeb_sprite").addClass("celeb_walkcycle");

    $("#celeb_container").on("animationend", celeb_position_in);
}

function celeb_position_in() {
    console.log("celeb står på scenen");
    $("#celeb_container").off("animationend", celeb_position_in);
    $("#celeb_container").removeClass("celeb_movein");
    $("#celeb_sprite").removeClass("celeb_walkcycle");

     $("#celeb_container").addClass("celeb_positionin");
    $("#doer_sprite").addClass("doer_closed");

    $("#doer_lyd")[0].currentTime = 0;
    $("#doer_lyd")[0].play();

    setTimeout(scene_blitz2, 2000);
}

function scene_blitz2() {
    console.log("kamera blitz af celeb");
    $("#phone_container").removeClass("phone_positionin");

    $("#scene").addClass("scene_flash");
    $("#blitz_lyd")[0].play();
    $("#phone_sprite").addClass("phone_celeb");
    $("#phone_container").addClass("phone_positionblitz");

    $("#scene").on("animationend", celeb_valg);
}

function celeb_valg() {
    console.log("valg til celeb");
    $("#scene").off("animationend", celeb_valg);
    $("#scene").removeClass("scene_flash");

    $("#valg_question").show();
    $("#valg_ja").show();
    $("#valg_nej").show();

    $("#valg_ja").on("click", kat_intro);
    $("#valg_nej").on("click", kat_intro);
}

function kat_intro() {
    console.log("kat intro");
     $("#valg_ja").off("click", kat_intro);
    $("#valg_nej").off("click", kat_intro);
    $("#valg_question").hide();
    $("#valg_ja").hide();
    $("#valg_nej").hide();
    $("#celeb_container").removeClass("celeb_positionin");
    $("#doer_sprite").removeClass("doer_closed");
    $("#phone_sprite").removeClass("phone_celeb");
    $("#phone_container").removeClass("phone_positionblitz");

    $("#doer_sprite").addClass("doer_open");
    $("#phone_sprite").addClass("phone_tom");
    $("#celeb_container").addClass("celeb_positionstart");
    $("#phone_container").addClass("phone_positionin");

    setTimeout(kat_intro2, 2000);
}

function kat_intro2() {
    console.log("kat kommer ind");
    $("#kat_container").removeClass("kat_positionstart");


     $("#kat_container").addClass("kat_movein");
    $("#kat_sprite").addClass("kat_walkcycle");

    $("#kat_container").on("animationend", kat_position_in);
}

function kat_position_in() {
    console.log("kat står på scenen");
    $("#kat_container").off("animationend", kat_position_in);
    $("#kat_container").removeClass("kat_movein");
    $("#kat_sprite").removeClass("kat_walkcycle");

     $("#kat_container").addClass("kat_positionin");
    $("#doer_sprite").addClass("doer_closed");

    $("#doer_lyd")[0].currentTime = 0;
    $("#doer_lyd")[0].play();

    setTimeout(scene_blitz3, 2000);
}

function scene_blitz3() {
    console.log("kameraet blitzer");
    $("#phone_container").removeClass("phone_positionin");

    $("#scene").addClass("scene_flash");
    $("#blitz_lyd")[0].play();
    $("#phone_sprite").addClass("phone_kat");
    $("#phone_container").addClass("phone_positionblitz");

    $("#scene").on("animationend", kat_valg);
}

function kat_valg() {
    console.log("kat valg");
    $("#scene").off("animationend", kat_valg);
    $("#scene").removeClass("scene_flash");

    $("#valg_question").show();
    $("#valg_ja").show();
    $("#valg_nej").show();

    $("#valg_ja").on("click", kvinde_intro);
    $("#valg_nej").on("click", kvinde_intro);
}

function kvinde_intro() {
    console.log("kvinde intro");
    $("#valg_ja").off("click", kvinde_intro);
    $("#valg_nej").off("click", kvinde_intro);
    $("#valg_question").hide();
    $("#valg_ja").hide();
    $("#valg_nej").hide();
    $("#kat_container").removeClass("kat_positionin");
    $("#doer_sprite").removeClass("doer_closed");
    $("#phone_sprite").removeClass("phone_kat");
    $("#phone_container").removeClass("phone_positionblitz");

    $("#doer_sprite").addClass("doer_open");
    $("#phone_sprite").addClass("phone_tom");
    $("#kat_container").addClass("kat_positionstart");
    $("#phone_container").addClass("phone_positionin");

    setTimeout(kvinde_intro2, 2000);
}

function kvinde_intro2() {
    console.log("kvinde kommer ind");
    $("#kvinde_container").removeClass("kvinde_positionstart");


     $("#kvinde_container").addClass("kvinde_movein");
    $("#kvinde_sprite").addClass("kvinde_walkcycle");

    $("#kvinde_container").on("animationend", kvinde_position_in);
}

function kvinde_position_in() {
    console.log("kvinde står på scenen");
    $("#kvinde_container").off("animationend", kvinde_position_in);
    $("#kvinde_container").removeClass("kvinde_movein");
    $("#kvinde_sprite").removeClass("kvinde_walkcycle");

     $("#kvinde_container").addClass("kvinde_positionin");
    $("#doer_sprite").addClass("doer_closed");

    $("#doer_lyd")[0].currentTime = 0;
    $("#doer_lyd")[0].play();

    setTimeout(scene_blitz4, 2000);
}

function scene_blitz4() {
    console.log("kameraet blitzer");
    $("#phone_container").removeClass("phone_positionin");

    $("#scene").addClass("scene_flash");
    $("#blitz_lyd")[0].play();
    $("#phone_sprite").addClass("phone_kvinde");
    $("#phone_container").addClass("phone_positionblitz");

    $("#scene").on("animationend", kvinde_valg);
}

function kvinde_valg() {
    console.log("kvinde valg");
    $("#scene").off("animationend", kvinde_valg);
    $("#scene").removeClass("scene_flash");

    $("#valg_question").show();
    $("#valg_ja").show();
    $("#valg_nej").show();

    $("#valg_ja").on("click", credit_antal_rigtige);
    $("#valg_nej").on("click", credit_antal_rigtige);
}

function credit_antal_rigtige() {
    console.log("antal rigtige");
}
