'use strict';

const BasePage = require("./BasePage");

class ContactPage extends BasePage{
	constructor (){
		super();

        this.GeneralTitle = element(by.css(".et_pb_module_header"));

        this.ContactForm = element(by.css(".fscf-div-form"));

        this.FormLabels = {
                FirstName: this.ContactForm.element(by.css('#fscf_label1_4 label')),
                LastName: this.ContactForm.element(by.css('#fscf_label1_5 label')),
                Email: this.ContactForm.element(by.css('#fscf_div_field1_1 label')),
                Phone: this.ContactForm.element(by.css('#fscf_label1_8 label')),
                JobTitle: this.ContactForm.element(by.css('#fscf_label1_6 label')),
                Description: this.ContactForm.element(by.css('#fscf_label1_7 label'))

        }
        this.FormErrors = {
                General: this.ContactForm.element(by.css('#fscf_form_error1')),
                FirstName: this.ContactForm.element(by.css('#fscf_div_field1_4 .fscf-div-error')),
                LastName: this.ContactForm.element(by.css('#fscf_div_field1_5 .fscf-div-error')),
                Email: this.ContactForm.element(by.css('#fscf_div_field1_1 .fscf-div-error')),
                JobTitle: this.ContactForm.element(by.css('#fscf_div_field1_6 .fscf-div-error')),
                Description: this.ContactForm.element(by.css('#fscf_div_field1_7 .fscf-div-error'))
        }
        this.FormElements = {
                FirstName: this.ContactForm.element(by.css('#fscf_div_field1_4 .fscf-input-text')),
                LastName: this.ContactForm.element(by.css('#fscf_div_field1_5 .fscf-input-text')),
                Email: this.ContactForm.element(by.css('#fscf_div_field1_1 .fscf-input-text')),
                JobTitle: this.ContactForm.element(by.css('#fscf_div_field1_6 .fscf-input-text')),
                Description: this.ContactForm.element(by.css('#fscf_div_field1_7 .fscf-input-textarea')),
                Button: this.ContactForm.element(by.css('#fscf_submit1')),
                Captcha: this.ContactForm.element(by.css('#fscf_recaptcha1 iframe'))
        }
	};
}

module.exports = ContactPage;