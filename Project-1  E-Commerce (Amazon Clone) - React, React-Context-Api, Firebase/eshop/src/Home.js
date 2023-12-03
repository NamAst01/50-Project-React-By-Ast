import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://linon.co.za/wp-content/uploads/2023/06/Rectangle-58-768x278-1.png"
            alt=""
            className="home_image"
          />
          <div className="home_row">
            <Product
              id="1"
              title="tivi sieu tot sieu re "
              price={123}
              rating={5}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
            <Product
              id="2"
              title="tivi sieu tot sieu re "
              price={123}
              rating={5}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
          </div>
          <div className="home_row">
            <Product
              id="3"
              title="tivi sieu tot sieu re "
              price={123}
              rating={5}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
            <Product
              id="4"
              title="tivi sieu tot sieu re "
              price={123}
              rating={6}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
            <Product
              id="5"
              title="tivi sieu tot sieu re "
              price={123}
              rating={1}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="tivi sieu tot sieu re "
              price={123}
              rating={2}
              image="https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
