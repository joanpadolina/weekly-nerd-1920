console.log('sup')

const images = document.querySelectorAll('.sketch-wrapper div')
const radioButton = document.querySelectorAll('#pages-sketch input')
const labels = document.querySelectorAll('#pages-sketch label')
const liNotes = document.querySelectorAll('.notes li')
const liArticle = document.querySelectorAll('.nerd-articles li')
const notesH2 = document.querySelector('.notes h2')
const articlesH2 = document.querySelector('.nerd-articles h2')
for (const radio of radioButton) {
    radio.addEventListener('click', e => {
        console.log(e.srcElement.id)
        console.log(images)
    })
}
console.log(liNotes)
for (const li of liNotes) {
    li.addEventListener('mouseover', e => {
        notesH2.style.setProperty('--before-top', '1.8em');
        notesH2.style.setProperty('--before-bg', '#3EC1D3');
        notesH2.style.setProperty('--before-height', '.1em');
        notesH2.style.setProperty('color', '#FF9A00')
    })
    li.addEventListener('mouseleave', e => {
        notesH2.style.setProperty('--before-top', '.5em');
        notesH2.style.setProperty('--before-bg', 'gray');
        notesH2.style.setProperty('--before-height', '.2em');
        notesH2.style.setProperty('color', 'black')
    })
}

for (const li of liArticle) {
    li.addEventListener('mouseover', e => {
        articlesH2.style.setProperty('--before-top', '1.8em');
        articlesH2.style.setProperty('--before-bg', '#3EC1D3');
        articlesH2.style.setProperty('--before-height', '.1em');
        articlesH2.style.setProperty('color', '#FF9A00')
    })
    li.addEventListener('mouseleave', e => {
        articlesH2.style.setProperty('--before-top', '.5em');
        articlesH2.style.setProperty('--before-bg', 'gray');
        articlesH2.style.setProperty('--before-height', '.2em');
        articlesH2.style.setProperty('color', 'black')
    })
}