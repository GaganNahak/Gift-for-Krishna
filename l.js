let yes = document.getElementById( "yes" )
let no = document.getElementById( "no" )
let ne = document.createElement( "div" )
let content = document.getElementById( "content" )
content.prepend( ne )
ne.innerText ="Please select yes or No"

yes.addEventListener( "click", () => {
    ne.classList = "ne1"
    ne.innerText = "🥹Thank you🥹"

} )
no.addEventListener( "click", () => {
    ne.classList = "ne2"
    ne.innerText = "😭Please😭"

} )
