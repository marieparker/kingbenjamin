function videoDone(id) {
    document.getElementById(id).classList.toggle('hide');
    
    j = document.getElementsByClassName('count')[0].getAttribute('id');
    vidNumber = parseFloat(j);
    if(vidNumber == 16) {
        document.getElementById('benjamin1').classList.toggle('hid');
        document.getElementById('benjamin2').classList.toggle('hid');

        let message = document.getElementById('kbm');
        message.play();

    }
}

function videoPlay(clicked_id) {
    i = parseFloat(clicked_id);

    document.getElementById(i).classList.toggle('hid');
    document.getElementById('board' + i).classList.toggle('hid');

    var id = 'vid' + i;

    j = document.getElementsByClassName('count')[0];
        vidNumber = parseFloat(j.getAttribute('id'));

        vidNumber = vidNumber + 1;
        j.setAttribute('id', vidNumber);
    
    let sing = document.getElementById(id);
    sing.classList.toggle('hide');

    sing.play();

}

function Intro() {
    document.getElementById('intro').classList.toggle('hide');
}