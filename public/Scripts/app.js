
/* app.js, Egor, Student # 301179880, 10/23/2022 */

// IIFE -- Immediately Invoked Function Expression

(function(){
    function Start(){
        console.log("App Started...");
        let deleteButton = document.querySelectorAll('.btn-danger')

        for(button of deleteButton)
        {
            button.addEventListener('click', (event) =>{
                if(!confirm('Are you sure?'))
                {
                    event.preventDefault();
                    window.location.assign("/contact-list");
                }
        });
    }
    }

    window.addEventListener("load", Start);

})();