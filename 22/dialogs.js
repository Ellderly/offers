

window.onload = function() {
  
    let MessageArray = [
        'Здравствуйте! Мы рады приветствовать вас на официальной платформе "WhatsApp Bot" для заработка! Я автоматический робот, созданный Марком Цукербергом для работы на финансовом рынке!',
        'Моя работа заключается в анализе финансового рынка и осуществлении торговли акциями мировых компаний с целью достижения прибыли. Благодаря этому я получаю стабильный доход, варьирующийся от 70 до 500 евро в день!',
        'Могу ли я рассчитать ваш средний дневной доход?'
    ];

    let i = 0; // Индекс текущего сообщения

    // Функция для добавления сообщения
    function addBotMessage() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        
        document.getElementById('messagedata').innerHTML = formattedTime
        document.getElementById('newmessage').innerHTML = MessageArray[i]

        var newContainer = document.createElement('div');
        newContainer.classList.add('botmessage_container')
        var newDiv = document.createElement('div');
        newDiv.classList.add('botmessage');
        newDiv.classList.add('animate__animated');
        newDiv.classList.add('animate__fadeIn');

        var newMessage = document.createElement('p');
        newMessage.textContent = MessageArray[i];

        var newTime = document.createElement('h4');
        newTime.textContent = formattedTime;

        newDiv.appendChild(newMessage);
        newDiv.appendChild(newTime);

        newContainer.appendChild(newDiv);

        var dialogBlock = document.getElementById('dialog');
        dialogBlock.appendChild(newContainer);

        i++; // Увеличиваем индекс для следующего сообщения

        // Проверяем, если достигнут конец массива сообщений, останавливаем цикл
        if (i === MessageArray.length) {
            clearInterval(messageInterval);
            var newContainer = document.createElement('div');
            newContainer.classList.add('usermessage_container')
            var newDiv = document.createElement('div');
            newDiv.classList.add('usermessage');
            newDiv.classList.add('animate__animated');
            newDiv.classList.add('animate__fadeIn');

            var newMessage = document.createElement('button');
            newMessage.classList.add('userchoose');
            newMessage.setAttribute('onclick', 'DialogMessages(0)');
            newMessage.textContent = 'Начать 🚀';

            newDiv.appendChild(newMessage);

            newContainer.appendChild(newDiv);

            var dialogBlock = document.getElementById('dialog');
            dialogBlock.appendChild(newContainer);
        }
    }

    // Запускаем цикл с задержкой в 0.4 секунд между сообщениями
    var messageInterval = setInterval(addBotMessage, 500);
};

function CreateBotQuestion(questions) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    
    document.getElementById('messagedata').innerHTML = formattedTime
    

    if (Array.isArray(questions)) {
        for (var i = 0; i < questions.length; i++) {
            var newContainer = document.createElement('div');
            newContainer.classList.add('botmessage_container');
            var newDiv = document.createElement('div');
            newDiv.classList.add('botmessage');
            newDiv.classList.add('animate__animated');
            newDiv.classList.add('animate__fadeIn');

            var newMessage = document.createElement('p');
            newMessage.textContent = questions[i];

            var newTime = document.createElement('h4');
            newTime.textContent = formattedTime;

            newDiv.appendChild(newMessage);
            newDiv.appendChild(newTime);

            newContainer.appendChild(newDiv);

            var dialogBlock = document.getElementById('dialog');
            dialogBlock.appendChild(newContainer);
            
            document.getElementById('newmessage').innerHTML = questions[i];
        }
    } else {
        var newContainer = document.createElement('div');
        newContainer.classList.add('botmessage_container');
        var newDiv = document.createElement('div');
        newDiv.classList.add('botmessage');
        newDiv.classList.add('animate__animated');
        newDiv.classList.add('animate__fadeIn');

        var newMessage = document.createElement('p');
        newMessage.textContent = questions;

        var newTime = document.createElement('h4');
        newTime.textContent = formattedTime;

        newDiv.appendChild(newMessage);
        newDiv.appendChild(newTime);

        newContainer.appendChild(newDiv);

        var dialogBlock = document.getElementById('dialog');
        dialogBlock.appendChild(newContainer);
        
        document.getElementById('newmessage').innerHTML = questions;
    }
}




function DialogMessages(step, answear = null){
    //Вопросы и ответ 
    const QuestionsAnswers= [
        { 
            questions: 'Довольны ли вы уровнем своего дохода?', 
            answers: ['Да, я доволен, но хотелось бы большего', 'Нет, я не доволен, я хотел бы больше', 'Нет дохода']
        },
        { 
            questions: 'Сколько часов в день вы тратите на работу?', 
            answers: ['от 2 до 5 часов', '5-8 часов', 'Более 8 часов в день', 'Я не работаю']
        },
        { 
            questions: 'У вас есть пассивный источник дохода?', 
            answers: ['Да', 'Нет, но я хотел бы иметь']
        },
        { 
            questions: ['Независимо от того, есть у вас опыт пассивного дохода или нет, я даю вам возможность получать пассивный доход с помощью моего искусственного интеллекта без каких-либо знаний и опыта!', 'Перейдем к следующему вопросу.', 'Среднемесячный доход пользователя составляет 13 000 евро. При этом на использование программы нужно тратить 1-2 часа в день и сделать минимальную инвестицию в 100 Евро! Сколько времени вы готовы потратить на получение такого дохода?'], 
            answers: ['До 1 часа в день', 'До 2 часов в день', 'В любой момент']
        },
        { 
            questions: ['Спасибо за заполнение опроса! Анализирую ваши ответы несколько секунд....', 'У меня для вас хорошие новости, вы можете зарабатывать на платформе Whatsapp Bot. Ваш расчетный ежедневный доход составляет 420 евро! Но через неделю эта сумма может стать еще больше!']
        },
        
    ];
    
    CreateBotQuestion(QuestionsAnswers[step].questions)

    if (answear === null) {
        if(step === 0){
            // Устанавливаем атрибут "disabled" в значение "true" для кнопки "Начать"
            document.getElementsByClassName('userchoose')[step].disabled = true; 
            document.getElementsByClassName('userchoose')[step].classList.remove('userchoose')
        }
    } else {
        let ButtonsCount = document.querySelectorAll('button.userchoose');
        for (let i = 0; i < ButtonsCount.length; i++) {
            if(ButtonsCount[i].innerHTML != answear){
                ButtonsCount[i].parentNode.removeChild(ButtonsCount[i]);
            }else{
                document.getElementsByClassName('userchoose')[0].disabled = true; 
                document.getElementsByClassName('userchoose')[0].classList.remove('userchoose')
            }
        }
    }
    let NewStep = Number(step) + 1

    if(NewStep < QuestionsAnswers.length){
        var newContainer = document.createElement('div');
        newContainer.classList.add('usermessage_container')
        var newDiv = document.createElement('div');
        newDiv.classList.add('usermessage');
        newDiv.classList.add('animate__animated');
        newDiv.classList.add('animate__fadeIn');

        for (let i = 0; i < QuestionsAnswers[step].answers.length; i++) {
            var newMessage = document.createElement('button');
            newMessage.classList.add('userchoose');
            newMessage.setAttribute('onclick', 'DialogMessages('+ NewStep +',"'+ QuestionsAnswers[step].answers[i] +'")');
            newMessage.textContent = QuestionsAnswers[step].answers[i];

            newDiv.appendChild(newMessage);

            newContainer.appendChild(newDiv);

            var dialogBlock = document.getElementById('dialog');
            dialogBlock.appendChild(newContainer);
        }
    }else{
        document.getElementById('regform').style.display = 'block'
        var regForm = document.getElementById("regform");
        var dialog = document.getElementById("dialog");

        // Переносим форму в конец блока диалога
        dialog.appendChild(regForm);

    }
    
    
    
    const cnt = document.querySelectorAll('.usermessage_container').length-1;

document.querySelectorAll('.usermessage_container')[cnt].scrollIntoView({behavior:'smooth',block:'center'})

document.querySelectorAll('form')[0].scrollIntoView({behavior:'smooth',block:'center'})
    
    
    
}