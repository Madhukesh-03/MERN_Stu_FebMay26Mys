const translations = {
    kn: {title: "ಸ್ವಾಗತ", desc:"ಇದು ಸ್ಥಳೀಯ ಮಾಹಿತಿ" },
    en: {title: "Welcome" ,
        desc: "This is a local information"},
    hi:{title:"स्वागत",disc:"यह एक स्थानीय जानकारी है"}
    };



const title = document.getElementById("title");
const desc = document.getElementById("desc");
const out = document.getElementById("out");

function render(lang){
    const t = translations[lang] || translations.en;
    document.getElementById.lang = lang;
    title.textContent = t.title;
    desc.textContent = t.desc;
    out.textContent = "Current UI lang: "+lang;
    console.log("REndered lang: "+lang);
}
document.getElementById("langSelect").addEventListener("change", function(){
    render(this.value);

});
document.getElementById("detectBtn").addEventListener("click", function(){
    const detected = (navigator.language || "en").slice(0,2).toLowerCase();
    render(detected);
});
render("en");