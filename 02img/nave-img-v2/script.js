document.addEventListener("DOMContentLoaded", () => {
    const nave = document.getElementById("nave")
    const gameArea = document.getElementById("gameArea")

    let naveX = gameArea.clientWidth / 2 - nave.clientWidth / 2
    let naveY = gameArea.clientHeight - nave.clientHeight - 20

    function updateNavePosition() {
        nave.style.left = `${naveX}px`
        nave.style.top = `${naveY}px`
    }

    updateNavePosition()

    document.addEventListener("keydown", (event) => {
        const key = event.key
        const step = 10
        switch (key) {
            case "ArrowLeft":
                if (naveX > 0) naveX -= step
                break
            case "ArrowRight":
                if (naveX < gameArea.clientWidth - nave.clientWidth)
                    naveX += step
                break
            case "ArrowUp":
                if (naveY > 0) naveY -= step
                break
            case "ArrowDown":
                if (naveY < gameArea.clientHeight - nave.clientHeight)
                    naveY += step
                break
        }
        updateNavePosition()
    })
})
