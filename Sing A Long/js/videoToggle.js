function videoDone() {
    let deleteSource = document.getElementById('videoSRC');
    deleteSource.remove();

    document.getElementsByClassName("videos")[0].classList.toggle("hide");

    window.setTimeout(benjamin(), 8000);
}

function benjamin() {
    j = document.getElementsByClassName('hide')[0].getAttribute('id');
    vidNumber = parseFloat(j);
    if(vidNumber == 16) {
        document.getElementById('benjamin1').classList.toggle('hid');
        document.getElementById('benjamin2').classList.toggle('hid');
    }
}

function videoPlay(clicked_id) {  
    i = parseFloat(clicked_id);
    console.log(i);

    //let sing = document.getElementById(vidNumber);
    j = document.getElementsByClassName('hide')[0].getAttribute('id');
        vidNumber = parseFloat(j);
        console.log(vidNumber);
    let sing = document.getElementsByTagName('video')[0];
    
    let song = document.createElement('source');
        song.setAttribute('src', 'videos/testvid' + i + '.mp4');
        song.setAttribute('type', 'video/mp4');
        song.setAttribute('id', 'videoSRC')
        sing.appendChild(song);

        let vid = document.getElementsByTagName('video')[0].classList.toggle("hide");
    
        sing.play();        
        
        vidNumber = vidNumber + 1;
        sing.setAttribute('id', vidNumber);

    document.getElementById(i).classList.toggle('hid');
    document.getElementById('board' + i).classList.toggle('hid');
    }