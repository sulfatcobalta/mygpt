

let a = 0;
let b = 1;
let c = 0;
let title = document.getElementById('id');
let body = document.getElementById('body');







async function send(){
    const askk = document.getElementById('text-field').value;
    console.log(askk)

    let div2 = document.createElement('div');
    div2.className = "message-container"
    

    let div3 = document.createElement('div');
    div3.className = "messages-box-to"
    div2.appendChild(div3);
    
    let p = document.createElement('p');
    p.className = "messages-text"
    p.innerHTML = askk
    div3.appendChild(p);
    document.getElementById('text-field').value = ''
    document.getElementById('dialogBox').appendChild(div2);
    var scrollDiv = document.getElementById("dialogBox");
    scrollDiv.scrollTo(0, scrollDiv.scrollHeight);
    

    fetch("https://flaskapp-uw5m.onrender.com/competion", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Указываем тип контента
      },
      body: JSON.stringify({
        question: askk
      })
      })
        .then((response) => response.json())
        .then((data) => {
          const message = data;
          console.log(message)
          let div2 = document.createElement('div');
          div2.className = "message-container"
    

          let div3 = document.createElement('div');
          div3.className = "messages-box"
          div2.appendChild(div3);
    
          let p = document.createElement('p');
          p.className = "messages-text"
          p.innerHTML = message['anwswer']
          div3.appendChild(p);


          document.getElementById('dialogBox').appendChild(div2);
          var scrollDiv = document.getElementById("dialogBox");
          scrollDiv.scrollTo(0, scrollDiv.scrollHeight);
        
        });

      







    
    

    



}




