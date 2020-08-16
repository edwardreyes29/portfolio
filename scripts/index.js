/* To render page information */
console.log("hello");

const addProjects = () => {
    for (let i = 0; i < 3; i++) {
        /* Add row */
        $("#projects-div").append(`<div id="row-${i+1}" class="row"></div>`);
        /* add two columns per row */
        for (let j = 0; j < 2; j++) {
            var openColDiv;
            var openContainer;
            var openProjectContainer;
            if (j === 0) {
                openColDiv = `<div class="col-6 pl-0">`;
                openContainer = `<div class="container">`;
                openProjectContainer = `<div class="project-container text-light">`;
            } else if (j === 1) {
                openColDiv = `<div class="col-6 pr-0">`
                openContainer = `<div class="container pr-0">`;
                openProjectContainer = `<div class="project-container text-light ml-auto">`
            }
            /* Append columns */
            $(`#row-${(i+1)}`).append(`${openColDiv}
                        ${openContainer}
                            ${openProjectContainer}
                                <div class="project-image-container">
                                    <img id="project-image-${i+1}${j+1}" class="img-fluid"
                                        src="assets/modal-images/project-image-template-light.png"
                                        style="cursor:pointer;"> <!-- js target -->
                                        <a class="project-link-${i+1}${j+1}" href="#" target="_blank">
                                            <div class="project-image-overlay"></div>
                                        </a> <!-- js target -->
                                </div>
                                <div class="mt-2">
                                    <div class="d-flex justify-content-between">
                                        <h3 class="project-name-${i+1}${j+1} mb-2" style="font-size: 1.3rem;"> Project
                                            Name </h3>
                                        <!-- js target -->
                                        <div class="pr-3" data-toggle="modal" data-target="#project-modal-${i+1}${j+1}">
                                            <!-- js target -->
                                            <img class="img-fluid" src="assets/icons/info-circle-light.svg"
                                                style="cursor:pointer; width: 18px;">
                                        </div>
                                    </div>
                                    <p id="project-description-${i+1}${j+1}" class="mb-2 font-weight-light">Lorem ipsum
                                        dolor sit
                                        amet, consectetur
                                        adipiscing elit.
                                        Vestibulum mi lacus, feugiat nec arcu id, porta malesuada ex.</p>
                                    <!-- js target -->
                                    <div class="d-flex mb-2">
                                        <img src="assets/icons/arrow-up-circle-white.svg" class="mr-1">
                                        <a class="project-link-${i+1}${j+1} text-reset" href="#" title="project-deployed"
                                            target="_blank" style="text-decoration: underline;">Deployed
                                        Site</a>
                                        <!-- js target -->
                                </div>
                                <div class="d-flex mb-2">
                                    <img src="assets/icons/github-white.svg" class="mr-1">
                                    <a id="project-github-link-${i+1}${j+1}" class="text-reset" href="#"
                                        title="project-repository" target="_blank"
                                        style="text-decoration: underline;">GitHub</a> <!-- js target -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);

            /* Append modals */
            $("#modals-div").append(` 
                    <div class="modal fade" id="project-modal-${i+1}${j+1}" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <!-- js target -->
                    <div class="modal-dialog modal-xl" role="document">
                        <div class="modal-content bg-dark text-light">
                            <div class="modal-header bg-dark">
                                <h5 class="project-name-${i+1}${j+1}" id="exampleModalLabel">Project Name</h5>
                                <!-- js target -->
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style="color: #ffffff;">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-12 col-sm-7">
                                        <!-- Carousel -->
                                        <div id="carousel-controls-${i+1}${j+1}" class="carousel slide mb-3"
                                            data-ride="carousel">
                                            <div id="carousel-div-${i+1}${j+1}" class="carousel-inner"></div><!-- target js --->
                                            <a class="carousel-control-prev" href="#carousel-controls-${i+1}${j+1}"
                                                role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon"
                                                    aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carousel-controls-${i+1}${j+1}"
                                                role="button" data-slide="next">
                                                <span class="carousel-control-next-icon"
                                                    aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-5 overflow-container mg-3"
                                        style="height: 44vh;">
                                        <p id="project-long-description-${i+1}${j+1}">Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Nulla ut nisi pretium, tempor augue
                                            feugiat, accumsan elit. Donec suscipit massa urna, non eleifend
                                            libero tristique ut. Aenean
                                            accumsan est vitae purus maximus facilisis. Curabitur eget ex in
                                            felis lacinia tristique et
                                            vitae orci. Nullam sollicitudin maximus risus, ut lacinia dui
                                            hendrerit eget. Ut porta
                                            sodales leo, non porttitor turpis posuere in. Fusce semper,
                                            augue
                                            quis vulputate interdum,
                                            lacus nunc imperdiet nunc, eu vulputate velit orci in quam.
                                            Etiam
                                            consequat purus sit amet
                                            lectus rutrum, eget interdum odio aliquam. Quisque porta eget mi
                                            sit
                                            amet tempus.

                                            Donec eget feugiat ex. Vestibulum nec maximus arcu. Morbi
                                            suscipit
                                            sollicitudin lectus, et
                                            varius erat iaculis vel. Pellentesque blandit fringilla orci, ut
                                            blandit libero ornare quis.
                                            Sed ut auctor est. Nam fermentum sapien at cursus tincidunt.
                                            Quisque
                                            ac massa eu sapien
                                            sodales lacinia id et eros. Donec tincidunt euismod nisi a
                                            iaculis.
                                            In aliquet hendrerit dui
                                            sed pharetra. Nulla efficitur libero nec tristique sodales.
                                            Nulla
                                            semper fermentum velit, a
                                            pharetra arcu tincidunt quis. Duis vehicula nisi at dictum
                                            egestas.
                                            Proin cursus velit
                                            libero, ut accumsan erat iaculis et. Sed ultrices id nisi quis
                                            ultrices. Nullam elementum
                                            lacus sed quam maximus placerat.
                                        </p> <!-- js target -->
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <a class="project-link-${i+1}${j+1} btn btn-secondary" href="#" role="button"
                                    title="Project link" target="_blank">Launch</a> <!-- js target -->
                                <button type="button" class="btn btn-secondary"
                                    data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            `)

            /* Append Carousel images */
            for (let k = 0; k < 3; k++) {
                let carouselClass = `class="carousel-item"`;
                let image;
                if (k === 0) {
                    carouselClass = `class="carousel-item active"`;
                    image = "../../assets/modal-images/modal-test.png"
                } else if (k === 1) {
                    image = "../../assets/modal-images/WeatherApp-home.png"
                } else {
                    image = "../../assets/modal-images/project-image-template-dark.png"
                }
                $(`#carousel-div-${i+1}${j+1}`).append(`
                    <div id="carousel-image-${i+1}${j+1}${k+1}" ${carouselClass}>
                        <img src=${image}
                            class="d-block w-100" alt="..."> <!-- js target -->
                    </div>
                `)
            }
            
        }
    }
}

addProjects();