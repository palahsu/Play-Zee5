<html>
<head>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="It is a Zee5 Online premium streamer with all features">
    <meta name="author" content="palahsu">
    <meta name="copyright" content="This Created by palahsu">
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="">
  <title>palahsu | ZEE5 Online Player FREE!!</title>
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/z5style.css">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/zstyle.css">
<style>
body{ background-color:##242B2E;}
</style>
</head>
<body>
  <h1 style="color:orange; text-align:center;">ZEE5 Ripper Streamer </h1>
  
<br><br><br>
  
  <div><form method="get"  action="https://z5.movhdapp.ml" _lpchecked="1">
  <center>
 <div class="bar">
<input type="search" class="searchbar" name="url" value="" placeholder="Enter ZEE5 URL or VIDEO ID" autocomplete="off">
<a href="https://zee5.com/"> <img class="zee5" src="https://www.zee5.com/images/ZEE5_logo.png" title="Go To ZEE5 Site"></a>
</div>
<button  class="button" type="submit" value="">
Stream
</button>
<br><br><br><br>
<br><code style="color:#1B98F5; text-align:center;font-family: 'Arial'; ">Uses   <br><code style="color:white;">Given Zee5 The Movie Url</code></p>
<footer class="footer">
            <div class="container">
                <span class="copyright"><a style="text-decoration: none; color: #9C9AB3;" href="href="href="https://avipatilweb.me/">© 2021 palahsu</a></span>
            </div>
        </footer>
</body>
</html>

<html>
<head>
  <title>${title} | palahsu</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <link rel="shortcut icon" type="image/x-icon" href="https://telegra.ph/file/22da4d29204c748a526a4.png">
  <link rel='stylesheet' href='https://cdn.plyr.io/3.6.2/plyr.css'>
  <link href="https://fonts.googleapis.com/css?family=Poppins|Quattrocento+Sans" rel="stylesheet"/>
  <script src="https://cdn.plyr.io/3.6.2/plyr.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/hls.js"></script>
</head>
<style>

</style>
<body>
  <div id="loading" class="loading">
<div class="loading-text">
    <span class="loading-text-words">L</span>
    <span class="loading-text-words">O</span>
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">D</span>
    <span class="loading-text-words">I</span>
    <span class="loading-text-words">N</span>
    <span class="loading-text-words">G</span>
</div>
</div>
  <video controls crossorigin poster="${thumb}" playsinline>
    <source type="application/x-mpegURL" src="${hls}"> </video>
</body>
<script>
  setTimeout(videovisible, 3000)
function videovisible() {
    document.getElementById('loading').style.display = 'none'
}
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector("video"),
    n = e.getElementsByTagName("source")[0].src,
    o = {};
  if(Hls.isSupported()) {
    var config = {
      maxMaxBufferLength: 100,
    };
    const t = new Hls(config);
    t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function(n, l) {
      const s = t.levels.map(e => e.height);
      o.quality = {
        default: s[0],
        options: s,
        forced: !0,
        onChange: e => (function(e) {
          window.hls.levels.forEach((n, o) => {
            n.height === e && (window.hls.currentLevel = o)
          })
        })(e)
      };
      new Plyr(e, o)
    }), t.attachMedia(e), window.hls = t
  } else {
    new Plyr(e, o)
  }
});

</script>
</html>
