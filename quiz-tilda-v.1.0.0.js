$(document).ready(function () {
        
        /************ Поиск элементов ************/
        var quizStepsAll = document.querySelectorAll('#rec586461116, #rec586608418, #rec586629993, #rec586637670, #rec586670698, #rec587378258');
        let quizStep = [];
        for (let i = 0; i < quizStepsAll.length; i++) {
            quizStep[i] = document.querySelector('#'+quizStepsAll[i].id+'');
        }
            
        var quizResultAllBlock = document.querySelectorAll('#rec587391265, #rec587574446'), // Поиск ID блока с заголовком и кнопками в Результатах
            quizResultAllProducts = document.querySelectorAll('#rec592966860, #rec587574277, #rec587577919, #rec587578309, #rec587579383, #rec587579512, #rec587589525, #rec587590227, #rec587591413, #rec587591304, #rec587594349, #rec587596040, #rec587597011, #rec587596849, #rec587599453, #rec587600140, #rec593602081, #rec593603679, #rec593605711, #rec600338829, #rec600339430');
            
            let quizResultProduct = [];
            for (let i = 0; i < quizResultAllProducts.length; i++) {
                quizResultProduct[i] = document.querySelector('#'+quizResultAllProducts[i].id+'');
            }
            
        var btnStep1All = document.querySelectorAll('a[href="#step1-1"], a[href="#step1-2"], a[href="#step1-3"], a[href="#step1-4"]'), // Поиск всех вариантов на шаге №1
            btnStep1_01 = document.querySelectorAll('a[href="#step1-1"]'), // Поиск первого варианта на шаге №1
            btnStep1_02 = document.querySelectorAll('a[href="#step1-2"]'), // Поиск второго варианта на шаге №1
            btnStep1_03 = document.querySelectorAll('a[href="#step1-3"]'), // Поиск третьего варианта на шаге №1
            btnStep1_04 = document.querySelectorAll('a[href="#step1-4"]'), // Поиск четвертого варианта на шаге №1
            
            btnNavNext01 = document.querySelector('a[href="#step1-next"]'),  // Поиск кнопки вперед на шаге №1
            btnNavNext02 = document.querySelector('a[href="#step2-next"]'),  // Поиск кнопки вперед на шаге №2
            btnNavNext03 = document.querySelector('a[href="#step3-next"]'),  // Поиск кнопки вперед на шаге №3
            btnNavNext04 = document.querySelector('a[href="#step4-next"]'),  // Поиск кнопки вперед на шаге №4
            btnNavNext05 = document.querySelector('a[href="#step5-next"]'),  // Поиск кнопки вперед на шаге №5
            btnNavNext06 = document.querySelector('a[href="#step6-next"]'),  // Поиск кнопки вперед на шаге №6
            
            btnStep2All = document.querySelectorAll('a[href="#step2-1"], a[href="#step2-2"], a[href="#step2-3"]'), // Поиск всех вариантов на шаге №2
            btnStep2_01 = document.querySelectorAll('a[href="#step2-1"]'), // Поиск первого варианта на шаге №2
            btnStep2_02 = document.querySelectorAll('a[href="#step2-2"]'), // Поиск второго варианта на шаге №2
            btnStep2_03 = document.querySelectorAll('a[href="#step2-3"]'); // Поиск третьего варианта на шаге №2
            
            btnStep3All = document.querySelectorAll('a[href="#step3-1"], a[href="#step3-2"], a[href="#step3-3"]'), // Поиск всех вариантов на шаге №3
            btnStep3_01 = document.querySelectorAll('a[href="#step3-1"]'), // Поиск первого варианта на шаге №3
            btnStep3_02 = document.querySelectorAll('a[href="#step3-2"]'), // Поиск второго варианта на шаге №3
            btnStep3_03 = document.querySelectorAll('a[href="#step3-3"]'); // Поиск третьего варианта на шаге №3
            
            btnStep4All = document.querySelectorAll('a[href="#step4-1"], a[href="#step4-2"], a[href="#step4-3"], a[href="#step4-4"], a[href="#step4-5"], a[href="#step4-6"]'), // Поиск всех вариантов на шаге №4
            btnStep4_01 = document.querySelectorAll('a[href="#step4-1"]'), // Поиск первого варианта на шаге №4
            btnStep4_02 = document.querySelectorAll('a[href="#step4-2"]'), // Поиск второго варианта на шаге №4
            btnStep4_03 = document.querySelectorAll('a[href="#step4-3"]'), // Поиск третьего варианта на шаге №4
            btnStep4_04 = document.querySelectorAll('a[href="#step4-4"]'), // Поиск четвертого варианта на шаге №4
            btnStep4_05 = document.querySelectorAll('a[href="#step4-5"]'), // Поиск пятого варианта на шаге №4
            btnStep4_06 = document.querySelectorAll('a[href="#step4-6"]'), // Поиск шестого варианта на шаге №4
            
            btnStep5All = document.querySelectorAll('a[href="#step5-1"], a[href="#step5-2"], a[href="#step5-3"], a[href="#step5-4"], a[href="#step5-5"], a[href="#step5-6"], a[href="#step5-7"]'), // Поиск всех вариантов на шаге №5
            btnStep5_01 = document.querySelectorAll('a[href="#step5-1"]'), // Поиск первого варианта на шаге №5
            btnStep5_02 = document.querySelectorAll('a[href="#step5-2"]'), // Поиск второго варианта на шаге №5
            btnStep5_03 = document.querySelectorAll('a[href="#step5-3"]'), // Поиск третьего варианта на шаге №5
            btnStep5_04 = document.querySelectorAll('a[href="#step5-4"]'), // Поиск четвертого варианта на шаге №5
            btnStep5_05 = document.querySelectorAll('a[href="#step5-5"]'), // Поиск пятого варианта на шаге №5
            btnStep5_06 = document.querySelectorAll('a[href="#step5-6"]'), // Поиск шестого варианта на шаге №5
            btnStep5_07 = document.querySelectorAll('a[href="#step5-7"]'), // Поиск седьмого варианта на шаге №5
            
            btnRestart = document.querySelector('a[href="#quiz_restart"]'), // Поиск кнопки Рестарт
            btnBuyAll = document.querySelector('a[href="#quiz_buy_all"]'); // Поиск кнопки Добавить все товары
        
        /********* Общие действия для всех шагов ************/
        quizStepsAll.forEach(function(quizStep_item){ // Массив всех шагов квиза
            quizStep_item.classList.add('stepHiden'); // Скрытие всех шагов при запуске
        });
        quizStep[0].classList.remove('stepHiden'); // Показ первого шага при запуске
        quizStep[0].classList.add('stepVisible'); // Показ первого шага при запуске
        quizResultAllBlock.forEach(function(quizResultAllBlock_item){ // Массив всех шагов квиза
            quizResultAllBlock_item.classList.add('stepHiden'); // Скрытие всех шагов при запуске
        });
        quizResultAllProducts.forEach(function(quizResultAllProducts_item){ // Массив всех шагов квиза
            quizResultAllProducts_item.classList.add('stepHiden'); // Скрытие всех шагов при запуске
        });
        
        /********* Действия квиза на шаге №1 ************/
        btnStep1_01.forEach(function(btnStep1_01_item){
            btnStep1_01_item.setAttribute('data-value', 'straight'); // Добавление доп.атрибута к первому варианту на шаге №1
        });
        btnStep1_02.forEach(function(btnStep1_02_item){
            btnStep1_02_item.setAttribute('data-value', 'wavy'); // Добавление доп.атрибута ко второму варианту на шаге №1
        });
        btnStep1_03.forEach(function(btnStep1_03_item){
            btnStep1_03_item.setAttribute('data-value', 'curly'); // Добавление доп.атрибута к третьему варианту на шаге №1
        });
        btnStep1_04.forEach(function(btnStep1_04_item){
            btnStep1_04_item.setAttribute('data-value', 'coily'); // Добавление доп.атрибута к четвертому варианту на шаге №1
        });
        btnStep1All.forEach(function(btnStep1_item){ // Массив первой кнопки на шаге №1
            btnStep1_item.classList.add('btnStep1'); // Добавление нового класса к кнопкам на шаге №1
            setTimeout(function () { // Таймер 100 мс 
                btnStep1_item.addEventListener('click', function() { // Выбор варианта на шаге №1
                    var btnStep1_ActiveAll = document.querySelectorAll('a.btnStep1.activeBtn'), // Поиск всех активных кнопок на шаге №1
                        btnNav01 = document.querySelector('.btn-nav_next_01');  // Поиск кнопки далее на шаге №1
                    btnStep1_ActiveAll.forEach(function(btnStep1_ActiveItem){ // Массив всех активных кнопок на шаге №1
                        btnStep1_ActiveItem.classList.remove('activeBtn'); // Обнуление всех активных кнопок на шаге №1
                    });
                    btnStep1_item.classList.toggle('activeBtn'); // Выбор активной кнопки после клика на шаге №1
                    btnNav01.classList.add('activeNav'); // Выбор активной кнопки Далее на шаге №1
                    console.log(btnStep1_item.getAttribute('data-value')); // Вывод информации в консоль
                    quizStep[0].classList.add('stepHiden'); // Cкрытие шага №1 после выбора варианта
                    quizStep[0].classList.remove('stepVisible'); // Cкрытие шага №1 выбора варианта
                    quizStep[1].classList.remove('stepHiden'); // Показ шага №2 после выбора варианта
                    quizStep[1].classList.add('stepVisible'); // Показ шага №2 после выбора варианта
                    document.querySelector('#input_step1').value = btnStep1_item.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №1
                });
                btnNavNext01.addEventListener('click', function() { // Клик на кнопку назад на шаге №2
                    quizStep[0].classList.add('stepHiden'); // Cкрытие шага №1 после нажатие на кнопку вперед
                    quizStep[0].classList.remove('stepVisible'); // Cкрытие шага №1 после нажатие на кнопку вперед
                    quizStep[1].classList.remove('stepHiden'); // Показ шага №2 после нажатие на кнопку вперед
                    quizStep[1].classList.add('stepVisible'); // Показ шага №2 после нажатие на кнопку вперед
                });
            }, 100);
        });
        
        /********* Действия квиза на шаге №2 ************/
        btnStep2_01.forEach(function(btnStep2_01_item){
            btnStep2_01_item.setAttribute('data-value', 'fine'); // Добавление доп.атрибута к первому варианту на шаге №2
        });
        btnStep2_02.forEach(function(btnStep2_02_item){
            btnStep2_02_item.setAttribute('data-value', 'medium'); // Добавление доп.атрибута ко второму варианту на шаге №2
        });
        btnStep2_03.forEach(function(btnStep2_03_item){
            btnStep2_03_item.setAttribute('data-value', 'coarse'); // Добавление доп.атрибута к третьему варианту на шаге №2
        });
        var btnNavPrev02 = document.querySelector('a[href="#step2-prev"]');  // Поиск кнопки назад на шаге №2
        btnStep2All.forEach(function(btnStep2_item){ // Массив первой кнопки на шаге №2
            btnStep2_item.classList.add('btnStep2'); // Добавление нового класса к кнопкам на шаге №2
            setTimeout(function () { // Таймер 100 мс 
                btnStep2_item.addEventListener('click', function() { // Выбор варианта на шаге №2
                    var btnStep2_ActiveAll = document.querySelectorAll('a.btnStep2.activeBtn'), // Поиск всех активных кнопок на шаге №2
                        btnNav02 = document.querySelector('.btn-nav_next_02');  // Поиск кнопки далее на шаге №2
                    btnStep2_ActiveAll.forEach(function(btnStep2_ActiveItem){ // Массив всех активных кнопок на шаге №2
                        btnStep2_ActiveItem.classList.remove('activeBtn'); // Обнуление всех активных кнопок на шаге №2
                    });
                    btnStep2_item.classList.toggle('activeBtn'); // Выбор активной кнопки после клика на шаге №2
                    btnNav02.classList.add('activeNav'); // Выбор активной кнопки Далее на шаге №2
                    console.log(btnStep2_item.getAttribute('data-value')); // Вывод информации в консоль
                    quizStep[1].classList.add('stepHiden'); // Cкрытие шага №2 после выбора варианта
                    quizStep[1].classList.remove('stepVisible'); // Cкрытие шага №2 выбора варианта
                    quizStep[2].classList.remove('stepHiden'); // Показ шага №3 после выбора варианта
                    quizStep[2].classList.add('stepVisible'); // Показ шага №3 после выбора варианта
                    document.querySelector('#input_step2').value = btnStep2_item.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №2
                });
                btnNavPrev02.addEventListener('click', function() { // Клик на кнопку назад на шаге №2
                    quizStep[1].classList.add('stepHiden'); // Cкрытие шага №2 после нажатие на кнопку назад
                    quizStep[1].classList.remove('stepVisible'); // Cкрытие шага №2 после нажатие на кнопку назад
                    quizStep[0].classList.remove('stepHiden'); // Показ шага №1 после нажатие на кнопку назад
                    quizStep[0].classList.add('stepVisible'); // Показ шага №1 после нажатие на кнопку назад
                });
                btnNavNext02.addEventListener('click', function() { // Клик на кнопку назад на шаге №2
                    quizStep[1].classList.add('stepHiden'); // Cкрытие шага №2 после нажатие на кнопку назад
                    quizStep[1].classList.remove('stepVisible'); // Cкрытие шага №2 после нажатие на кнопку назад
                    quizStep[2].classList.remove('stepHiden'); // Показ шага №3 после нажатие на кнопку назад
                    quizStep[2].classList.add('stepVisible'); // Показ шага №3 после нажатие на кнопку назад
                });
            }, 100);
        });
        
        /********* Действия квиза на шаге №3 ************/
        btnStep3_01.forEach(function(btnStep3_01_item){
            btnStep3_01_item.setAttribute('data-value', 'dry'); // Добавление доп.атрибута к первому варианту на шаге №3
        });
        btnStep3_02.forEach(function(btnStep3_02_item){
            btnStep3_02_item.setAttribute('data-value', 'balanced'); // Добавление доп.атрибута ко второму варианту на шаге №3
        });
        btnStep3_03.forEach(function(btnStep3_03_item){
            btnStep3_03_item.setAttribute('data-value', 'oily'); // Добавление доп.атрибута к третьему варианту на шаге №3
        });
        var btnNavPrev03 = document.querySelector('a[href="#step3-prev"]');  // Поиск кнопки назад на шаге №3
        btnStep3All.forEach(function(btnStep3_item){ // Массив первой кнопки на шаге №3
            btnStep3_item.classList.add('btnStep3'); // Добавление нового класса к кнопкам на шаге №3
            setTimeout(function () { // Таймер 100 мс 
                btnStep3_item.addEventListener('click', function() { // Выбор варианта на шаге №3
                    var btnStep3_ActiveAll = document.querySelectorAll('a.btnStep3.activeBtn'), // Поиск всех активных кнопок на шаге №3
                        btnNav03 = document.querySelector('.btn-nav_next_03');  // Поиск кнопки далее на шаге №3
                    btnStep3_ActiveAll.forEach(function(btnStep3_ActiveItem){ // Массив всех активных кнопок на шаге №3
                        btnStep3_ActiveItem.classList.remove('activeBtn'); // Обнуление всех активных кнопок на шаге №3
                    });
                    btnStep3_item.classList.toggle('activeBtn'); // Выбор активной кнопки после клика на шаге №3
                    btnNav03.classList.add('activeNav'); // Выбор активной кнопки Далее на шаге №3
                    console.log(btnStep3_item.getAttribute('data-value')); // Вывод информации в консоль
                    quizStep[2].classList.add('stepHiden'); // Cкрытие шага №3 после выбора варианта
                    quizStep[2].classList.remove('stepVisible'); // Cкрытие шага №3 выбора варианта
                    quizStep[3].classList.remove('stepHiden'); // Показ шага №4 после выбора варианта
                    quizStep[3].classList.add('stepVisible'); // Показ шага №4 после выбора варианта
                    document.querySelector('#input_step3').value = btnStep3_item.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №3
                });
                btnNavPrev03.addEventListener('click', function() { // Клик на кнопку назад на шаге №3
                    quizStep[2].classList.add('stepHiden'); // Cкрытие шага №3 после нажатие на кнопку назад
                    quizStep[2].classList.remove('stepVisible'); // Cкрытие шага №3 после нажатие на кнопку назад
                    quizStep[1].classList.remove('stepHiden'); // Показ шага №2 после нажатие на кнопку назад
                    quizStep[1].classList.add('stepVisible'); // Показ шага №2 после нажатие на кнопку назад
                });
                btnNavNext03.addEventListener('click', function() { // Клик на кнопку назад на шаге №3
                    quizStep[2].classList.add('stepHiden'); // Cкрытие шага №3 после нажатие на кнопку назад
                    quizStep[2].classList.remove('stepVisible'); // Cкрытие шага №3 после нажатие на кнопку назад
                    quizStep[3].classList.remove('stepHiden'); // Показ шага №4 после нажатие на кнопку назад
                    quizStep[3].classList.add('stepVisible'); // Показ шага №4 после нажатие на кнопку назад
                });
            }, 100);
        });
        
        /********* Действия квиза на шаге №4 ************/
        btnStep4_01.forEach(function(btnStep4_01_item){
            btnStep4_01_item.setAttribute('data-value', 'volume'); // Добавление доп.атрибута к первому варианту на шаге №4
        });
        btnStep4_02.forEach(function(btnStep4_02_item){
            btnStep4_02_item.setAttribute('data-value', 'hydration'); // Добавление доп.атрибута ко второму варианту на шаге №4
        });
        btnStep4_03.forEach(function(btnStep4_03_item){
            btnStep4_03_item.setAttribute('data-value', 'strengthen'); // Добавление доп.атрибута к третьему варианту на шаге №4
        });
        btnStep4_04.forEach(function(btnStep4_04_item){
            btnStep4_04_item.setAttribute('data-value', 'defined'); // Добавление доп.атрибута к третьему варианту на шаге №4
        });
        btnStep4_05.forEach(function(btnStep4_05_item){
            btnStep4_05_item.setAttribute('data-value', 'frizz'); // Добавление доп.атрибута к третьему варианту на шаге №4
        });
        btnStep4_06.forEach(function(btnStep4_06_item){
            btnStep4_06_item.setAttribute('data-value', 'oil'); // Добавление доп.атрибута к третьему варианту на шаге №4
        });
        var btnNavPrev04 = document.querySelector('a[href="#step4-prev"]');  // Поиск кнопки назад на шаге №4
        var actionClick = 1;
        btnStep4All.forEach(function(btnStep4_item){ // Массив первой кнопки на шаге №4
            btnStep4_item.classList.add('btnStep4'); // Добавление нового класса к кнопкам на шаге №4
            setTimeout(function () { // Таймер 100 мс
                btnStep4_item.addEventListener('click', function() { // Выбор варианта на шаге №4
                    var btnStep4_ActiveAll = document.querySelectorAll('a.btnStep4.activeBtn'), // Поиск всех активных кнопок на шаге №4
                        btnNav04 = document.querySelector('.btn-nav_next_04');  // Поиск кнопки далее на шаге №4
                    console.log('click');
                    if( !btnStep4_item.classList.contains('activeBtn') && btnStep4_ActiveAll.length < 2 ) {
                        this.classList.add('activeBtn');
                        if( actionClick == 1 ) {
                            console.log(actionClick);
                            if( !document.querySelector('#input_step4').value ) {
                                document.querySelector('#input_step4').value = this.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №4
                            } else {
                                document.querySelector('#input_step4_2').value = this.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №4
                            }
                            actionClick = 2;
                        } else {
                            console.log(actionClick);
                            if( !document.querySelector('#input_step4').value ) {
                                document.querySelector('#input_step4').value = this.getAttribute('data-value');
                            } else {
                                document.querySelector('#input_step4_2').value = this.getAttribute('data-value');
                            }
                            actionClick = 1;
                        }
                    } else {
                        console.log('удалить');
                        this.classList.remove('activeBtn');
                        if( document.querySelector('#input_step4').value == this.getAttribute('data-value') ) {
                            document.querySelector('#input_step4').value = "";
                        }
                        if( document.querySelector('#input_step4_2').value == this.getAttribute('data-value') ) {
                            document.querySelector('#input_step4_2').value = "";
                        }
                    }
                    //this.classList.add('activeBtn'); // Выбор активной кнопки после клика на шаге №4
                    btnNav04.classList.add('activeNav');
                });
                btnNavPrev04.addEventListener('click', function() { // Клик на кнопку назад на шаге №4
                    quizStep[3].classList.add('stepHiden'); // Cкрытие шага №4 после нажатие на кнопку назад
                    quizStep[3].classList.remove('stepVisible'); // Cкрытие шага №4 после нажатие на кнопку назад
                    quizStep[2].classList.remove('stepHiden'); // Показ шага №4 после нажатие на кнопку назад
                    quizStep[2].classList.add('stepVisible'); // Показ шага №4 после нажатие на кнопку назад
                });
                btnNavNext04.addEventListener('click', function() { // Клик на кнопку назад на шаге №4
                    quizStep[3].classList.add('stepHiden'); // Cкрытие шага №4 после нажатие на кнопку назад
                    quizStep[3].classList.remove('stepVisible'); // Cкрытие шага №4 после нажатие на кнопку назад
                    quizStep[4].classList.remove('stepHiden'); // Показ шага №5 после нажатие на кнопку назад
                    quizStep[4].classList.add('stepVisible'); // Показ шага №5 после нажатие на кнопку назад
                });
            }, 100);
        });
        
        /********* Действия квиза на шаге №5 ************/
        btnStep5_01.forEach(function(btnStep5_01_item){
            btnStep5_01_item.setAttribute('data-value', 'platinum'); // Добавление доп.атрибута к первому варианту на шаге №5
        });
        btnStep5_02.forEach(function(btnStep5_02_item){
            btnStep5_02_item.setAttribute('data-value', 'blonde'); // Добавление доп.атрибута ко второму варианту на шаге №5
        });
        btnStep5_03.forEach(function(btnStep5_03_item){
            btnStep5_03_item.setAttribute('data-value', 'grey'); // Добавление доп.атрибута к третьему варианту на шаге №5
        });
        btnStep5_04.forEach(function(btnStep5_04_item){
            btnStep5_04_item.setAttribute('data-value', 'red'); // Добавление доп.атрибута к третьему варианту на шаге №5
        });
        btnStep5_05.forEach(function(btnStep5_05_item){
            btnStep5_05_item.setAttribute('data-value', 'brown'); // Добавление доп.атрибута к третьему варианту на шаге №5
        });
        btnStep5_06.forEach(function(btnStep5_06_item){
            btnStep5_06_item.setAttribute('data-value', 'black'); // Добавление доп.атрибута к третьему варианту на шаге №5
        });
        btnStep5_07.forEach(function(btnStep5_07_item){
            btnStep5_07_item.setAttribute('data-value', 'colors'); // Добавление доп.атрибута к третьему варианту на шаге №5
        });
        var btnNavPrev05 = document.querySelector('a[href="#step5-prev"]');  // Поиск кнопки назад на шаге №5
        btnStep5All.forEach(function(btnStep5_item){ // Массив первой кнопки на шаге №5
            btnStep5_item.classList.add('btnStep5'); // Добавление нового класса к кнопкам на шаге №5
            setTimeout(function () { // Таймер 100 мс 
                btnStep5_item.addEventListener('click', function() { // Выбор варианта на шаге №5
                    var btnStep5_ActiveAll = document.querySelectorAll('a.btnStep5.activeBtn'), // Поиск всех активных кнопок на шаге №5
                        btnNav05 = document.querySelector('.btn-nav_next_05');  // Поиск кнопки далее на шаге №5
                    btnStep5_ActiveAll.forEach(function(btnStep5_ActiveItem){ // Массив всех активных кнопок на шаге №5
                        btnStep5_ActiveItem.classList.remove('activeBtn'); // Обнуление всех активных кнопок на шаге №5
                    });
                    btnStep5_item.classList.toggle('activeBtn'); // Выбор активной кнопки после клика на шаге №5
                    btnNav05.classList.add('activeNav'); // Выбор активной кнопки Далее на шаге №5
                    console.log(btnStep5_item.getAttribute('data-value')); // Вывод информации в консоль
                    quizStep[4].classList.add('stepHiden'); // Cкрытие шага №5 после выбора варианта
                    quizStep[4].classList.remove('stepVisible'); // Cкрытие шага №5 выбора варианта
                    quizStep[5].classList.remove('stepHiden'); // Показ шага №6 после выбора варианта
                    quizStep[5].classList.add('stepVisible'); // Показ шага №6 после выбора варианта
                    document.querySelector('#input_step5').value = btnStep5_item.getAttribute('data-value'); // Запомнить выбранный вариант на шаге №5
                });
                btnNavPrev05.addEventListener('click', function() { // Клик на кнопку назад на шаге №5
                    quizStep[4].classList.add('stepHiden'); // Cкрытие шага №5 после нажатие на кнопку назад
                    quizStep[4].classList.remove('stepVisible'); // Cкрытие шага №5 после нажатие на кнопку назад
                    quizStep[3].classList.remove('stepHiden'); // Показ шага №4 после нажатие на кнопку назад
                    quizStep[3].classList.add('stepVisible'); // Показ шага №4 после нажатие на кнопку назад
                });
                btnNavNext05.addEventListener('click', function() { // Клик на кнопку назад на шаге №5
                    quizStep[4].classList.add('stepHiden'); // Cкрытие шага №5 после нажатие на кнопку назад
                    quizStep[4].classList.remove('stepVisible'); // Cкрытие шага №5 после нажатие на кнопку назад
                    quizStep[5].classList.remove('stepHiden'); // Показ шага №6 после нажатие на кнопку назад
                    quizStep[5].classList.add('stepVisible'); // Показ шага №6 после нажатие на кнопку назад
                });
            }, 100);
        });
        
        /********* Действия квиза на шаге №6 ************/
        btnNav06 = document.querySelector('.btn-nav_next_06');
        btnNav06.classList.add('activeNav'); // Добавление нового класса к кнопке на шаге №6
        btnNavNext06.addEventListener('click', function() { // Клик на кнопку назад на шаге №6
            quizStep[5].classList.add('stepHiden'); // Cкрытие шага №6 после нажатие на кнопку назад
            quizStep[5].classList.remove('stepVisible'); // Cкрытие шага №6 после нажатие на кнопку назад
            quizResultAllBlock.forEach(function(quizResultAllBlock_item){
                quizResultAllBlock_item.classList.remove('stepHiden'); // Показ заголовка и кнопок в Результатах
                quizResultAllBlock_item.classList.add('stepVisible', 'resultVisible'); // Показ заголовка и кнопок в Результатах
            });
/********* Конечный результат квиза ************/
var inputStep1 = document.querySelector('#input_step1').value;
var inputStep2 = document.querySelector('#input_step2').value;
var inputStep3 = document.querySelector('#input_step3').value;
var inputStep4 = document.querySelector('#input_step4').value;
var inputStep4_2 = document.querySelector('#input_step4_2').value;
/****** Результат №1 ******/
function quizResult01() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM LIGHT
    quizResultProduct[4].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №2 ******/
function quizResult02() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №3 ******/
function quizResult03() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №4 ******/
function quizResult04() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №5 ******/
function quizResult05() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №6 ******/
function quizResult06() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №7 ******/
function quizResult07() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №8 ******/
function quizResult08() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM MOUSSE
    quizResultProduct[9].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №9 ******/
function quizResult09() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM LIGHT
    quizResultProduct[4].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM INFINITE MIST
    quizResultProduct[10].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №10 ******/
function quizResult10() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №11 ******/
function quizResult11() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM SPRAY GEL
    quizResultProduct[15].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM MOUSSE
    quizResultProduct[9].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №12 ******/
function quizResult12() {
     // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM SPRAY GEL
    quizResultProduct[15].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №13 ******/
function quizResult13() {
     // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM SPRAY GEL
    quizResultProduct[15].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM INFINITE MIST
    quizResultProduct[12].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №14 ******/
function quizResult14() {
     // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM SPRAY GEL
    quizResultProduct[15].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №15 ******/
function quizResult15() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №16 ******/
function quizResult16() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №17 ******/
function quizResult17() {
     // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM INFINITE MIST
    quizResultProduct[12].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM MOUSSE
    quizResultProduct[9].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №18 ******/
function quizResult18() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №19 ******/
function quizResult19() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM REG
    quizResultProduct[8].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM DRY TEXTURE
    quizResultProduct[5].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №20 ******/
function quizResult20() {
     // Показ товара GM Shampoo
    quizResultProduct[6].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Conditioner
    quizResultProduct[7].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №21 ******/
function quizResult21() {
     // Показ товара GM Shampoo
    quizResultProduct[6].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Conditioner
    quizResultProduct[7].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №22 ******/
function quizResult22() {
     // Показ товара GM Shampoo
    quizResultProduct[6].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Conditioner
    quizResultProduct[7].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM FOAM
    quizResultProduct[20].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №23 ******/
function quizResult23() {
     // Показ товара GM Shampoo
    quizResultProduct[6].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Conditioner
    quizResultProduct[7].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM SPRAY GEL
    quizResultProduct[15].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM INFINITE MIST
    quizResultProduct[12].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №24 ******/
function quizResult24() {
     // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM FOAM
    quizResultProduct[20].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №25 ******/
function quizResult25() {
    // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM INFINITE MIST
    quizResultProduct[12].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №26 ******/
function quizResult26() {
    // Показ товара BM Shampoo
    quizResultProduct[13].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM Conditioner
    quizResultProduct[14].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM CURL BALM
    quizResultProduct[11].classList.add('stepVisible', 'resultVisible');
    // Показ товара BM INFINITE MIST
    quizResultProduct[12].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM FOAM
    quizResultProduct[20].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №27 ******/
function quizResult27() {
    // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM Mask
    quizResultProduct[2].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №28 ******/
function quizResult28() {
    // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM SPRAY
    quizResultProduct[17].classList.add('stepVisible', 'resultVisible');
    quizResultProduct[19].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №29 ******/
function quizResult29() {
    // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
}
/****** Результат №30 ******/
function quizResult30() {
    // Показ товара PM Shampoo
    quizResultProduct[0].classList.add('stepVisible', 'resultVisible');
    // Показ товара PM Conditioner
    quizResultProduct[1].classList.add('stepVisible', 'resultVisible');
    // Показ товара Fab ME
    quizResultProduct[3].classList.add('stepVisible', 'resultVisible');
    // Показ товара GM SERUM
    quizResultProduct[18].classList.add('stepVisible', 'resultVisible');
    // Показ товара QM FOAM
    quizResultProduct[20].classList.add('stepVisible', 'resultVisible');
}
    /****** Вариант №1 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult01();
    }
    /****** Вариант №2 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) )
    ) {
        quizResult02();
    }
    /****** Вариант №3 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult03();
    }
    /****** Вариант №4 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult04();
    }
    /****** Вариант №5 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult05();
    }
    /****** Вариант №6 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) )
    ) {
        quizResult06();
    }
    /****** Вариант №7 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) )

    ) {
        quizResult07();
    }
    /****** Вариант №8 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult08();
    }
    /****** Вариант №9 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult09();
    }
    /****** Вариант №10 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult10();
    }
    /****** Вариант №11 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult11();
    }
    /****** Вариант №12 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'hydration') ) )
    ) {
        quizResult12();
    }
    /****** Вариант №13 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == '' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == '') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == '' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == '') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == '' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == '') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'frizz') ) )
    ) {
        quizResult13();
    }
    /****** Вариант №14 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'fine' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult14();
    }
    /****** Вариант №15 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult15();
    }
    /****** Вариант №16 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult16();
    }
    /****** Вариант №17 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult17();
    }
    /****** Вариант №18 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult18();
    }
    /****** Вариант №19 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'volume' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'volume') ) )
    ) {
        quizResult19();
    }
    /****** Вариант №20 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'frizz') ) )

    ) {
        quizResult20();
    }
    /****** Вариант №21 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'hydration') ) )
    ) {
        quizResult21();
    }
    /****** Вариант №22 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'hydration' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'hydration') ) )

    ) {
        quizResult22();
    }
     /****** Вариант №23 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'frizz') ) )
    ) {
        quizResult23();
    }
    /****** Вариант №24 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult24();
    }
    /****** Вариант №25 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'frizz') || (inputStep4 == 'frizz' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'hydration') || (inputStep4 == 'hydration' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'defined' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'defined') ) )

    ) {
        quizResult25();
    }
    /****** Вариант №26 ******/
    if( 
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'dry' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'balanced' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'defined') || (inputStep4 == 'defined' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult26();
    }
     /****** Вариант №27 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == 'strengthen') || (inputStep4 == 'strengthen' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult27();
    }
    /****** Вариант №28 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'oil' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'oil') ) )
    ) {
        quizResult28();
    }
    /****** Вариант №29 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == '') || (inputStep4 == '' && inputStep4_2 == 'frizz') ) )
    ) {
        quizResult29();
    }
    /****** Вариант №30 ******/
    if( 
        ( inputStep1 == 'straight' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'medium' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||

        ( inputStep1 == 'straight' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) ) ||
        ( inputStep1 == 'wavy' && inputStep2 == 'coarse' && inputStep3 == 'oily' && ( (inputStep4 == 'frizz' && inputStep4_2 == 'oil') || (inputStep4 == 'oil' && inputStep4_2 == 'frizz') ) )
    ) {
        quizResult30();
    }
    
            
        });
        
        /********* Рестарт квиза ************/
        btnRestart.addEventListener('click', function() {
            var quizResultActiveAll = document.querySelectorAll('.resultVisible'),
                quizAllValue = document.querySelectorAll('a.activeBtn'),
                quizAllBtnActive = document.querySelectorAll('.activeNav');
            quizAllValue.forEach(function(quizAllValue_item){
                quizAllValue_item.classList.remove('activeBtn');
            });
            quizAllBtnActive.forEach(function(quizAllBtnActive_item){
                quizAllBtnActive_item.classList.remove('activeNav');
            });
            document.querySelector('#form_quiz_result').reset(); // Очистка результатов в скрытой форме
            quizResultActiveAll.forEach(function(quizResultActiveAll_item){
                quizResultActiveAll_item.classList.add('stepHiden'); // Cкрытие результатов
                quizResultActiveAll_item.classList.remove('stepVisible'); // Cкрытие результатов
                quizResultActiveAll_item.classList.remove('resultVisible'); // Cкрытие результатов
            })
            quizStep[0].classList.remove('stepHiden'); // Показ шага №1 после сброса квиза
            quizStep[0].classList.add('stepVisible'); // Показ шага №1 после сброса квиза
        });
        
        /********* Добавить все товары в корзину ************/
        btnBuyAll.addEventListener('click', function() {
            console.log('click');
            var btnBuyAllOrder = document.querySelectorAll('.resultVisible .btn_product_order a');
            btnBuyAllOrder.forEach(function(btnBuyAllOrder_item){
                btnBuyAllOrder_item.click();
            });
        });
        
        /********* Форматирование параметров ************/
        var productcard1 = '.btn_product_order a';
        $(document).on('click', productcard1, function(e){
            setTimeout(function() { 
                $('.t706__product-title').each(function() {
                  var $this = $(this);
                  var newText = $this.text().replace(/\*\*([^*]+)\*\*/g, '<div class="t706__product-title__option"><div>$1</div></div>').replace(/\*\*/g, '');
                  $this.html(newText);
                }); 
            }, 50);
        });
    });
