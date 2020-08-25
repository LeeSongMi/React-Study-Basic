const sendmail = () => {
    emailjs.init('user_MoH5VIvX0E93sWYwpUAdg');
    emailjs.send('gmail', 'template_ahN06sDM', templateParams)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


function sendEmail() {
    var templateParams = {
        name:'이송미',
        url: 'https://www.naver.com'
      };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
  const onChangeName = (e) => {
    setName(e.target.value);
    templateParams.name = e.target.value;
  }
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    templateParams.url=e.target.value;
  }
  return (
    <div>
      <h1>Hello</h1>
      <Food />
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden"name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name"  value={name} onChange={onChangeName} />
        <label>Email</label>
        <input type="email" name="user_email" value={email} onChange={onChangeEmail} />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send"/>
      </form></div>
    )
}
  
// url
// function sendEmail(e) {
//   e.preventDefault();
//   emailjs.init('user_MoH5VIvX0E93sWYwpUAdg');
//   emailjs.send('gmail', 'template_ahN06sDM', templateParams)
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// }

export default sendEmail;