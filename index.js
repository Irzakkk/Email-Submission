  const scriptURL = 'https://script.google.com/macros/s/AKfycbwk9eThFLyT-FmIXtCzBW_BKrpu4zHSUPJnv1W30NFhwj9T5nbiTJGIxbOwA1kor3_xbQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg= document.querySelector(".msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Thankyou for subscribing!";
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset();
      }
      )

      .catch(error => console.error('Error!', error.message))
  })
