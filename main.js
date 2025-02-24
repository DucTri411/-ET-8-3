// Thay đổi nội dung búc thư ở đây
var letterContent =" Chúc mừng 8/3 cô gái của anh! 🌸 Vậy là đã 4 năm từ ngày em nhận lời anh trên chiếc xe đạp năm ấy. Cảm ơn em đã luôn ở bên, cùng anh trải qua bao vui buồn và giúp anh trở thành một người tốt hơn. Mong rằng không chỉ năm thứ 5 mà còn rất nhiều năm sau nữa, chúng ta vẫn luôn hạnh phúc như bây giờ. Yêu em thật nhiều! ❤️❤️❤️"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})