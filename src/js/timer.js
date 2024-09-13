import $ from 'jquery';

// Функція для конвертації мілісекунд в дні, години, хвилини та секунди
function convertMs(ms) {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  console.log('Converted Time:', { days, hours, minutes, seconds }); 
  return { days, hours, minutes, seconds };
}

function flipNumber(el, newnumber) {
  console.log('Flipping Number:', newnumber);

  // Видалити старі елементи
  el.find(".top.new, .bottom.new").remove();

  var top = el.find(".top");
  var bottom = el.find(".bottom");

  // Створити нові елементи
  var newTop = top.clone().addClass("new");
  var newBottom = bottom.clone().addClass("new");

  // Встановити нове число
  newBottom.find(".text").text(newnumber);

  // Додати нові елементи до DOM
  el.append(newTop);
  newTop.append(newBottom);

  // Запустити анімацію
  el.addClass("flipping");

  // Оновити старі елементи після затримки
  setTimeout(function() {
    top.find(".text").text(newnumber);
    el.removeClass("flipping"); // Видалити клас flipping після анімації
  }, 500);
}

function updateClockFace(time) {
  // Оновлюємо числа
  flipNumber($(".clock .flipper:nth-child(1)"), time.days.toString().padStart(3, '0'));
  flipNumber($(".clock .flipper:nth-child(2)"), time.hours.toString().padStart(2, '0'));
  flipNumber($(".clock .flipper:nth-child(3)"), time.minutes.toString().padStart(2, '0'));
  flipNumber($(".clock .flipper:nth-child(4)"), time.seconds.toString().padStart(2, '0'));
}

const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) return;

    this.isActive = true;
    this.intervalId = setInterval(() => {
      const targetDate = new Date("2024-10-01T00:00:00");
      const currentDate = new Date();
      const deltaTime = targetDate - currentDate;
      console.log('Delta Time:', deltaTime); 

      if (deltaTime <= 0) {
        clearInterval(this.intervalId);
        this.isActive = false;
        updateClockFace({ days: '000', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const time = convertMs(deltaTime);
      updateClockFace(time);
      console.log(time);
    }, 1000);
  }
};

$(document).ready(function () {
  function flipNumber(el, newnumber) {
    var thistop = el.find(".top").clone();
    var thisbottom = el.find(".bottom").clone();
    thistop.addClass("new");
    thisbottom.addClass("new");
    thisbottom.find(".text").text(newnumber);
    el.find(".top").after(thistop);
    el.find(".top.new").append(thisbottom);
    el.addClass("flipping");
    el.find(".top:not(.new)").find(".text").text(newnumber);
    setTimeout(function () {
      el.find(".bottom:not(.new)").find(".text").text(newnumber);
    }, 500);
  }

  function setTime() {
    $(".flipper").removeClass("flipping");
    $(".flipper .new").remove();
    var date = new Date();
    var seconds = date.getSeconds().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    var hour = date.getHours();
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour == 0) {
      hour = 12;
    }
    hour = hour.toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');

    if ($(myhour[0]).text() !== hour) {
      flipNumber($(myhour[0]).closest(".flipper"), hour);
    }
    if ($(myminute[0]).text() !== minutes) {
      flipNumber($(myminute[0]).closest(".flipper"), minutes);
    }
    if ($(mysecond[0]).text() !== seconds) {
      flipNumber($(mysecond[0]).closest(".flipper"), seconds);
    }
    if ($(myday[0]).text() !== day) {
      flipNumber($(myday[0]).closest(".flipper"), day);
    }

    setTimeout(function () {
      setTime();
    }, 500);
  }

  const myday = $(".clock .flipper:nth-child(1) div:not(.new) .text"); // Додай це для днів
  const myhour = $(".clock .flipper:nth-child(2) div:not(.new) .text");
  const myminute = $(".clock .flipper:nth-child(3) div:not(.new) .text");
  const mysecond = $(".clock .flipper:nth-child(4) div:not(.new) .text");

  setTime();
});
