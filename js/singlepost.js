var numberVar = localStorage.getItem('postId')


fetch(`https://jsonplaceholder.typicode.com/posts/${numberVar}`)
    .then(response => response.json())
    .then((posts) => {
        console.log(posts)
        let postLayout = document.getElementById('post-layout')
        let html = `
        
                <div class="m-auto w-75 " col-12 h-100 mb-3" id="">

                        <div class="card h-100" id="${posts.id}" >     
                            <div class="card-body h-100" id="${posts.id}" >
                                     <h2 class="d-flex justify-content-center text-danger" >${posts.id}</h2>
                                     <h5 class="post-title mb-4 text-center">${posts.title}</h5>
                                    <p class=" post-body text-justify">${posts.body}</p>

                    </div>
                </div>

            </div>
                `;

        postLayout.innerHTML = html




    })