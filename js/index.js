let fontName = "Poppins";
let fontUrl="font/Poppins/Poppins-Light.ttf";


let fontStyle = document.createElement("style");
fontStyle.appendChild(document.createTextNode(
    `@font-face{
     font-family: '${fontName}';
     src: URL('${fontUrl}');
    }`
))

document.head.appendChild(fontStyle)



//FERQLI YONTEM

// function setFont(fontName, url) {
//     var newStyle = document.createElement('style');
//     newStyle.appendChild(document.createTextNode("\
//     @font-face {\
//         font-family: " + fontName + ";\
//         src: url('" + url + "') format('opentype');\
//     }\
//     "));

//     document.head.appendChild(newStyle);
//   }