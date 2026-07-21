// Kuingia kwenye Chat Screen
function login() {
    const phone = document.getElementById('phone-input').value;
    if(phone.trim() === '') {
        alert('Tafadhali ingiza namba ya simu!');
        return;
    }
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('chat-screen').classList.add('active');
}

// Kutuma Ujumbe
function sendMessage() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();
    
    if(text !== '') {
        const chatBody = document.getElementById('chat-body');
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message sent';
        
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        msgDiv.innerHTML = `<span>${text}</span><small>${time}</small>`;
        
        chatBody.appendChild(msgDiv);
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Fanya kazi ya kubadilisha DP (Profile Picture)
function openProfileSettings() {
    document.getElementById('dp-file-input').click();
}

function updateDP(event) {
    const file = event.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('user-dp').src = e.target.result;
            document.getElementById('login-dp').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Fanya kazi ya kubadilisha Background ya Chat
function triggerBgChange() {
    document.getElementById('bg-file-input').click();
}

function updateBackground(event) {
    const file = event.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('chat-body').style.backgroundImage = `linear-gradient(rgba(11, 20, 26, 0.85), rgba(11, 20, 26, 0.85)), url('${e.target.result}')`;
        }
        reader.readAsDataURL(file);
    }
}
