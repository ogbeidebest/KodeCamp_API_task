function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            let postLayout = document.getElementById('post-layout')
            let html = "";


            posts.forEach(e => {

                html += `
                <div class="col-12 col-md-4 col-lg-4 mb-4" id="">
                     <a class="text-decoration-none text-dark"  href='singlepost.html' onclick="sadCard(${e.id})">
                        <div class="card h-100 mb-4 border border-dark" id="${e.id}" >     
                            <div class="card-body id="${e.id}" >
                                     <h2 class="d-flex justify-content-center text-danger" >${e.id}</h2>
                                     <h5 class="post-title mb-4 text-center">${e.title}</h5>
                                    <p class=" post-body text-justify">${e.body}</p>

                    </div>
                </div>
               </a>
            </div>
                `
                postLayout.innerHTML = html

            });
            var posts = localStorage.setItem("post", JSON.stringify(posts));


        })
}



getPosts();
posts = localStorage.setItem("post", num);