(function(){var a;a=window.S||{},a=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;return g=["ace","amazing","astonishing","astounding","awe-inspiring","awesome","badass","beautiful","bedazzling","best","breathtaking","brilliant","cat's meow","cat's pajamas","classy","cool","dandy","dazzling","delightful","divine","doozie","epic","excellent","exceptional","exquisite","extraordinary","fabulous","fantastic","fantabulous","fine","finest","first-class","first-rate","flawless","funkadelic","geometric","glorious","gnarly","good","grand","great","groovy","groundbreaking","hunky-dory","impeccable","impressive","incredible","kickass","kryptonian","laudable","legendary","lovely","luminous","magnificent","majestic","marvelous","mathematical","mind-blowing","neat","outstanding","peachy","perfect","phenomenal","pioneering","polished","posh","praiseworthy","premium","priceless","prime","primo","rad","remarkable","riveting","sensational","shining","slick","smashing","solid","spectacular","splendid","stellar","striking","stunning","stupendous","stylish","sublime","super","super-duper","super-excellent","superb","superior","supreme","swell","terrific","tiptop","top-notch","transcendent","tremendous","ultimate","unreal","well-made","wicked","wonderful","wondrous","world-class"],d=1,e=1,a=document.getElementById("awe-can"),b=document.getElementById("awe-sel"),c=document.getElementById("copyurl"),f=document.getElementById("shareurl"),l=function(){var c;for(b.className="animated fadeInUp",c=k(),b.innerHTML=c;d===e;)e=Math.floor(8*Math.random());return a.className="page c"+(e+1),d=e,o(c)},h=function(){return window.addEventListener("keydown",i,!1),window.addEventListener("keyup",j,!1),c.addEventListener("click",m,!1),f.addEventListener("click",n,!1)},n=function(){return c.className="textfield active",c.select()},m=function(){return this.select()},i=function(c){var d;return d=c.keyCode,37===d||38===d||39===d||40===d?(b.className="",a.classList?a.classList.add("o0"):a.className+=" animate"):void 0},j=function(a){var b;return b=a.keyCode,37===b||38===b||39===b||40===b?l():void 0},o=function(a){var b,d;return b=document.getElementById("twitter"),d="https://twitter.com/intent/tweet?original_referer="+encodeURIComponent(document.URL)+"&text="+b.dataset.text+"&tw_p=tweetbutton&url="+encodeURIComponent(document.URL)+"&via="+b.dataset.via,b.href=d,document.location.hash=a,document.title=a,c.value=document.URL},k=function(){return g[Math.floor(Math.random()*g.length)]},{init:function(){h(),l()}}}(),a.init()}).call(this);