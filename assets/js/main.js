//import
import app from './Firebase/app.js';
import { subscribeToHellfireClub } from './Firebase/hellfireclub.js';

// Form values
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');

//btn value to click and subscribe
const btnSubscribe = document.getElementById('btnSubscribe');

//add click event
btnSubscribe.addEventListener('click', async () => {
    const subscrition = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    };

    // Save to database
    const subscruptionId = await subscribeToHellfireClub(subscrition);
    alert('Inscrito com sucesso!');

    //empty the form
    txtName = '';
    txtEmail = '';
    txtLevel = '';
    txtCharacter = '';
});

