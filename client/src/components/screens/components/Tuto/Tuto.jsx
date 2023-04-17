import "./tuto.scss"

export default function Tuto() {
  return (
    <div className="tuto">
    <div className="tutoWrapper">
      <div className="tutoTitle">
        Hey make a wish !
      </div>
      
      <video width="100%" controls>
        <source src="chemin_vers_la_video.mp4" type="video/mp4" />
     </video>

      
    </div>
  </div>
    
  )
}
