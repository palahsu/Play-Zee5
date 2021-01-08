addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    var videoPath = new URL(request.url).pathname

    var videoQuery = new URL(request.url).searchParams.get('url')

   // Home Page Data and Input Box

    const html = `<!DOCTYPE html>
    <html>
<head>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="It is a Zee5 Online premium streamer with all features">
    <meta name="author" content="Avishkar Patil">
    <meta name="copyright" content="This Created by Avishkar Patil">
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://chatecrew.live/swarup/img/favicon.png">
  <title>Avi Patil | ZEE5 Online Player and Downloader !!</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/z5style.css">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/zstyle.css">
<style>
body{ background-color:#202020;}
</style>
</head>
<body>
  <h1 style="color:orange; text-align:center; cursor: pointer;"><a href="https://z5.movhdapp.ml/">ZEE5 HLS Streamer </a></h1>
  
<br><br><h3 style="text-align: center; color: #FFB200; font-family: 'Balsamiq Sans', cursive; font-size: 17px;">👇 Enter Your ZEE5 URL or VIDEO ID Below 👇 <br>And Click On STREAM</h3><br><br><br>
  <div><form method="get"  action="https://z5.movhdapp.ml" _lpchecked="1">
  <center>
 <div class="bar">
<input type="search" class="searchbar" name="url" value="" placeholder="Enter ZEE5 URL or VIDEO ID" autocomplete="off">
<a href="https://zee5.com/"> <img class="zee5" src="https://www.zee5.com/images/ZEE5_logo.png" title="Go To ZEE5 Site"></a>
</div>
<button  class="button" type="submit" value="" title="Stream And Enjoy !!">
Stream
</button>
<br><br><br><br>
<p style="color:blue; text-align:center;font-family: 'Corben', cursive;">Use This Pattern 👇 <br><code style="color:white;">z5.movhdapp.ml/ZEE5_VIDEO_ID</code><br><code style="color:white;">z5.movhdapp.ml/?url=ZEE5_VIDEO_URL</code></p>
<footer class="footer">
            <div class="container">
                <span class="copyright"><a style="text-decoration: none; color: #9C9AB3;" href="https://avipatilweb.me/">© 2021 Avishkar Patil</a></span>
            </div>
        </footer>
</body>
</html>`

    if (videoPath == "/" && videoQuery == null) {
        
        return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
        
    } else {
        if (videoPath == "/") {
            var videoId = videoQuery.split("/").pop()
        } else {
            var videoId = videoPath.replace("/", "")
        }

        var mainFetch = await fetch(`https://gwapi.zee5.com/content/details/${videoId}?translation=en&country=IN&version=2`, {
            headers: {
                "x-access-token": await token(),
                'Content-Type': 'application/json'
            }
        })
        var mainFetch = await mainFetch.json()


        // Error 400 Code 

        const erhtml = `<!DOCTYPE html>
    <html>
<head>
<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="It is a Zee5 Online premium streamer with all features">
    <meta name="author" content="Avishkar Patil">
    <meta name="copyright" content="This Created by Avishkar Patil">
    <meta name="robots" content="all" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="https://chatecrew.live/swarup/img/favicon.png">
  <title>Not Found | Avi Patil | ZEE5 Online Player and Downloader !!</title>
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/z5style.css">
  <link rel="stylesheet" href="https://avipatilpro.github.io/host/zstyle.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Mali:wght@300&display=swap" rel="stylesheet">
<style>
body{ background-color:#202020;}
</style>
</head>
<body>
  <h1 style="color:orange; text-align:center; cursor: pointer;"><a href="https://z5.movhdapp.ml/">ZEE5 HLS Streamer </a></h1>
  
<br><br>
<p style="color:#0EEEBB; text-align:center;font-family: 'Corben', cursive; font-size: 19px;">⚠️ ERROR NOT FOUND ⚠️</p>
<h3 style="text-align: center; color: #FFB200; font-family: 'Mali', cursive; font-size: 17px;">Please Check Your ZEE5 URL or VIDEO ID </h3>
<br><br><br>
  <div><form method="get"  action="https://z5.movhdapp.ml" _lpchecked="1">
  <center>
 <div class="bar">
<input type="search" class="searchbar" name="url" value="" placeholder="Enter ZEE5 URL or VIDEO ID" autocomplete="off">
<a href="https://zee5.com/"> <img class="zee5" src="https://www.zee5.com/images/ZEE5_logo.png" title="Go To ZEE5 Site"></a>
</div>
<button  class="button" type="submit" value="" title="Stream And Enjoy !!">
Stream
</button>
<br><br><br><br>
<footer class="footer">
            <div class="container">
                <span class="copyright"><a style="text-decoration: none; color: #9C9AB3;" href="https://avipatilweb.me/">© 2021 Avishkar Patil</a></span>
            </div>
        </footer>
</body>
</html>`

        if (mainFetch.title == undefined) {
            return new Response(erhtml, {
                status: 400,
                headers: ({
                    "Content-Type": "text/html",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Access-Control-Allow-Origin": "*",
                    "Made-By": "https://github.com/avipatilpro/ZEE5/"
                })
            })
        } else {
            var pass = ({
                title: mainFetch.title,
                image: mainFetch.image_url.replace("270x152", "1170x658"),
                hls: `https://zee5vodnd.akamaized.net${mainFetch.hls[0].replace("drm", "hls")}${await videotoken()}`
            })
            return new Response(await template(pass.title, pass.image, pass.hls), {
                status: 200,
                headers: ({
                    "Content-Type": "text/html",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Access-Control-Allow-Origin": "*",
                    "Made-By": "https://github.com/avipatilpro/ZEE5/"
                })
            })
        }
    }
}

async function videotoken() {
    var videotokenfetch = await fetch('https://useraction.zee5.com/tokennd/')
    var videotokenfetch = await videotokenfetch.json()
    return videotokenfetch.video_token
}

async function token() {
    var tokenfetch = await fetch('https://useraction.zee5.com/token/platform_tokens.php?platform_name=web_app')
    var tokenfetch = await tokenfetch.json()
    return tokenfetch.token
}

async function template(title, thumb, hls) {
    return `<html>
<head>
  <title>${title} | Avishkar Patil</title>
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
html {
  font-family: Poppins;
  background: #000;
  margin: 0;
  padding: 0
}
.loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 9999;
    }
    
    .loading-text {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        width: 100%;
        height: 100px;
        line-height: 100px;
    }
    
    .loading-text span {
        display: inline-block;
        margin: 0 5px;
        color: #00b3ff;
        font-family: 'Quattrocento Sans', sans-serif;
    }
    
    .loading-text span:nth-child(1) {
        filter: blur(0px);
        animation: blur-text 1.5s 0s infinite linear alternate;
    }
    
    .loading-text span:nth-child(2) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.2s infinite linear alternate;
    }
    
    .loading-text span:nth-child(3) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.4s infinite linear alternate;
    }
    
    .loading-text span:nth-child(4) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.6s infinite linear alternate;
    }
    
    .loading-text span:nth-child(5) {
        filter: blur(0px);
        animation: blur-text 1.5s 0.8s infinite linear alternate;
    }
    
    .loading-text span:nth-child(6) {
        filter: blur(0px);
        animation: blur-text 1.5s 1s infinite linear alternate;
    }
    
    .loading-text span:nth-child(7) {
        filter: blur(0px);
        animation: blur-text 1.5s 1.2s infinite linear alternate;
    }
    
    @keyframes blur-text {
        0% {
            filter: blur(0px);
        }
        100% {
            filter: blur(4px);
        }
    }
    .plyr__video-wrapper::before {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 10;
        content: '';
        height: 35px;
        width: 35px;
        background: url('https://telegra.ph/file/22da4d29204c748a526a4.png') no-repeat;
        background-size: 35px auto, auto;
    }
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
  setTimeout(videovisible, 4000)
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
</html>`
}
