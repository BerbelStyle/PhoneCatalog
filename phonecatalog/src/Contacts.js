import { findAllByAltText } from "@testing-library/react";

const Contacts = ({ contacts, companies }) => {
  return (
    <div>
      <center><h1 className="title">SMARTPHONES</h1></center>
      {contacts.map((contact) => (
        <div className="list">
          <div className="card" >
            <div className="info" id={contact.id} >
              <h3 className="name">{contact.name}</h3>
              <h4 className="brand">{contact.manufacturer}</h4>
              <p className="description">{contact.description}</p>
              <p className="link" onClick={prueba.bind(null, contact.id)}>Characteristics</p>
            </div>
            <div className="details" style={{display: "none"}} id ={contact.id + "2"}>
              <div className="column">
                <h4 className="det">Price: {contact.price}€</h4>
                <h4 className="det">Color: {contact.color}</h4>
              </div>
              <div className="column">
                <h4 className="det">Screen: {contact.screen}</h4>
                <h4 className="det">RAM: {contact.ram}GB</h4>
              </div>
              <div className="column">
                <h4 className="det">GPU: {contact.processor}</h4>
                <h4 className="det">Camera: {contact.camera}MP</h4>
              </div>
              <p className="link" onClick={prueba.bind(null, contact.id)}>Back</p>
          </div>
            <img className="image" src={'http://localhost:3001/images/' + contact.imageFileName}/>
          </div>     
        </div>     
      ))}
   
      <div className="footer">
        <center><h1 className="title">Brands</h1></center>
        <div className="navlinks">
          {companies.map((company) => (     
            <a className="brandlink" key={company.id} href={company.url} target="_blank">{company.id}</a>     
          ))}
        </div>
      </div>
    </div>
  )
}

var detailsActive = true;

//Function that displays one of the two sides of the mobile card
function prueba(id)  {
  var x = document.getElementById(id);
  var y = document.getElementById(id+"2");
  if (detailsActive) {
    detailsActive = false;
      y.style.display = "none"; 
      x.style.display = "flex";
  } else {
    detailsActive = true;
      x.style.display = "none";
      y.style.display = "flex";
  }
}

export default Contacts
