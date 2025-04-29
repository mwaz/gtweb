// var Tawk_API = Tawk_API || {},
//   Tawk_LoadStart = new Date();
// (function () {
//   var s1 = document.createElement("script"),
//     s0 = document.getElementsByTagName("script")[0];
//   s1.async = true;
//   s1.src = "https://embed.tawk.to/66f2a2cae5982d6c7bb384d5/1i8hsnpv2";
//   s1.charset = "UTF-8";
//   s1.setAttribute("crossorigin", "*");
//   s0.parentNode.insertBefore(s1, s0);
// })();

var url =
  "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?51406";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#00e785",
    ctaText: "Chat with us",
    borderRadius: "25",
    marginLeft: "0",
    marginRight: "20",
    marginBottom: "20",
    ctaIconWATI: false,
    position: "right",
  },
  brandSetting: {
    brandName: "Green Twiste Exporters",
    brandSubTitle:
      "herbs exporter, sustainable herbs, fresh herbs export, Kenya herbs, ethical sourcing",
    brandImg: "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    welcomeText: "Hi there!\nHow can we help you?",
    messageText: "Hello, %0A I have a question about {{page_link}}",
    backgroundColor: "#00e785",
    ctaText: "Chat with us",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "254702449450",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
