let coll = document.getElementsByClassName("collapsible");
let i;


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {

        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

let buttonNotification = document.querySelector('#dropdownNotificationButton');
let dropdownNotification = document.querySelector('#dropdownNotification');

// const options = {
//     placement: 'bottom',
//     triggerType: 'click',
//     offsetSkidding: 0,
//     offsetDistance: 10,
//     delay: 300,
//     onHide: () => {
//         console.log('dropdown has been hidden');
//     },
//     onShow: () => {
//         console.log('dropdown has been shown');
//     },
//     onToggle: () => {
//         console.log('dropdown has been toggled');
//     }
// };

buttonNotification.addEventListener('click', function (){
    console.log('cliccato');
   dropdownNotification.classList.toggle('hidden');
});

let buttonAvatar = document.querySelector('#dropdownUserAvatarButton');
let dropdownAvatar = document.querySelector('#dropdownAvatar');

buttonAvatar.addEventListener('click', function (){
    dropdownAvatar.classList.toggle('hidden');
})


