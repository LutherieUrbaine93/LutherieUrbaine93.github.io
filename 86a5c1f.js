(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{407:function(n,e,t){var content=t(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(52).default)("36ae5b12",content,!0,{sourceMap:!1})},409:function(n,e,t){"use strict";t(407)},410:function(n,e,t){var o=t(51)((function(i){return i[1]}));o.push([n.i,"[data-v-665f324c] .video-js{\n  width:100%!important;\n  height:auto!important\n}\n[data-v-665f324c] .video-js .vjs-tech{\n  position:relative!important\n}\n[data-v-665f324c] .video-js .vjs-big-play-button{\n  top:calc(50% - .75em)!important;\n  left:calc(50% - 1.5em)!important\n}",""]),n.exports=o},425:function(n,e,t){"use strict";t.r(e);var o={props:{videoData:{type:Object,default:{}}},computed:{playerOptions:function(){return{language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:this.videoData.fichier_video.url}],poster:this.videoData.image.url}}},data:function(){return{playsinline:!0}},mounted:function(){console.log("this is current player instance object",this.myVideoPlayer)},methods:{onPlayerPlay:function(n){},onPlayerPause:function(n){},onPlayerEnded:function(n){},onPlayerLoadeddata:function(n){},onPlayerWaiting:function(n){},onPlayerPlaying:function(n){},onPlayerTimeupdate:function(n){},onPlayerCanplay:function(n){},onPlayerCanplaythrough:function(n){},playerStateChanged:function(n){},playerReadied:function(n){}}},r=(t(409),t(11)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"flex justify-center"},[t("div",{directives:[{name:"video-player",rawName:"v-video-player:myVideoPlayer",value:n.playerOptions,expression:"playerOptions",arg:"myVideoPlayer"}],staticClass:"video-player-box max-w-full",attrs:{playsinline:n.playsinline},on:{play:function(e){return n.onPlayerPlay(e)},pause:function(e){return n.onPlayerPause(e)},ended:function(e){return n.onPlayerEnded(e)},loadeddata:function(e){return n.onPlayerLoadeddata(e)},waiting:function(e){return n.onPlayerWaiting(e)},playing:function(e){return n.onPlayerPlaying(e)},timeupdate:function(e){return n.onPlayerTimeupdate(e)},canplay:function(e){return n.onPlayerCanplay(e)},canplaythrough:function(e){return n.onPlayerCanplaythrough(e)},ready:n.playerReadied,statechanged:function(e){return n.playerStateChanged(e)}}})])}),[],!1,null,"665f324c",null);e.default=component.exports}}]);