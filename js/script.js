const body = document.body
body.addEventListener("click", () => {
  const nameCLass = "light"
  const img = document.querySelector("#profile img")

  body.classList.toggle(nameCLass)

  if (body.classList.contains(nameCLass)) {
    img.setAttribute("src", "./assets/avatar-light.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg")
  }
})
