function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let postLayout = document.getElementById('post-layout')
            let html = "";

            data.forEach(e => {
                // console.log(e);
                html += `
                <div class="col-md-4 col-lg-4 col-12 h-100 mb-3" id="">
                     <a class="text-decoration-none text-dark" href='https://jsonplaceholder.typicode.com/posts/${e.id}'>
                        <div class="card">
                            <div class="card-body">
                                     <h2 class="d-flex justify-content-center text-danger" >${e.id}</h2>
                                     <h5 class="post-title mb-4">${e.title}</h5>
                                    <p class=" post-body">${e.body}</p>

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