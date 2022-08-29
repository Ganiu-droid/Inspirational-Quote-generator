
const url = "https://type.fit/api/quotes"; //quotes api


//Handles quote generation
const generateQuote = async () => {
    try{
        let response = await fetch(url);
        let data = await response.json();
        //console.log(data)
        let randomIndex = Math.floor(Math.random() * data.length)
        let quote = data[randomIndex]
        const {text, author} = quote
        document.getElementById("quote").innerHTML = text;
        if(author === null){
            author = "unknown"
        }
        document.getElementById("author").innerHTML = author;
        console.log(text);
        console.log(author);
    }

    catch(err){
        console.log(err)
    }

}
document.getElementById('generate-btn').addEventListener('click', generateQuote);


