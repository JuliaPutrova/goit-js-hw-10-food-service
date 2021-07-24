import createTemplate from './template/template.hbs';
import menu from './data/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    menu: document.querySelector(".js-menu"),
    input: document.querySelector('#theme-switch-toggle'),
    body: document.body,
}
const state = JSON.parse(localStorage.getItem('theme'));

refs.input.checked = state?.checked;
refs.body.classList.add(state?.theme ? state.theme : Theme.LIGHT) 

refs.menu.innerHTML = createTemplate(menu);
refs.input.addEventListener('change', onChangeTheme)

function onChangeTheme(e) {
    e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
}

function toggleTheme(add, rem) {
    const state = {
        theme: add,
        checked: add === Theme.DARK,
    }
    refs.body.classList.replace(rem, add)
    localStorage.setItem('theme', JSON.stringify(state));
}



// const markUp = createMenu();
// function createMenu(){
//     return menu.map(createTemplate).join('');
// }

// refs.menu.innerHTML = markUp;

// refs.menu.innerHTML = createTemplate(menu);
// refs.input.addEventListener('change', onChangeTheme)



// function onChangeTheme(e) {
//     if (!e.target.checked) {
//     toggleTheme(Theme.LIGHT, Theme.DARK);
//  return;
// } 
//     toggleTheme(Theme.DARK, Theme.LIGHT);
// }

// function onChangeTheme(e) {
//     e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT, Theme.DARK);
// }


// function toggleTheme(add, rem) {
// //    refs.body.classList.add(add)
// //     refs.body.classList.remove(rem)
    
//     const state = {
//     theme: add,
//     checked: add===Theme.DARK,    
// }

// refs.body.classList.replace(rem, add)

//     // localStorage.setItem('theme', add)
    
//  localStorage.setItem('theme', JSON.stringify(state));

    
// }

// (function () {
    // if (localStorage.getItem('theme') === Theme.DARK) {
    // if (localStorage.getItem('theme')) {
        // refs.body.classList.add(Theme.DARK)
        // refs.body.classList.add(localStorage.getItem('theme')? localStorage.getItem('theme') : Theme.LIGHT)
        // refs.input.checked = true;
        // refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
//         return;}
    
//    refs.body.classList.add(Theme.LIGHT)
// })( )


