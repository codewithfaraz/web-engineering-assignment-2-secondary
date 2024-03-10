$(document).ready(function () {
  $(".review__img").click(function () {
    const images = $(".review__img");
    const review = $(".review");
    for (i = 0; i < images.length; i++) {
      images[i].classList.remove("active__reviewer");
    }
    for (i = 0; i < review.length; i++) {
      review[i].classList.remove("active__review");
    }
    const dataSet = $(this).attr("data-set");
    images[dataSet - 1].classList.add("active__reviewer");
    const b = $(`.review${dataSet}`);
    b[0].classList.add("active__review");
    // console.log(dataSet);
  });
  $(".projects-btn").click(function (e) {
    const projects = $(".project");
    const buttons = $(".projects-btn");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active-project");
    }
    this.classList.add("active-project");
    const dataSet = $(this).attr("data-set");
    console.log(dataSet);
    for (i = 0; i < projects.length; i++) {
      projects[i].classList.remove("active");
    }
    projects[dataSet - 1].classList.add("active");
  });
});
