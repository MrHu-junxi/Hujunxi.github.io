
// 节流
function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function () {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// 隐藏
function shotPop() {
    const popShot = document.querySelector('.icon-shot')
    popShot.addEventListener('click', e => {
        const pop = document.querySelector('.pop-up')
        pop.style.animation = 'show-pop-down 0.5s ease-in-out'
        pop.style.transform = 'translate(-50%, -50%) scale(0)'
    })
}

throttle(shotPop(), 500);

// 显示
function popUp() {
    const btnWeiXin = document.querySelector('.home-sci .btn-weixin')
    btnWeiXin.addEventListener('click', e => {
        const pop = document.querySelector('.pop-up')
        pop.style.animation = 'show-pop-up 0.5s ease-in-out'
        pop.style.transform = 'translate(-50%, -50%) scale(1)'
    })
}

throttle(popUp(), 500);

window.addEventListener('load', e => {
    document.querySelector('.load').style.display = 'none'
})

function showMenu() {
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    let slider = document.querySelector(".slider");
    next.addEventListener("click", throttle(function () {
        // 获取所有幻灯片 
        let box = document.querySelectorAll(".box");
        //   将第一个幻灯片移到列表的最后 
        slider.appendChild(box[0]);
    }, 500));
    prev.addEventListener("click", throttle(function () {
        let box = document.querySelectorAll(".box");
        // 将第一个幻灯片移到列表的最前 
        slider.prepend(box[box.length - 1]);
    }, 500));
}

showMenu();






