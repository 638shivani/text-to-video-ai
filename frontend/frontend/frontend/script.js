async function generateVideo(){

  let prompt = document.getElementById("prompt").value;

  const response = await fetch("https://unreferenced-unpathetically-jackqueline.ngrok-free.dev/generate",{

    method:"POST",

    headers:{
      "Content-Type":"application/json"
    },

    body:JSON.stringify({
      prompt:prompt
    })

  });

  const data = await response.json();

  document.getElementById("videoPlayer").src = data.video_url;
}
