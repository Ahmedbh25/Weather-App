document.querySelector(".btn").addEventListener('click', () => {
    const review_text = document.querySelector(".paragraphe").value;
    const rating = document.querySelector(".rating").value;
    console.log(rating == null)
    if(rating === ""){
        return document.querySelector("#Error1").innerText = "Empty Rating Number ! "
    }else if(!(rating >0 && rating <= 10) ){
        return document.querySelector("#Error1").innerText = "Rating Number Must Be Between 1 & 10"
    }else{
        document.querySelector("#Error1").innerText = ""
    }
    if(review_text === ""){
        return document.querySelector("#Error2").innerText = "Empty Review ! "
    }else{
        document.querySelector("#Error2").innerText = ""
    }

    document.querySelector(".ratings").innerText = `Rating : ${rating}`
    document.querySelector(".review_txt").innerText = `Review : ${review_text}`

    document.querySelector("#success").innerText = "Review Added Successfully"

    setTimeout(() => {
        document.querySelector("#success").innerText = "";
        document.querySelector(".paragraphe").value = "";
        document.querySelector(".rating").value = "";
        document.querySelector(".review_txt").innerText = "";
        document.querySelector(".ratings").innerText = "";
    }, 5000);
})