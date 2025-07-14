function Pie() {
  return (
    <footer className="bg-dark text-white mt-5 pt-4 pb-3 border-top">
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center gap-2">
          <div className="d-flex align-items-center">
            <img src="/Icons/phone.png" alt="Teléfono" width="20" />
            <span className="ms-2">53453453</span>
          </div>
          <div className="d-flex align-items-center">
            <img src="/Icons/mail.png" alt="Correo" width="20" />
            <span className="ms-2">avajumpers@gmail.com</span>
          </div>
        </div>

        <div className="mt-4">
          <small className="text-secondary d-block">
            AVA Jumpers and Party Rentals
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Pie;
