// footer content
let footerHtml = `
<link rel="stylesheet" href="css/footer.css">
    <p>E-Mailaddress: <a href="mailto:alva@palmfeldt.se">alva@palmfeldt.se</a></p>
    <div id="linkedIn">
      <p>My LinkedIn
        <a href="https://www.linkedin.com/in/alva-widerberg-palmfeldt-393a41261/">
          <img class="socialMediaIcon" src="/img/linked.png" alt="linkedin-logo">
        </a>
      </p>
    </div>
    <p>Latest website update: 2024-08</p>
    <p class="tiny">I'll probably forget to change this date, hehe</p>
`;


let myWindow = `<div>
<link rel="stylesheet" href="css/window.css">
  <div class="msWindow">
    <div class="msTitle">
      <p>secrets.exe</p>
      <div class="msTitlebuttonBox">
        <button class="msButtons"><img src="/img/WIN/MINIMIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/RESIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/CLOSE.png"/></button>
      </div>
    </div>
    <div class="msSelection">
    <p>File</p>
    <p>Edit</p>
    <p>View</p>
    <p>Help</p>
    </div>
    <div class="msBorderContainer">
    <div class="msInsideContainer">
      <p>Hi, my name is Alva Palmfeldt.</p>
      <p>
        I'm a 23 year old post graduate student from Sweden and live in Växjö. I'm studied
        at Linnaeus University in Växjö within the Network security
        program.
      </p>

      <p>
        I love everything to do with IT hardware, hacking, pentesting but also found a
        passion for webprogramming.

      </p>
    
  </div>
  <div class="popupMSWindow">
<link rel="stylesheet" href="css/window.css">
  <div class="msWindow">
    <div class="msTitle">
      <p>palmfeldt_info.exe</p>
      <div class="msTitlebuttonBox">
        <button class="msButtons"><img src="/img/WIN/MINIMIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/RESIZE.png"/></button>
        <button class="msButtons"><img src="/img/WIN/CLOSE.png"/></button>
      </div>
    </div>
        <div class="msSelection">
    <p>File</p>
    <p>Edit</p>
    <p>View</p>
    <p>Help</p>
    </div>
    <div class="msBorderContainer">
    <div class="msInsideContainer">
      <p>Hi, my name is Alva Palmfeldt.</p>
      <p>
        I'm a 23 year old post graduate student from Sweden and live in Växjö. I'm studied
        at Linnaeus University in Växjö within the Network security
        program.
      </p>

      <p>
        I love everything to do with IT hardware, hacking, pentesting but also found a
        passion for webprogramming.

      </p>
    
  </div>`


document.getElementById('footer').innerHTML = footerHtml;
document.getElementById('sidebar').innerHTML = myWindow;


function lightDarkSwitch(bool) {
  if (bool) {
    themeSwitch.innerHTML = '<img src="/img/icons/theme-light.svg" class="imgswitchLight" alt="theme-switch">';
  } else {
    themeSwitch.innerHTML = '<img src="/img/icons/theme-dark.svg" class="imgswitchDark" alt="theme-switch">';
  }
}

lightDarkSwitch(false)

/**
 * TODO Functtion to switch theme
 */
themeSwitch.addEventListener('click', function () {
  //   let theme = document.getElementById('theme');
  //   if (theme.getAttribute('href') == 'css/light.css') {
  //     theme.href = 'css/dark.css';
  //   } else {
  //     theme.href = 'css/light.css';
  //   }
  lightDarkSwitch(!themeSwitch.innerHTML.includes('light'));

}
);