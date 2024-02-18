

const apikeys = 'c7e9c1991ecd445e9be667caf9e75647';

const bolg_container = document.getElementById('bolg-container');

const searchFiled = document.getElementById('search-input');

const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click', async () => {
    const searchValue = searchFiled.value.trim();

    if (searchValue !== "") {
        try {
            const article = await fetchNewsQuery(searchValue);
            displayBlogs(article);


        } catch (error) {
            console.log(error);
        }
    }

})


async function fetchNewsQuery(searchValue) {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=${searchValue}
        &pageSize=15&apikey=${apikeys}
`
        const response = await fetch(apiUrl)
        const data = await response.json()
        // console.log(data)
        return data.articles
    }
    catch (error) {
        console.error("Error Fetching randon news", error)
        return []
    }
}

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-02-17&to=2024-02-17&sortBy=popularity&apiKey=c7e9c1991ecd445e9be667caf9e75647
        &pageSize=15&apikey=${apikeys}
`
        const response = await fetch(apiUrl)
        const data = await response.json()
        // console.log(data)
        return data.articles
    }


    catch (error) {
        console.error("Error Fetching randon news", error)
        return []
    }

}

function displayBlogs(articles) {
    bolg_container.innerHTML = "";
    articles.forEach((article) => {
        const blogcard = document.createElement("div");
        blogcard.classList.add("blog-card");


        const img = document.createElement("img");

        if (article.urlToImage) {
            img.src = article.urlToImage;
        } else {

            img.src = "placeholder-image.jpg";
        }
        img.alt = article.title;

        const title = document.createElement("h2");
        const lengTitle = article.title.length > 30 ? article.title.slice(0, 30) + "..." : article.title;
        title.textContent = lengTitle;

        const author = document.createElement("p");
        const lengthPara = article.author && article.author.length > 140 ?
            article.author.slice(0, 140) + "..." : article.author;
        author.textContent = lengthPara;

        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(author);

        // Open article link in a new tab when clicked
        blogcard.addEventListener("click", () => {
            window.open(article.url, "_blank")
        });

        bolg_container.appendChild(blogcard);
    });
}


(async () => {
    try {
        const articles = await fetchRandomNews();
        //    console.log(articles);

        displayBlogs(articles);

    } catch (error) {
        console.error("Error fetching randon news", error)
    }
})()