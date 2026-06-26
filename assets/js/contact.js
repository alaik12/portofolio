/* ==========================================================
   PORTFOLIO WEBSITE
   File : contact.js
   Desc : Contact Form & EmailJS
========================================================== */

function initContact() {

    emailjs.init("JXBS93QNNjQZgNlUn");

    const form = document.getElementById("contactForm");

    if (!form) return;

    const btnText = document.getElementById("btnText");
    const btnIcon = document.getElementById("btnIcon");
    const btnLoader = document.getElementById("btnLoader");
    const toast = document.getElementById("toast");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        setLoading(true);

        emailjs.sendForm(
            "service_funbjlo",
            "template_17aj4ab",
            this
        )

        .then(() => {

            setLoading(false);

            form.reset();

            showToast();

        })

        .catch((error) => {

            setLoading(false);

            console.error(error);

            alert("Maaf, pesan gagal dikirim.");

        });

    });



    /* ==========================================
       Loading Button
    ========================================== */

    function setLoading(status) {

        if (status) {

            btnText.textContent = "Mengirim...";

            btnIcon.classList.add("hidden");

            btnLoader.classList.remove("hidden");

        }

        else {

            btnText.textContent = "Kirim Pesan";

            btnIcon.classList.remove("hidden");

            btnLoader.classList.add("hidden");

        }

    }



    /* ==========================================
       Toast Notification
    ========================================== */

    function showToast() {

        toast.classList.add("show");

        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

    }

}