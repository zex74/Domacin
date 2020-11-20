function sendEmail(message) {
	Email.send({
	Host: conf.host,
	Username : conf.username,
	Password : conf.password,
	To : conf.to,
	From : conf.username,
	Subject : conf.subject,
	Body : message,
	}).then(
		message => alert('Uspesno poslata poruka')
    ).catch(
        e => console.log('error', e)

    )
}

$('form').submit(function (event) {
    event.preventDefault();
    console.log(event)
    const mail = {
        name: this.name.value,
        city: this.city.value,
        email: this.email.value,
        phone: this.phone.value,
        message: this.message.value,
    }
    const body = `
    <p>ime i prezime: ${mail.name}</p>
    <p>grad: ${mail.city}</p>
    <p>email: ${mail.email}</p>
    <p>telefon: ${mail.phone}</p>
    <hr>
    <p>poruka: ${mail.message}</p>
    `
    console.log(mail)
    sendEmail(body)
})