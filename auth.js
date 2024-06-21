 const btnAcceder = document.getElementById('btnAcceder');

    btnAcceder.addEventListener('click', async () => {
        console.log('Estoy logeados');

        try{
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);

            window.location.href = ""
        }catch(error){
            console.log(error)
        }
    })