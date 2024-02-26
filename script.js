function clearScreen() {
    document.getElementById("result").value = ""; 
    }

    function display(value){
        document.getElementById("result").value += value;
    }

    function giveAns(){
        let a = document.getElementById("result").value;
        let b = eval(a);
        document.getElementById("result").value = b;
    }

    
    function del(){
        document.form.answer.value = document.form.answer.value.substr(0,form.answer.value.length-1) 
    }
    