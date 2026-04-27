function ChangeImage(){
    const image = document.querySelector('#image')
    const url = prompt('please enter your image');
    image.setAttribute('src', url);

    const border = prompt("geli border sawirkaga");
    image.style.border = border;

    const width = prompt('please enter width');
    image.style.width = width

    const height = prompt('please enter height')
    image.style.height = height

    const borderRadius = prompt('please enter border radius')
    image.style.borderRadius = borderRadius
}