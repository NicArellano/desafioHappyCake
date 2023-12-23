

const Contacto = () => {
  return (
    <div className="view">
        <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
        <span>Correo:</span>
        <input  placeholder="name@example.com" type="text" />
        <span>Descripción</span>
        <textarea className="descripcion" name="des" id="des" cols="30" rows="10"></textarea>
        <button>Enviar</button>
    </div>
   
  )
}

export default Contacto