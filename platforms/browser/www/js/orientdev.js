function orientationSupported() {
    try {
        return 'DeviceOrientationEvent' in window &&
        window['DeviceOrientationEvent'] !== null;
    }
    catch(e) {
        return false;
    }
}

function orientationChanged() {
    var element=document.querySelector('#orientation');

    element.innerHTML='<p>'+window.orientation+'</p>';
}

function updateOrientation(event) {
    var alpha=event.alpha, beta=event.beta, gamma=event.gamma;

    var element=document.querySelector('#orientation');
    var rotation='rotateZ('+alpha+' deg) rotate('+beta+' deg rotateY('+gamma+' deg)';

    element.style.transform=rotation;
}