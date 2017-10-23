!function(){"use strict";var t="0.0.7",i=function(t){t=t||{};for(var i=1;i<arguments.length;i++)if(arguments[i])for(var e in arguments[i])arguments[i].hasOwnProperty(e)&&(t[e]=arguments[i][e]);return t},e=function(t){return this._extend=i,this.options={className:null,el:!1,collection:!1,inline:!1,popup:{width:640,height:300}},this.el=!1,this.type="text",this.share=!1,this.initialize(t)};e.prototype.initialize=function(t){return t&&"object"==typeof t&&(this.options=this._extend(this.options,t)),!!this.options.el&&(!!this.options.collection&&("img"===this.options.el.tagName.toLowerCase()&&(this.type="image"),this.collection=this.options.collection,this.via=this.options.via,this.options.el.hasAttribute("data-shareberry-via")&&(this.via=this.options.el.getAttribute("data-shareberry-via")),this.via=this.via.toString(),this.render(),this))},e.prototype.addEventListeners=function(){return!!this.el&&(this.share.addEventListener("click",this.actionShare.bind(this),!1),this.options.inline&&this.content.addEventListener("click",this.actionShare.bind(this),!1),this)},e.prototype.render=function(){if(!this.options.el)return!1;this.el=document.createElement("div"),this.el.classList.add(this.options.className),this.options.inline&&this.el.classList.add(this.options.className+"--inline");var t=this.options.className+"-share__item",i=this.options.className+"-icon";this.share=document.createElement("div");var e="";this.share.classList.add(this.options.className+"-share"),this.collection.options.twitter&&(e+='<div class="'+t+" "+t+'--twitter" data-shareberry-social="twitter" data-shareberry-handle="'+this.collection.options.twitter+'"><i class="'+i+" "+i+'--twitter"></i></div>'),this.share.innerHTML=e,this.content=document.createElement("div"),this.content.classList.add(this.options.className+"-content");var s=this.options.el.tagName;return s&&(s=s.toLowerCase(),this.content.classList.add(this.options.className+"-content--"+s)),this.options.el.parentNode.insertBefore(this.el,this.options.el),this.el.appendChild(this.content),this.content.appendChild(this.options.el),this.el.appendChild(this.share),this.addEventListeners(),this},e.prototype.getClickTarget=function(t){var i=t.target;if(!this.options.inline){if(i.classList.contains(this.options.className+"-share"))return!1;i.classList.contains(this.options.className+"-icon")&&(i=i.parentNode)}return i},e.prototype.getText=function(t){var i=this.collection.options.text,e=0;return"text"===this.type&&(i=this.options.el.innerText),"false"!==this.via&&t&&(e=t.length),i.length+e>109&&(i=i.substring(0,109-e),i+="…"),i=i?i:window.document.title,i=encodeURIComponent(i)},e.prototype.getUrl=function(){var t=this.collection.options.url;return t=t?t:window.location.href,t=encodeURIComponent(t)},e.prototype.getParams=function(t){t=!!t&&t;var i=this.getText(t),e=this.getUrl(),s=this.options.popup.width,n=this.options.popup.height,o=screen.width/2-s/2,r=screen.height/2-n,h={text:i,url:e,handle:t,window:{width:s,height:n,left:o,top:r}};return h},e.prototype.actionShare=function(t){var i=this.getClickTarget(t);if(!i)return!1;var e=i.getAttribute("data-shareberry-social"),s=i.getAttribute("data-shareberry-handle");this.options.inline&&(e="twitter",s=this.collection.options.twitter),this.renderPopup(e,s)},e.prototype.renderPopup=function(t,i){if(!t||!i||"string"!=typeof t||"string"!=typeof i)return!1;var e=this.getParams(i),s="",n="";s+="width="+e.window.width+",",s+="height="+e.window.height+",",s+="left="+e.window.left+",",s+="top="+e.window.top;var o="https://twitter.com/intent/tweet?url="+e.url+"&text="+e.text;return"false"!==this.via&&(n="true"===this.via&&e.handle?e.handle:this.via,o=o+"&via="+n),window.open(o,"",s),this};var s=function(s){return this._extend=i,this.version=t,this.options={className:"hs-shareberry",el:!1,inline:!1,twitter:!1,via:!0},this.ShareberryItem=e,this.els=[],this.shares=[],this.initialize(s)};return s.prototype.initialize=function(t){if(t&&"object"==typeof t&&(this.options=this._extend(this.options,t)),!this.options.el||"string"!=typeof this.options.el)return!1;var i=document.querySelectorAll(this.options.el);if(!i||!i.length)return!1;for(var e=0,s=i.length;e<s;e++){var n=new this.ShareberryItem({className:this.options.className,el:i[e],inline:this.options.inline,collection:this,via:this.options.via});this.shares.push(n)}return this},window.Shareberry=s,s}();