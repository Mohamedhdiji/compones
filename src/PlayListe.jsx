import React from 'react'
import MainVedio from './MainVedio'

const PlayListe = () => {
    const list=[
        {
            name:"AVEYRO AVE - 7KIT M3A LEB7AR (مصطلحات الصراحة)",vid:"https://www.youtube.com/embed/EaxeStSFJWo"
        },
        {
            name:"AVEYRO AVE - RESISTENZA (أواني حان) ft. SPOY, KEPLER",vid:"https://www.youtube.com/embed/z59dbWlRVHo"
        },
        {
            name:"Samara - Nseni (Official Music Video)",vid:"Samara - Nseni (Official Music Video)"
        },
        {
            name:"EL KATIBA - Jarreb | جرّب (Clip Officiel)",vid:"https://www.youtube.com/embed/n7wu0Je18t8"
        },
        {
            name:"Blingos - King Kong",vid:"https://www.youtube.com/embed/5MyqzQPdrJY"
        }
    ]
  return (
    <div>
        {
        React.Children.toArray(list.map(PlayListe=><div>    <iframe
            width="350"
            height="200"
            src={PlayListe.name}
            title={PlayListe.vid}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            
        </div>))
        }
    </div>
  )
}

export default PlayListe