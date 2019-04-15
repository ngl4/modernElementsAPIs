/*
    Besides jQuery and Bootstrap UI, HTML 5.2 provides another option for pop-up modal display:

    <DIALOG>   

    ~new semantic element in HTML 5.2
    ~Display a popup or modal window 

    *Native model : make the rest of the content inert, making sure the focus 
    stays within the window before being dismissed

    *While the dialog boxes can request a response, "a user can still navigate the page 
    without having to interact with it", but still it has the aim of requiring an action
    from the user before proceeding. 

    *Find out more here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog 

*/

const button = document.getElementById("trigger-modal");
const dialog = document.getElementById("modal");
const result = document.getElementById("result");

button.addEventListener("click", function(){
    //show the dialog as a modal window
    console.log("This is clicked");
    dialog.showModal();
});

dialog.addEventListener("close", function(){
    //Read the value of the button used to close the modal 
    console.log(dialog); //you will see the whole dialog element from HTML
    console.log(dialog.returnValue); //see console to see the return value 
    if (dialog.returnValue === "yes"){
        result.classList.add("green-yes"); //vanilla js to add and remove class
        result.classList.remove("red-no");
    }else {
        result.classList.add("red-no");
        result.classList.remove("green-yes");
    }
    result.innerText = dialog.returnValue;
}); 