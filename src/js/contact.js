function validateContactForm() {
    const nameInput = document.getElementById("contact__form--name").value;
    const emailInput = document.getElementById("contact__form--email").value;
    const messageInput = document.getElementById("contact__form--textarea").value;
    
    if(!nameInput || !emailInput || !messageInput) {
        alert("Please fill in all fields");
        return;
    }
    document.getElementById("result").innerHTML = `Contact successfuly!`
}



// var, let khai báo biến, var là global(có nghĩa là sử dụng bất kì nơi đâu) còn let là sử dụng trong môi trường khai báo
// Const khai báo biến nhưng không thay đổi giá trị của biến trong tương lai.

