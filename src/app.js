// selection du canvas et creation du context 2d

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// creation des variables pour la position de la souris  même si posY n'est pas obligatoire  pour l'exo
// on fait demarer posX à 100
let posX = 100,
  posY

let mouseX = 100

window.addEventListener('resizes', e => {
  mouseX = e.offsetX
})
// ajout de l AddEventListener avec mousemove parametre avec un event pour donner un position à notre souris

canvas.addEventListener('mousemove', e => {
  posX = e.offsetX
  posY = e.offsetY
})

// creation de la function tick qui permet d appeller la function 60X par seconde
const tick = () => {
  // sert a clear notre canvas comme un tableau blanc et on dessine quelque chose.
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  //on save le détour pour ne pas avoir de bug
  ctx.save()

  // on indique le chemin
  ctx.beginPath()

  // on dessine le rectancle  positionne sur 0 X et  Y ensuite on lui donne les
  // on met posX pour que le rectangle suive la souris et on le divise par la moitier de la width pour centrer la souris au centre du reclagle
  ctx.rect(posX - canvas.width / 6, 0, canvas.width / 3, 750)

  // pour le remplikr et faire des test couleur noir de base
  // ctx.fill()

  //on utilise la methode clip apres la forme dessiner pour prendre en compte les détour et mettre l'image ou la vidéo dedans
  ctx.clip()

  //on dessine l'image ou la vidéo
  ctx.drawImage(
    document.querySelector('video'),
    0,
    0,
    canvas.width,
    canvas.height
  )
  // on restore
  ctx.restore()

  requestAnimationFrame(tick)
}
tick()
