document.addEventListener("DOMContentLoaded", () =>{
    const formElement = document.getElementById("formElem")
    formElement.addEventListener("submit", (event) =>{
        event.preventDefault();
        const formatData = new FormData(formElement);
        formatData.append("submitted", new Date());
        for (const iterator of formatData.keys()) {
            console.log(iterator, formatData.get(iterator));
            
        }
        
    })
})

