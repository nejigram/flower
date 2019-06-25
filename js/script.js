const
sliders = document.querySelectorAll("#slider .parts"),
slider_interval = 3000,
str_interval = 200,
strs = document.querySelectorAll("#slider span"),
detailboxs = document.querySelectorAll("#detailcontentarea .box"),
scroll_interval = Math.floor(1000 / 60 * 10);

let
scroll_timer,
slider_timer,
slider_nowindex = 0,
str_timer,
str_nowindex = 0;

window.addEventListener("load",function(){
    for(let x = 0;x < sliders.length;x++){
        sliders[x].classList.add("opa0");
    }
    sliders[slider_nowindex].classList.remove("opa0");
    slider_tiimer = setInterval(slidermove,slider_interval);

    strmove();
    str_timer = setInterval(strmove,str_interval);

});

window.addEventListener("scroll",function(){
    if(scroll_timer !== false){
        clearTimeout(scroll_timer);
    }
    scroll_timer = setTimeout(scrollmove,scroll_interval);

});

const slidermove = function(){
    sliders[slider_nowindex].classList.add("opa0");
    if(slider_nowindex >= sliders.length - 1){
            slider_nowindex = 0;
    }else{
        slider_nowindex++;
    }
    sliders[slider_nowindex].classList.remove("opa0");
}

const strmove = function(){
    strs[str_nowindex].classList.add("opa1");
    str_nowindex++;
    if(str_nowindex >= strs.length){
        clearTimeout(str_timer);
    }

}

console.log(detailboxs);
const scrollmove = function(){
    let infomation_top = document.querySelector("#infomation").getBoundingClientRect().top + window.pageYOffset;
    let imgcontentarea_top = document.querySelector("#imgcontentarea").getBoundingClientRect().top + window.pageYOffset;

    if(infomation_top < window.pageYOffset + window.innerHeight){
        document.querySelector("#infomation").classList.remove("opa0");
        document.querySelector("#infomation").classList.remove("obj_up");
    }
    if(imgcontentarea_top < window.pageYOffset + window.innerHeight){
        document.querySelector("#imgcontentarea").classList.remove("opa0");
        document.querySelector("#imgcontentarea").classList.remove("obj_up");
    }
    for(let x = 0;x < detailboxs.length;x++){
        console.log("a");
        let detailbox_top = detailboxs[x].getBoundingClientRect().top + window.pageYOffset;
        if(detailbox_top < window.pageYOffset + window.innerHeight){
            detailboxs[x].classList.remove("opa0");
            detailboxs[x].classList.remove("obj_up");
        }

    }
}
