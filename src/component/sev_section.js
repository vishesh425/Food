import imag_2 from "../img/image_2.1.webp";
function sev_section() {
  return (
    <div className="sev_container">
      <div className="sev" >
      <div className="sev_sub">
        <div className="col col_3 ">
          <h4>Hours of Operation </h4>
          <div className="stex_container">
          <span>MON - FRI </span>
          <p>10:00pm - 1:00pm  </p>
          <p>4:00pm - 10:30pm  </p>
          <hr/>
          <span>SAT</span>
          <p>3:00pm - 10:30pm  </p>
          <hr/>
          <span>SUN</span>
          <p>We are closed</p>
         <button className="btn_3"> MAKE A RESERVATION</button>
         </div>
        </div>

        <div className="col col_4 ">
          <h5>Drop Us a Line</h5>
          <p className="sec_text">
            Don't be shy.Let us know if you have any question.
          </p>
           <button className="btn_4"> CONTACT US</button>
           <form>
          <h5>Drop Us a Line</h5>
          <p className="sec_text">
            Don't be shy.Let us know if you have any question.
          </p>
          <input type="text" placeholder="First name"/>
          <input type="text" placeholder="Last name"/>
          <input type="text" placeholder="Email"/>
           <button className="btn_5"> CONTACT US</button>
         </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default sev_section;
