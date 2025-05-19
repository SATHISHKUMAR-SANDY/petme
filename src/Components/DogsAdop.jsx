import React from "react";
import dog from "../assets/images/paw.png";
import dog4 from "../assets/images/dogs 4.png";
import "../assets/Styles/Dogs.css";
import { useNavigate } from "react-router-dom";

function DogsAdop() {
 const navi = useNavigate()
  return (
    <>
      <div className="container dogs-parent2">
        <div className="dog-head2">
          <h2>Dogs</h2>
          <img src={dog} alt="Dog Paw" />
        </div>
      </div>

      <div className="container text-center mt-5">
        <img
          src={dog4}
          alt="Dog Banner"
          style={{ width: "70%", height: "300px" }}
        />
      </div>


      <div className="pet-content-1 ">
        <h3 className="m-0">Pepper</h3>
        <button onClick={()=>navi("/petass")} className="adopebutton">Adopt Me</button>
      </div>




      <div className="container content-parent mt-4">
        <p>
          He is full of love and super playful. Dogs are highly social <br></br>
          creatures with a strong bond with humans, having been <br></br>
          domesticated for thousands of years. They come in a wide<br></br>{" "}
          variety of breeds, each with unique physical characteristics and
          <br></br> temperaments.
        </p>


      </div>
      <div className="content-parent-2">
      <ul>
          <li>Type – Juvenile (6 to 12 months)</li>
          <li>Gender – Female</li>
          <li>Breed – Indie</li>
          <li>Neutered – No</li>
          <li>Age – 8 months</li>
          <li>Shelter – World For All Animal Care and Adoptions</li>
        </ul>

        <p>
          <strong>Appearance:</strong>
          <br />
          Dogs are generally four-legged animals with a coat of hair, <br></br>
          varying in size, shape, and color depending on the breed.
        </p>

        <p>
          <strong>Sensory Abilities:</strong>
          <br />
          They have an exceptional sense of smell, superior hearing, and a
          <br></br> larger field of vision than humans.
        </p>

        <p>
          <strong>Behavior:</strong>
          <br />
          Dogs are social animals that communicate through body language,
          <br></br> scent, and vocalizations. They exhibit a range of behaviors
          from<br></br> playful and affectionate to protective and territorial.
        </p>

        <p>
          <strong>Intelligence:</strong>
          <br />
          Dogs are known for their ability to learn, problem-solve, and<br></br>{" "}
          understand human communication.
        </p>

        <p>
          <strong>Loyalty and Bond:</strong>
          <br />
          Dogs have a strong bond with their owners, often displaying loyalty
          <br></br>and affection.
        </p>
      </div>
    </>
  );
}

export default DogsAdop;
