function generateQR() {
    var qrText = document.getElementById("qrText").value;
    if (qrText.trim() === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    var qr = new QRious({
        element: document.getElementById("qrCanvas"),
        value: qrText,
        size: 200
    });

    // GSAP 3D Flip Animation
    gsap.fromTo("#qrCanvas",
        { opacity: 0, rotateY: 180, scale: 0 },
        { opacity: 1, rotateY: 0, scale: 1, duration: 1, ease: "back.out(1.7)" }
    );

    document.getElementById("downloadBtn").style.display = "block";
}

function downloadQR() {
    const canvas = document.getElementById("qrCanvas");
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}

function clearQR() {
    document.getElementById("qrText").value = "";
    const ctx = document.getElementById("qrCanvas").getContext("2d");
    ctx.clearRect(0, 0, 200, 200);
    document.getElementById("downloadBtn").style.display = "none";
}
