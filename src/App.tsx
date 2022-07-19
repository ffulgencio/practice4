import ProfileCard from "./components/ProfileCard";

export default function App(props:any){
  return (
    <div>
      <h1>User Profile Card</h1>
      <ProfileCard 
       nombre  = "Ronny"
       apellido = "Gerónimo"
       correo = "ronnygeronimo@correo.com.do"
       telefono = "809-reac-js01"
       urlImagen = "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784"
       bio = "Biografia de Ronny"
      />
          </div>
  )
}