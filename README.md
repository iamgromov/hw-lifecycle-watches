[![Build status](https://ci.appveyor.com/api/projects/status/nul7hj8si8fe9ala?svg=true)](https://ci.appveyor.com/project/iamgromov/hw-lifecycle-watches)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-GO-green.svg)](https://iamgromov.github.io/hw-lifecycle-watches)

# React + Vite Homework

Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:
* New York,
* Moscow,
* London,
* Tokyo.

![Watches](https://github.com/netology-code/ra16-homeworks/raw/ra-51/lifecycle-http/watches/assets/watches.png)

Общая механика:

1. Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
2. Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
3. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки — `setTimeout`, `setInterval` и другие — должны вычищаться в соответствующем методе жизненного цикла.

Упрощения: если вам сложно реализовать механику со стрелками через css — см. `transform` и `rotate()`, то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС.

Подсказки:
1. Посмотреть текущий TimezoneOffset вы можете, используя объект `Date`.
1. Можете использовать библиотеку Moment.js.