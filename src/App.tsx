import ProfileCard from "./components/ProfileCard";

const users = [

{

  nombre: "Ronny",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
{

  nombre: "A",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
{

  nombre: "B",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
{

  nombre: "C",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
{

  nombre: "D",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
{

  nombre: "Ronny",
  apellido: "Gerónimo",
  correo: "ronnygeronimo@correo.com.do",
  telefono: "809-reac-js01",
  urlImagen: "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784",
  bio: "Biografia de Ronny",

},
  
]

export default function App(props:any){
 const user1 = users[0];
 const user2 = users[1];
 const user3 = users[2];
 const user4 = users[3];
 const user5 = users[4];

 
  //return (
    // <div>
    //   <h1>User Profile Card</h1>
    //   <ProfileCard 
    //    nombre  = {user1.nombre}
    //    apellido = "Gerónimo"
    //    correo = "ronnygeronimo@correo.com.do"
    //    telefono = "809-reac-js01"
    //    urlImagen = "https://img.freepik.com/foto-gratis/retrato-empresario-excitado-vestido-traje_171337-154.jpg?size=626&ext=jpg&ga=GA1.2.1740654145.1658219784"
    //    bio = "Biografia de Ronny"
    //   />  
    //       </div>
  //)

   return (
     <div>
       <h1>User Profile Card</h1>
       <ProfileCard {...user1}/>
       <ProfileCard {...user2}/>
       <ProfileCard {...user3}/>
       <ProfileCard {...user4}/>
       <ProfileCard {...user5}/>
         
          </div>
  )



}