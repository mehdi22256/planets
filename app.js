let spaceContainer=document.getElementById('space-container')
let title=document.createElement('h2')
let planetsContainer=document.createElement('div')
let planetsListTitle=document.createElement('h3')
let planetsList=document.createElement('ul')
title.textContent='The Universe'
title.style.color='purple'
planetsListTitle.textContent='Our Planet'
planetsContainer.setAttribute('style','border:1px solid black; width:40%; padding:5px; background:gray')
planetsList.innerHTML="<li>Mars</li> <li>Venous</li> <li>Earth</li>"
let universeImg=document.createElement('img')
universeImg.setAttribute('src','https://media.istockphoto.com/id/1035676256/photo/background-of-galaxy-and-stars.jpg?s=612x612&w=0&k=20&c=dh7eWJ6ovqnQZ9QwQQlq2wxqmAR7mgRlQTgaIylgBwc=')
spaceContainer.appendChild(title)
spaceContainer.appendChild(universeImg)
spaceContainer.appendChild(planetsContainer)
planetsContainer.appendChild(planetsListTitle)
planetsContainer.appendChild(planetsList)
