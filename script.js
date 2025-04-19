const podcasts = [
    {
        title: "The Art Angle",
        genre: "Arts",
        description: "Deep dive into the art world",
        audio: "https://www.podtrac.com/pts/redirecthttps://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chrt.fm/track/D82G91/traffic.megaphone.fm/ART1598602446.mp3?updated=1744982631.mp3",
        image:"https://megaphone.imgix.net/podcasts/8cdf5252-e35f-11eb-8df5-c7b410a69d60/image/25fc3ea223e44501604085e38458b84e.png?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress"
    },
    {
        title: "Motivation Daily",
        genre: "Motivation",
        description: "Stay motivated everyday",
        audio: "https://audio4.redcircle.com/episodes/d3ba4e20-9e65-4133-ac60-6b722888fb5a/stream.mp3",
        image: "https://media.redcircle.com/images/2025/3/15/18/e17e9a76-32f5-4cff-8b46-59a1c8ebbb2e_d01ca692c_39194061-1696009464146-37ebbe910a39b.jpg"
    },
    {
        title: "Smartless",
        genre: "Comedy",
        description: "Fun and witty conversations",
        audio: "https://dts.podtrac.com/redirect.mp3/stitcher.simplecastaudio.com/91e8a523-8d65-4b9f-a715-637f1a87235c/episodes/914830a5-7be6-4a9b-a613-8e2e819be405/audio/128/default.mp3?aid=rss_feed&awCollectionId=91e8a523-8d65-4b9f-a715-637f1a87235c&awEpisodeId=914830a5-7be6-4a9b-a613-8e2e819be405&feed=o4MKcfjK",
        image:"https://image.simplecastcdn.com/images/6b2861f6-d7ec-4f88-bc67-43748d98bfbd/e29573cd-07c9-42ae-9fc7-e9db4dfcc65f/3000x3000/image002.jpg?aid=rss_feed"
    },
    {
        title: "Crime Junkie",
        genre: "Thriller",
        description: "True crime stories",
        audio: "https://anchor.fm/s/5fa5cf30/podcast/play/36055698/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-09-30%2Ffe72ea608c023e72d5b2beaf53a46e28.m4a",
        image: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/15947020/15947020-1624722426435-d6f43b734204d.jpg"
    },
    {
        title: "TED Talks Daily",
        genre: "Motivation",
        description: "Short inspiring talks",
        audio: "https://download.ted.com/products/197465.mp4?apikey=172BB350-0205",
        image: "https://pl.tedcdn.com/rss_feed_images/ted_talks_main_podcast/video.png"
    },
    {
        title: "Decoder",
        genre: "Tech",
        description: "Tech interviews and insights",
        audio: "https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chrt.fm/track/524GE/traffic.megaphone.fm/VMP6291474935.mp3?updated=1744913562",
        image: "https://megaphone.imgix.net/podcasts/5c6a4f4a-e69c-11e8-8066-17a10182e4c8/image/The_Verge_Decoder_Tileart_3000.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress"
    },
    { 
        title: "World News Tonight ", 
        genre: "News", 
        description: "Start your day with the most important news", 
        audio: "https://www.podtrac.com/pts/redirect.mp3/pscrb.fm/rss/p/traffic.megaphone.fm/ESP3493368509.mp3?updated=1745020065", 
        image: "https://megaphone.imgix.net/podcasts/e2b57b50-99f2-11ea-8a6d-3f1de3e89c20/image/WNT_DM_TITLE_1500x1500.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
        
    },
    { 
        title: "The Educator's Room", 
        genre: "Education", 
        description: "Practical strategies for educators", 
        audio: "https://anchor.fm/s/1c4a1570/podcast/play/47708169/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2022-1-15%2F248197789-44100-2-eabea05df4b8d.m4a", 
        image: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo/4646172/884cd01691e18ae6.png",
        
    },
    { 
        title: "The Joe Rogan Experience", 
        genre: "Comedy", 
        description: "Conversations with comedians, scientists, and more", 
        audio: "https://traffic.megaphone.fm/GLT2445488205.mp3?updated=1744912177", 
        image: "https://megaphone.imgix.net/podcasts/8e5bcebc-ca16-11ee-89f0-0fa0b9bdfc7c/image/11f568857987283428d892402e623b21.jpg?ixlib=rails-4.3.1&max-w=3000&max-h=3000&fit=crop&auto=format,compress",
        
    },
    { 
        title: "Tech Over Tea", 
        genre: "Tech", 
        description: "A podcast where technology is discussed over a cup of tea.", 
        audio: "https://anchor.fm/s/149fd51c/podcast/play/100826265/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2025-3-4%2F397813279-44100-2-23e8dfdc03fe3.mp3", 
        image: "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/3360191/3360191-1582876308682-774a5e811e2b3.jpg",
        
    },
    { 
        title: "In The Moment: Acting, Art and Life", 
        genre: "Arts", 
        description: "Exploring the worlds of acting, art, and the lives of artists.", 
        audio: "https://feeds.soundcloud.com/stream/2080694910-anthonymeindl-anthony-interviews-ian-harding.mp3", 
        image: "https://i1.sndcdn.com/avatars-uU4xbg7z9Qn0ThQN-WEjaoQ-original.jpg",
        
    },
    { 
        title: "The Art of Being Well", 
        genre: "Arts", 
        description: "A podcast that explores holistic health and wellness, with a focus on healing and personal growth.", 
        audio: "https://pscrb.fm/rss/p/pdst.fm/e/claritaspod.com/measure/arttrk.com/p/DM22A/mgln.ai/e/369/swap.fm/track/rMcaufTTUA0ts8Gfif7m/rss.art19.com/episodes/cbe09e7d-2ae6-4a1c-9589-3810382053e2.mp3?rss_browser=BAhJIgtDaHJvbWUGOgZFVA%3D%3D--d05363d83ce333c74f32188013892b2863ad051c", 
        image: "https://content.production.cdn.art19.com/images/86/0a/f6/f6/860af6f6-dc9e-4cb6-8f8c-afe3ebb0dec3/de22991d1e120b22ac38e9c7b9026362aa561b1b10a2509c9470391347dac7a481214474fdd1134eb3adb3cd28dc5dafd1dc6b5ede26cb60195d20c06d2f86ae.jpeg",
         
    },
    { 
        title: "The Motivation Minute", 
        genre: "Motivation", 
        description: "A quick burst of motivation to start your day with positivity and energy.", 
        audio: "https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/65568854/motivationminute_0418.mp3" , 
        image: "https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/572a6213f06f51b4bdc7698e8ac37f30.jpg",
        
    },
    { 
        title: "Suspense - Old Time Radio Thriller", 
        genre: "Thriller", 
        description: "A collection of classic old-time radio thrillers that will keep you on the edge of your seat.", 
        audio: "https://dts.podtrac.com/redirect.mp3/api.spreaker.com/download/episode/65550062/suspense_490519_341_consequence_128_44_27990_29m46s.mp3", 
        image: "https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/2414015baf1623b1483b714bf17fee9d.jpg",
        
    },
    {
        title: "Learning Revolution",
        genre: "Education",
        description: "Start and grow your online business with educational products, content marketing, and practical advice.",
        audio: "https://media.blubrry.com/learningrevolution/content.blubrry.com/learningrevolution/association-mavens-kelly-cobb.mp3",  
        image: "https://www.learningrevolution.net/wp-content/uploads/powerpress/iTunes-PodCast.png", 
        
    },
    {
        title: "Simple English News Daily",
        genre: "News",
        description: "Daily world news explained in simple English. Great for English learners and anyone looking for easy-to-understand news.",
        audio: "https://dts.podtrac.com/redirect.mp3/op3.dev/e/api.spreaker.com/download/episode/65633876/vladimir_putin_russia_s_modern_tsar.mp3", // Example episode URL — can be updated with latest
        image: "https://d3wo5wojvuv7l.cloudfront.net/t_rss_itunes_square_1400/images.spreaker.com/original/ba176831c794a92828aa9d379652df2b.jpg", // Thumbnail from RSS feed
        
    },
    
    

];

function loadPodcasts(podcastArray) {
    const list = document.getElementById('podcast-list');
    list.innerHTML = "";
    podcastArray.forEach(podcast => {
        const div = document.createElement('div');
        div.className = 'podcast';
        div.innerHTML = `
            <img src="${podcast.image}" alt="${podcast.title}">
            <h3>${podcast.title}</h3>
            <p><strong>Genre:</strong> ${podcast.genre}</p>
            <p>${podcast.description}</p>
        `;
        div.addEventListener('click', () => redirectToDetailPage(podcast));
        list.appendChild(div);
    });
}


function redirectToDetailPage(podcast) {
    localStorage.setItem("selectedPodcast", JSON.stringify(podcast));
    window.location.href = "podcast-detail.html";
}

function filterGenre(genre) {
    if (genre === 'All') {
        loadPodcasts(podcasts);
    } else {
        loadPodcasts(podcasts.filter(p => p.genre === genre));
    }
}

document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filtered = podcasts.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
    loadPodcasts(filtered);
});

loadPodcasts(podcasts);
