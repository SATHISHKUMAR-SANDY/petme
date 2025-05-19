import React from "react";
import dog from "../assets/images/paw.png";
import "../assets/Styles/faq.css";
import "../assets/Styles/Dogs.css";
function Faq() {
  return (
    <>
    <div className="container dogs-parent2">
        <div className="dog-head2">
          <h2 className="ms-5">Adop Faq</h2>
          <img src={dog} alt="Dog Paw" />
        </div>
      </div>
      <div className="accordion custom-container" id="accordionExample">
        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How do I know if I am well-prepared to adopt a pet?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  A pet requires a significant commitment, so ensure you can
                  dedicate the necessary time for their care and exercise.
                  Financial readiness is also crucial, as pets incur ongoing
                  costs for food, vet care, and supplies.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How do I know the breed and the health status of the pet?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  Like all dogs with those adorable smashed-in faces, bulldogs
                  can suffer from breathing problems. Your bulldog's small
                  nostrils, elongated soft palate, and narrow trachea are the
                  reasons why they probably snore, and they can lead to a
                  life-threatening
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I adopt a pet from your portal?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  With their squashed faces and bulgy eyes, pugs are at risk for
                  eye problems. The most serious is an eye popping out of its
                  socket. This can happen if a pug gets into an accident or a
                  fight with another dog.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#3"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can I adopt more than one pet?
            </button>
          </h2>
          <div
            id="3"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  Like all dogs with those adorable smashed-in faces, bulldogs
                  can suffer from breathing problems. Your bulldog's small
                  nostrils, elongated soft palate, and narrow trachea are the
                  reasons why they probably snore, and they can lead to a
                  life-threatening emergency if they get overheated or
                  overtired.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What should I do after making an appointment with the shelter?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  If this happens, cover the eye with a damp cloth and rush your
                  dog to the vet. The vet may be able to put the eye back in
                  place, although whether the dog will retain vision in the eye
                  depends on the severity of the damage.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#11"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              How do I check my appointment time?
            </button>
          </h2>
          <div
            id="11"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  Like all dogs with those adorable smashed-in faces, bulldogs
                  can suffer from breathing problems. Your bulldog's small
                  nostrils, elongated soft palate, and narrow trachea are the
                  reasons why they probably snore, and they can lead to a
                  life-threatening
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#4"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can I adopt more than one pet?
            </button>
          </h2>
          <div
            id="4"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  suffer from breathing problems. Your bulldog's small nostrils,
                  Find a Pet Adoption FAQ Caring for Pets About Us elongated
                  soft palate, and narrow trachea are the reasons why
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item custom-accod-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fs-4 mt-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#5"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Can I adopt more than one pet?
            </button>
          </h2>
          <div
            id="5"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body fs-4">
              <ul>
                <li>
                  Like all dogs with those adorable smashed-in faces, bulldogs
                  can suffer from breathing problems. Your bulldog's small
                  nostrils, elongated soft palate, and narrow trachea are the
                  reasons why they probably snore, and they can lead to a
                  life-threatening emergency if they get overheated or
                  overtired.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
