function sendToWhatsApp() {
    const phoneNumber = "+250786887832";
    const message = "Muraho, ndifuza kwiyandikisha mu itsinda rya Smarmone.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
}
