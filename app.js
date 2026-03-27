

function submitForm() {
  let message = document.getElementById("message").value.toLowerCase();
  let responseText = "";

  if (message.includes("fever") || message.includes("pain")) {
    responseText = "We recommend consulting a doctor immediately.";
  } else if (message.includes("help") || message.includes("support")) {
    responseText = "Our team will contact you shortly.";
  } else {
    responseText = "Thank you! Your request has been submitted.";
  }

  document.getElementById("response").innerText = responseText;
}



function chatbot() {
  let input = document.getElementById("chatInput").value.toLowerCase();
  let reply = "";



  if (input.includes("fever") || input.includes("temperature") || input.includes("cold")) {
    reply = "You may have a fever. Stay hydrated and consult a doctor if needed.";
  } 
  else if (input.includes("pain") || input.includes("headache")) {
    reply = "Take rest and consider medical advice if pain continues.";
  } 
  else if (input.includes("ngo") || input.includes("about")) {
    reply = "We are a healthcare support NGO helping patients and volunteers connect.";
  } 
  else if (input.includes("help") || input.includes("support")) {
    reply = "Please fill the form above. Our team will contact you.";
  } 
  else if (input.includes("volunteer")) {
    reply = "You can register as a volunteer using the form.";
  } 
  else {
    reply = "Sorry, I couldn't understand. Try words like fever, help, volunteer.";
  }

  document.getElementById("chatResponse").innerText = reply;
}

