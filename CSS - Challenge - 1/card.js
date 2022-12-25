const cards =[
    {
        name: 'Dark Magician',
        tag: 'Dark',
        stars: '*******',
        img: './img/darkmagician.webp',
        code: 'Yug-006',
        type: 'Spellcaster',
        parragraph: 'The greater magician in terms of attack and defense',
        stats: 'ATK/2500 DEF/2100',
        edition: '46986414',
        copywrite: 'c 2014 KAZUKI TAKAHASHI'
    },
    {
        name: 'Blue Eyes White Dragon',
        tag: 'Light',
        stars: '********',
        img: './img/bluedragon.webp',
        code: 'BIK-001',
        type: 'Dragon',
        parragraph: 'The greater Dragon in terms of attack and defense',
        stats: 'ATK/3000 DEF/2500',
        edition: '89631139',
        copywrite: 'c 1996 KAZUKI TAKAHASHI'
    },
    {
        name: 'Dark Magician Girl',
        tag: 'Dark',
        stars: '******',
        img: './img/darkmagiciangirl.webp',
        code: 'Yug-007',
        type: 'Spellcaster',
        parragraph: 'The greater magician girl in terms of attack and defense',
        stats: 'ATK/2100 DEF/1900',
        edition: '46977414',
        copywrite: 'c 2014 KAZUKI TAKAHASHI'
    },
    {
        name: 'Mantis Scorscese',
        tag: 'Insect',
        stars: '********',
        img: './img/mantis.webp',
        code: 'Yug-010',
        type: 'Spellcaster',
        parragraph: 'The greater mantis in terms of movies productions',
        stats: 'ATK/3300 DEF/2700',
        edition: '46986814',
        copywrite: 'c 2022 KAZUKI TAKAHASHI'
    },
    {
        name: 'Skull Servant',
        tag: 'Dark',
        stars: '*',
        img: './img/skullservant.webp',
        code: 'Yug-009',
        type: 'Zombie',
        parragraph: 'The skull without attack and defense',
        stats: 'ATK/0 DEF/0',
        edition: '66986414',
        copywrite: 'c 1996 KAZUKI TAKAHASHI'
    }

]

let card = document.getElementById("YugiohCard");

cards.map((c) => {
  card.innerHTML += `
  <article class="cards">
    <div class="nameAndTag">
        <div class="name">${c.name}</div>
        <div class="tag">${c.tag}</div>
    </div>
    <div class="stars">${c.stars}</div>
    <div class="image"><img src="${c.img}"></div>
    <div class="code">${c.code}</div>
    <div class="description">
        <div class="descriptionText">
            <p class="descriptionTextType">${c.type}</p>
            <p class="descriptionTextParragraph">${c.parragraph}</p>
        </div>
        <div class="descriptionStats">
            <p>${c.stats}</p></div>
        </div>
    </div>
    <div class="editionAndCopywrite">
        <p class="edtion"${c.edition}</p> 
        <p class="copywrite">${c.copywrite}</p>
    </div>
</article>
`; 
});
