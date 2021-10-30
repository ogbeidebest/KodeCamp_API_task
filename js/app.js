function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            let postLayout = document.getElementById('post-layout')
            let html = "";


            posts.forEach(e => {

                html += `
                <div class="col-md-4 col-lg-4 col-12 h-100 mb-3" id="">
                     <a class="text-decoration-none text-dark"  href='singlepost.html' onclick="sadCard(${e.id})">
                        <div class="card h-100" id="${e.id}" >     
                            <div class="card-body h-100" id="${e.id}" >
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



        })
}



getPosts();


function sadCard(num) {
    localStorage.setItem('postId', num);

}