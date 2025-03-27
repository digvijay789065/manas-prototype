function toggleMute() {
    const remoteVideo = document.getElementById('remoteVideo');
    remoteVideo.muted = !remoteVideo.muted;
    alert(remoteVideo.muted ? 'Muted' : 'Unmuted');
}

function endCall() {
    alert('Call ended');
    // Add logic to disconnect the call
}
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const uploadedVideo = document.getElementById("uploadedVideo");
        uploadedVideo.play().catch(error => console.log("Autoplay failed:", error));
    }, 500);
});

function toggleMute() {
    const remoteVideo = document.getElementById("remoteVideo");
    remoteVideo.muted = !remoteVideo.muted;
}

function endCall() {
    alert("Call ended.");
    // You can add logic here to stop streams or navigate away.
}
