let streamAudio;

export default function () {

    if (streamAudio){
        streamAudio.getTracks()[0].stop()
        console.log('parando de reproduzindo audio')

    }else{
        let config = {
            video: false,
            audio: true
        }
        let success = function (stream) {
            streamAudio = stream;
            console.log('reproduzindo audio')
        }
        navigator.getUserMedia(config, success, (err) => console.log(err))
    }

}