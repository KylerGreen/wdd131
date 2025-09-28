const themeSelector = document.querySelector('.Theme-Selection');

function
changeTheme(){
    let theme = document.querySelector('.Theme-Selection').value;
    if(theme === "Dark"){
        document.body.classList.add('dark');
        document.body.querySelector('.logo').src = "byui-logo_white.png";
    }
    else{
        document.body.classList.remove('dark');
        document.body.querySelector('.logo').src = "byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);