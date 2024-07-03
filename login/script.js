
const log = document.querySelector('.log')
let button = log.querySelector('button')
// saat btn signUp di click 

const signUp = document.querySelector('.amount')
const row = document.querySelector('.containerForm .log')




let amount = 0;
signUp.addEventListener('click', function () {

    // menambahkan class animation pada div conten
    const noteLog = document.querySelector('.noteLog')
    let btn = noteLog.querySelector('button');
    let welcom = noteLog.querySelector('.L');
    let create = noteLog.querySelector('.C');
    if (amount === 0) {
        noteLog.setAttribute('style', 'right : 0%;')
        noteLog.style.animation = `signUp 1.2s forwards cubic-bezier(0.470, 0.000, 0.745, 0.715)`;
        log.style.animation = `signIn 1s forwards`;
        btn.style.animation = `btnWidth 1s forwards cubic-bezier(0.470, 0.000, 0.745, 0.715)`
        welcom.style.animation = `coba 2.5s 0.1s forwards`



        setTimeout(() => {
            // row.innerHTML = formCreate()
            row.innerHTML = formCreate()
            btn.innerHTML = `Sign In`
            button = log.querySelector('button')
            const inpt = log.querySelectorAll('input');
            button.onclick = () => {
                let email, pass, user;
                inpt.forEach((e, i) => {
                    switch (i) {
                        case 0:
                            user = e.value;
                            break
                        case 1:
                            email = e.value;
                        case 2:
                            pass = e.value
                    }
                })
                if (email === '' && user === '' && pass === '') {
                    alert('mohon masukan yang lengkap')
                } else {

                    let a = {
                        user: user,
                        email: email,
                        pass: pass
                    }

                    dataForm.akun.push(a);
                    inpt.forEach(e => e.value = '')
                }

            }
        }, 500)




        setTimeout(() => {
            btn.style.animation = ``;
        }, 1200);
        // bagian Create
        create.style.animation = ` C 1.4s forwards`

        // akhir create 

        amount++

    } else {

        log.style.animation = `signInRev 1s forwards`;
        noteLog.setAttribute('style', 'left : 0%;')
        noteLog.style.animation = `signUpRev 1.2s forwards cubic-bezier(0.470, 0.000, 0.745, 0.715)`;
        welcom.style.animation = `cobaRev 1.4s forwards`
        create.style.animation = ` Crev 2.5s 0.1s forwards`
        btn.style.animation = `btnWidth 1s forwards cubic-bezier(0.470, 0.000, 0.745, 0.715)`
        setTimeout(() => {
            btn.style.animation = ``;
        }, 1200);
        setTimeout(() => {
            row.innerHTML = formLogin()
            btn.innerHTML = `Sign Up`
            button = log.querySelector('button')
            const inpt = log.querySelectorAll('input');
            button.onclick = () => {
                let user, pass;
                inpt.forEach((e, i) => {
                    switch (i) {
                        case 0:
                            user = e.value;
                            break
                        case 1:
                            pass = e.value;
                    }
                })
                if (user === '' && pass === ''){
                    alert('semua nya di isiiii ANJENGGGGGG')
                }else {
                    let answ = dataForm.akun.filter((e, i) => {
                        return e.user === user && e.pass === pass
                    })
    
                    if(answ.length === 1){
                        window.location.href = "../index.html";
                    }else {
                        alert('Masukan Yang Benar GOBLOKKKKKK / cek id dan pass LAGIII')
                    }
                }
            }
        }, 500)
        amount = 0;
    }

});



button.onclick = () => {

    let email, pass;
    inpt.forEach((e, i) => {
        switch (i) {
            case 0:
                email = e.value;
                break
            case 1:
                pass = e.value;
        }
    })
}




function formCreate() {
    return `
    <h1 class="fs-3 mb-4 fw-bold">Create Account</h1>
    <span class=" IconS  fs-5 mx-2"><i class="bi bi-google"></i></span>
    <span class=" IconS  fs-5 mx-2 mb-5"><i class="bi bi-facebook"></i></span>
    <span class=" IconS  fs-5 mx-2"><i class="bi bi-linkedin"></i></span>
    
    <p class="mt-2 mb-3" style="font-size: 0.8rem; font-family: 'Poppins', sans-serif;">
    isi form dibawah untuk membuat akun / gunakan google
    </p>
    
    <div class="input-group formLog m-auto mb-1">
    <span class="input-group-text bg-white text-black position-absolute emailL fs-5"
    id="addon-wrapping"><i class="bi bi-person-fill"></i></span>
    <input type="text" class="form-control login" placeholder="Username" aria-label="Username"
    aria-describedby="addon-wrapping">
    </div>
    
    <div class="input-group formLog m-auto">
    <span class="input-group-text bg-white text-black position-absolute emailL fs-5"
    id="addon-wrapping"><i class="bi bi-google"></i></span>
    <input type="text" class="form-control login" placeholder="Email" aria-label="Username"
    aria-describedby="addon-wrapping">
    </div>
    <div class="input-group formLog m-auto">
        <span class="input-group-text bg-white text-black position-absolute emailL fs-5"
        id="addon-wrapping"><i class="bi bi-lock"></i></span>
        <input type="text" class="form-control login" placeholder="Password" aria-label="Username"
        aria-describedby="addon-wrapping">
        </div>
        
        
        
        <button type="button" class="btn btn-success d-block rounded-pill btnCreate"
        style="font-family: 'Poppins', sans-serif;">Sign Up
        </button>
        
        `
}

function formLogin() {
    return `
        <h1 class="fs-3 mb-4">SIGN IN</h1>
        <span class=" IconS  fs-5 mx-2"><i class="bi bi-google"></i></span>
        <span class=" IconS  fs-5 mx-2 mb-4"><i class="bi bi-facebook"></i></span>
        <span class=" IconS  fs-5 mx-2"><i class="bi bi-linkedin"></i></span>
        
        <p class="mt-2 mb-4" style="font-size: 0.8rem; font-family: 'Poppins', sans-serif;">Use Your Taufan
        Movies Account </p>
        
        <div class="input-group formLog m-auto mb-1">
        <span class="input-group-text bg-white text-black position-absolute emailL fs-5"
        id="addon-wrapping"><i class="bi bi-person-fill"></i></span>
        <input type="text" class="form-control login" placeholder="Username" aria-label="Username"
        aria-describedby="addon-wrapping">
        </div>
        
        <div class="input-group formLog m-auto">
        <span class="input-group-text bg-white text-black position-absolute emailL fs-5"
        id="addon-wrapping"><i class="bi bi-lock"></i></span>
        <input type="text" class="form-control login" placeholder="Username" aria-label="Username"
        aria-describedby="addon-wrapping">
        </div>
        
        <a href="" class="mt-5 forget position-relative" style="font-size: 0.8rem;"> Lupa Kata Sandi </a>
        <button type="button" class="btn btn-success d-block rounded-pill btnLogin"
        style="font-family: 'Poppins', sans-serif;">Sign in
        </button>
        
        `

}

const dataForm = {
    akun: []
}



