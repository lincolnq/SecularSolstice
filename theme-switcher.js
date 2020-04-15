window.onload = function() {
    var is_light;
    
    if (window.location.search == 'dark') is_light=false;
    else if (window.location.search == 'light') is_light=true;
    else if (document.cookie == 'theme=dark') is_light=false;
    else if (document.cookie == 'theme=light') is_light=true;
    else is_light=false;

    if (is_light) {
        document.getElementsByTagName('html')[0].className = 'light';
    }

    var toggle = document.createElement('a');
    toggle.className = 'themeSwitcher';
    toggle.innerText = 'color '+document.cookie;
    toggle.onclick = function() {
        is_light = !is_light;
        document.cookie = 'theme='+(is_light?'light':'dark');
        document.getElementsByTagName('html')[0].className = is_light?'light':'';
    };
    document.getElementsByTagName('body')[0].append(toggle);
}
