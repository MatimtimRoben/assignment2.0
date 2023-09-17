var numberOfAnimelButtons = document.querySelectorAll(".anime").length;

for (var i = 0; i <numberOfAnimelButtons; i++) {
    
    document.querySelectorAll(".anime")[i].addEventListener("click", function() {
        

        var buttons = this.innerText;
        buttonAnimation(buttons)
        playSound(buttons)
    });
}
    document.addEventListener("keydown",function(e){
        buttonAnimation(e.key)
        playSound(e.key)
    })


        function playSound(key) {
        switch (key) {
            case "l":
                var luffy = new Audio ("luffy.mp3")
                luffy.play();
                break;
            case "n":
                var naruto = new Audio ("naruto.mp3")
                naruto.play();
                break;
            case "i":
                var ichigo = new Audio ("ichigo.mp3")
                ichigo.play();
                break;
            case "g":
                var goku = new Audio ("goku.mp3")
                goku.play();
                break;
            case "t":
                var tanjiro = new Audio ("tanjiro.mp3")
                tanjiro.play();
                break;
            case "a":
                var asta = new Audio ("asta.mp3")
                asta.play();
                break;
            default: console.log(key);
                break;
        }

    }

    // function buttonAnimation(currentKey) {
    //     var activeButton = document.querySelector("." + currentKey);
    //     console.log(activeButton);

    //     activeButton.classList.add("pressed");

    //     setTimeout(function() {
    //         activeButton.classList.remove("pressed");
    //     }, 5000);
    //    }

    function buttonAnimation(currentKey) {
        var activeButton = document.querySelector("." + currentKey);
        console.log(activeButton);
    
        if (currentKey === "l") {
            activeButton.classList.add("pressed1");
            setTimeout(function() {
                activeButton.classList.remove("pressed1");
            }, 5000);

        } else if (currentKey === "n") {
            activeButton.classList.add("pressed2");
            setTimeout(function() {
                activeButton.classList.remove("pressed2");
            }, 9000);

        } else if (currentKey === "i") {
            activeButton.classList.add("pressed3");
            setTimeout(function() {
                activeButton.classList.remove("pressed3");
            }, 5000);

        } else if (currentKey === "g") {
            activeButton.classList.add("pressed4");
            setTimeout(function() {
                activeButton.classList.remove("pressed4");
            }, 7000);

        } else if (currentKey === "t") {
            activeButton.classList.add("pressed5");
            setTimeout(function() {
                activeButton.classList.remove("pressed5");
            }, 5000);

        } else if (currentKey === "a") {
            activeButton.classList.add("pressed6");
            setTimeout(function() {
                activeButton.classList.remove("pressed6");
            }, 2000);

        }

    }