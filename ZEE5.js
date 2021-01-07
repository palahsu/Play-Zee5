addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {

    var videoPath = new URL(request.url).pathname

    var videoQuery = new URL(request.url).searchParams.get('url')

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

        if (mainFetch.title == undefined) {
            return new Response("<code>This Is Invalid Video ID or URL Please Check Your Link format ", {
                status: 400,
                headers: ({
                    "Content-Type": "text/html",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Access-Control-Allow-Origin": "*",
                    "Made-By": "https://github.com/palahsu/"
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
                    "Made-By": "https://github.com/palahsu/"
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
    return `<html><head><title>${title}</title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta http-equiv="X-UA-Compatible" content="IE=edge" /><link rel='stylesheet' href='https://cdn.plyr.io/3.6.2/plyr.css'><link href="https://fonts.googleapis.com/css?family=Poppins|Quattrocento+Sans" rel="stylesheet" /> <script src="https://cdn.plyr.io/3.6.2/plyr.js"></script> <script src="https://cdn.jsdelivr.net/npm/hls.js"></script> </head><style>html{font-family:Poppins;background:#000;margin:0;padding:0}</style><body><video controls crossorigin poster="${thumb}" playsinline> <source type="application/x-mpegURL" src="${hls}"> </video></body> <script>document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("video"),n=e.getElementsByTagName("source")[0].src,o={};if(Hls.isSupported()){var config={maxMaxBufferLength:100,};const t=new Hls(config);t.loadSource(n),t.on(Hls.Events.MANIFEST_PARSED,function(n,l){const s=t.levels.map(e=>e.height);o.quality={default:s[0],options:s,forced:!0,onChange:e=>(function(e){window.hls.levels.forEach((n,o)=>{n.height===e&&(window.hls.currentLevel=o)})})(e)};new Plyr(e,o)}),t.attachMedia(e),window.hls=t}else{new Plyr(e,o)}});</script> </html>`
}
