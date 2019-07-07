import classnames from "classnames"
import React from "react"
import "./contactform.scss"

class ContactForm extends React.Component {
  state = {
    email: "",
    telephone: "",
    orgnumber: "",
    selectedOption: "",
    formSubmitted: false,
    validEmail: "empty",
    validPhone: "empty",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (
      this.state.validEmail === "valid" &&
      this.state.validPhone === "valid" &&
      this.state.selectedOption !== ""
    ) {
      this.setState({ formSubmitted: true })
    }
  }

  handleEmailBlur = () => {
    if (this.state.email === "") {
      this.setState({
        validEmail: "empty",
      })
      return
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.setState({
      validEmail: re.test(this.state.email) ? "valid" : "unvalid",
    })
  }

  handlePhoneBlur = () => {
    const re = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
    if (this.state.telephone === "") {
      this.setState({
        validPhone: "empty",
      })
      return
    }

    if (this.state.telephone.match(/[a-z]/i) || re.test(this.state.telephone)) {
      this.setState({
        validPhone: "unvalid",
      })
      return
    }

    this.setState({
      validPhone:
        this.state.telephone.match(/\d/g).length === 8 ? "valid" : "unvalid",
    })
  }

  renderForm() {
    return (
      <div className="contact-form__container">
        <h2>Intressert? Ta kontakt!</h2>
        <p>
          Fyll inn skjemaet så tar vi kontakt med deg for en uforpliktende
          samtale.
        </p>
        <form method="post" data-netlify="true" onSubmit={this.handleSubmit}>
          <label>
            E-post
            <input
              placeholder=""
              className={classnames(
                "contact-form__input",
                { valid: this.state.validEmail === "valid" },
                { unvalid: this.state.validEmail === "unvalid" }
              )}
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              onBlur={this.handleEmailBlur}
            />
          </label>
          {this.state.validEmail === "unvalid" && (
            <p className="contact-form__unvalid-field">
              Eposten er ikke gyldig.
            </p>
          )}
          <label>
            Tlf
            <input
              placeholder=""
              className={classnames(
                "contact-form__input",
                { valid: this.state.validPhone === "valid" },
                { unvalid: this.state.validPhone === "unvalid" }
              )}
              type="text"
              name="telephone"
              value={this.state.telephone}
              onChange={this.handleInputChange}
              onBlur={this.handlePhoneBlur}
            />
          </label>
          {this.state.validPhone === "unvalid" && (
            <p className="contact-form__unvalid-field">
              Nummeret er ikke gyldig. Kun tall er gydlig.
            </p>
          )}

          <p>Representerer du et firma eller er du privatperson?</p>
          <label className="contact-form__radio-container">
            Privatperson:
            <input
              className="contact-form__radio-button"
              type="radio"
              value="person"
              onClick={() => this.setState({ selectedOption: "person" })}
              checked={this.state.selectedOption === "person"}
              onChange={() => {}}
            />
            <span className="contact-form__checkmark"></span>
          </label>
          <label className="contact-form__radio-container">
            Bedrift:
            <input
              className="contact-form__radio-button"
              type="radio"
              value="company"
              onClick={() => this.setState({ selectedOption: "company" })}
              checked={this.state.selectedOption === "company"}
              onChange={() => {}}
            />
            <span className="contact-form__checkmark"></span>
          </label>
          <p></p>
          {this.state.selectedOption === "company" && (
            <label>
              Organiasjonsnummer
              <input
                className="contact-form__input"
                type="text"
                name="orgnumber"
                value={this.state.orgnumber}
                onChange={this.handleInputChange}
              />
            </label>
          )}
          <button type="submit" className="contact-form__button">
            Ta kontakt
          </button>
        </form>
      </div>
    )
  }

  renderSubmissionMessage() {
    return (
      <div className="contact-form__success-container">
        <h3>Takk for din hendvendelse!</h3>
        <p>Vi tar kontakt innen kort tid</p>
      </div>
    )
  }

  render() {
    return this.state.formSubmitted
      ? this.renderSubmissionMessage()
      : this.renderForm()
  }
}

export default ContactForm
