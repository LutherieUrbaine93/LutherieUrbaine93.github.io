(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(n,o,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(52).default)("5671a4f4",content,!0,{sourceMap:!1})},411:function(n,o,r){"use strict";r(408)},412:function(n,o,r){var t=r(51)((function(i){return i[1]}));t.push([n.i,"#board[data-v-51b87826]{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  grid-gap:.5em;\n  grid-auto-rows:150px;\n  overflow:auto\n}\n#board a[data-v-51b87826]{\n  position:relative;\n  display:block\n}\n#board .box[data-v-51b87826]{\n  padding:1em;\n  white-space:pre-wrap\n}\n#board .box h1[data-v-51b87826]{\n  font-size:1.5em;\n  overflow-wrap:break-word\n}\n@media only screen and (min-width:640px){\n#board[data-v-51b87826]{\n    grid-template-columns:minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);\n    grid-auto-rows:140px;\n    width:100%;\n    padding:1.25em\n}\n#board a[data-v-51b87826]:first-child{\n    grid-column:3/4\n}\n#board a[data-v-51b87826]:nth-child(2){\n    grid-column:1/3;\n    grid-row:1/3\n}\n#board a[data-v-51b87826]:nth-child(3){\n    grid-column:3/5;\n    grid-row:2/4\n}\n#board a[data-v-51b87826]:nth-child(6){\n    grid-column:4/6;\n    grid-row:1/2\n}\n#board .box-link:first-child:hover .box[data-v-51b87826]{\n    margin:-1em 0 0\n}\n#board .box-link:nth-child(2):hover .box[data-v-51b87826]{\n    margin:-1em 0 0 -1em\n}\n#board .box-link:nth-child(3):hover .box[data-v-51b87826]{\n    margin:1em 0 0\n}\n#board .box-link:nth-child(4):hover .box[data-v-51b87826]{\n    margin:0 0 0 1em\n}\n#board .box-link:nth-child(5):hover .box[data-v-51b87826]{\n    margin:1em 0 0 -1em\n}\n#board .box-link:nth-child(6):hover .box[data-v-51b87826]{\n    margin:-1em 0 0 1em\n}\n#board .box-link:nth-child(7):hover .box[data-v-51b87826]{\n    margin:1em 0 0\n}\n#board .box-link:nth-child(8):hover .box[data-v-51b87826]{\n    margin:1em 0 0 1em\n}\n}\n@media only screen and (min-width:768px){\n#board[data-v-51b87826]{\n    width:100%\n}\n#board .box h1[data-v-51b87826]{\n    font-size:1.65em\n}\n}\n@media only screen and (min-width:1024px){\n#board[data-v-51b87826]{\n    grid-auto-rows:180px;\n    width:945px\n}\n#board .box h1[data-v-51b87826]{\n    font-size:1.8em\n}\n}\n@media only screen and (min-width:1280px){\n#board[data-v-51b87826]{\n    grid-auto-rows:200px;\n    width:1050px\n}\n}\n#board .box[data-v-51b87826]{\n  height:100%;\n  width:100%;\n  display:flex;\n  text-align:center;\n  align-items:center;\n  justify-content:center;\n  margin:0\n}\n#board .box[data-v-51b87826],#board .box[data-v-51b87826]:hover{\n  transition:margin .1s ease-out;\n  -webkit-transition:margin .1s ease-out\n}",""]),n.exports=t},427:function(n,o,r){"use strict";r.r(o);var t={props:{menus:Array,default:[]}},d=(r(411),r(11)),component=Object(d.a)(t,(function(){var n=this,o=n.$createElement,r=n._self._c||o;return r("div",{attrs:{id:"board"}},n._l(n.menus,(function(menu){return r("nuxt-link",{key:menu.id,staticClass:"box-link",attrs:{to:menu.pageLink}},[r("div",{staticClass:"box rounded sm:shadow",style:{backgroundColor:menu.Couleur},attrs:{id:menu.pageLink}},[menu.Texte_foncer?r("h4",{staticStyle:{color:"#212121"}},[n._v(n._s(menu.Nom))]):r("h4",[n._v(n._s(menu.Nom))])])])})),1)}),[],!1,null,"51b87826",null);o.default=component.exports}}]);