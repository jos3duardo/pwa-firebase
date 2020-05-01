export default {
    el: '#footer',
    template: require('./template.html'),
    afterBind() {
        let btnCollection = document.querySelectorAll('#footer a')

        btnCollection.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                console.log(e.target)
            })
        })
    }
}