const divCommentForm = document.querySelector('.commetnt__form')
const commetntSent = document.querySelector('.commetnt__sent')
const commetntTex = document.getElementById('commetnt_tex')
const commetnt_tex = document.getElementById('commetnt_tex')
const dataSave = JSON.parse(localStorage.getItem('comments'))
const commentError = document.querySelector('.comment-error')

let countDays = -1
let paddingAnswers = 0
let DATA = [
	{
		id: 0,
		userName: 'Руслан Агаев',
		description:
			'Хочу поделиться своим опытом. Недавно увидел рекламу на Facebook о возможности инвестирования с SOCAR. Это показалось мне интересным И знаете что? Решиться инвестировать оказалось отличным шагом. Сейчас я зарабатываю 5000 GEL в месяц благодаря этой инвестиционной возможности. Это не только стабильный доход, но и возможность вложиться в будущее и поддержать чистую энергию в нашей стране. Если у вас есть возможность, обязательно рассмотрите этот вариант!',
		photo: './images/ruslan.jpg',
		time: '18:20',
		date: fdate(-1),

		answer: [
			{
				userName: 'Ответ от Socar Support',
				description: `Спасибо, что поделились своим опытом! Ваш успех в инвестировании с SOCAR вдохновляет и подтверждает, что это действительно уникальная возможность. Мы ценим ваше доверие и надеемся, что ваш опыт будет вдохновлять и других граждан рассмотреть этот перспективный вариант.`,
				photo: './images/support.jpg',
				time: '18:24',
				date: fdate(-1),
			},

			{
				userName: 'Ответ от Руслан Агаев',
				description: `Спасибо вам еще раз, это помогло мне разобраться со всеми долгами!`,
				photo: './images/ruslan.jpg',
				time: '18:33',
				date: fdate(-1),
			},
			{
				userName: 'Ответ от Socar Support:',
				description: `Мы ценим каждого нашего клиента🙏🇬🇪`,
				photo: './images/support.jpg',
				time: '18:42',
				date: fdate(-1),
			},
		],
	},

	{
		id: 1,
		userName: 'Виктория Попова',
		description:
			'Я очень рекомендую этот проект всем, кто хочет увеличить свой заработок, не пропадая целыми днями на работе в душных офисах! И уже через два месяца я смогла купить машину, о которой мечтала!',
		photo: './images/viktoria.jpg',
		time: '9:20',
		date: fdate(-2),

		answer: [
			{
				userName: 'Ответ от Socar Support',
				description: `Спасибо за ваш отзыв! С покупкой вас💪`,
				photo: './images/support.jpg',
				time: '9:33',
				date: fdate(-2),
			},
		],
	},
	{
		id: 2,
		userName: 'Мурат Алиев',
		description:
			'Я решил попробовать себя в роли инвестора даже без опыта и сразу втянулся и начал увеличивать свой доход. Уже через неделю я получил первую прибыль в размере 500$. Все максимально эффективно!',
		photo: './images/murat.jpg',
		time: '14:57',
		date: fdate(-3),

		answer: [
			{
				userName: 'Ответ от Socar Support',
				description: `Мурат, ваш опыт в инвестировании звучит весьма вдохновляющею! Рады слышать, что вы решили попробовать себя в этой области и получили такие положительные результаты всего за неделю. Ваш успех подчеркивает важность освоения новых возможностей и инвестирования в будущее. Продолжайте двигаться вперед и увеличивать свой доход. Эффективность - важный фактор, и мы рады, что вы нашли решение, которое работает для вас!`,
				photo: './images/support.jpg',
				time: '15:12',
				date: fdate(-3),
			},
		],
	},

	{
		id: 2,
		userName: 'Марина Сулейманова',
		description:
			'Могу с уверенностью сказать, что вложение в проект SOCAR стало для меня одним из наиболее успешных решений в финансовой сфере. Постоянные инвестиции в энергетический сектор Грузии позволили мне создать стабильный источник дохода, и сейчас я ежемесячно зарабатываю более 3000GEL',
		photo: './images/marina.jpg',
		time: '20:17',
		date: fdate(-4),

		answer: [
			{
				userName: 'Ответ от Socar Support',
				description: `Спасибо большое за ответ! Вы рекомендуете своим родным и нашим клиентам инвестировать?`,
				photo: './images/support.jpg',
				time: '20:22',
				date: fdate(-4),
			},
			{
				userName: 'Марина Сулейманова',
				description: `Конечно, рекомендую инвестировать в SOCAR. Эта компания представляет уникальные инвестиционные возможности!`,
				photo: './images/marina.jpg',
				time: '20:38',
				date: fdate(-4),
			},
		],
	},
]

if (dataSave) DATA = dataSave

const commetnt__list = document.getElementById('commetnt__list')

function fdate(d) {
	var now = new Date()

	now.setDate(now.getDate() + d)
	var mm = now.getMonth() + 1
	if (mm < 10) mm = '0' + mm
	// document.write();

	return now.getDate() + '.' + mm
}

function renderComment(data) {
	let html = ''
	let img = ` <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>`
	if (data.photo) {
		img = ` <img src="${data.photo}" alt="User">`
	}

	if (data.answer) {
		const answers = data.answer.map(answer => {
			return renderAnswer(answer)
		})

		html = `<li class="commetnt__li_comennt"><ul class="commetnt__ul_comment">
    <li class="commetnt__item_com">
        <div class="commetnt__user_info">
            <span class="commetnt__user_photo">
              
               ${img}
            </span>
        
        
        </div>
    
        <div class="commetnt__box_com">
            <div class="commetnt__user_name"> 
                <strong>
                    ${data.userName}
                </strong>
                (
                <span class="commetnt__date">${data.date}</span>
                <span class="commetnt__time">${data.time}</span>
                )
            </div>
    
            <p class="commetnt__comment">
               ${data.description}
                
            </p>        
        </div>
    </li>
    
    ${answers}
    </ul>
    </li>
    `
		return html
	}

	html = `<li class="commetnt__li_comennt"><ul class="commetnt__ul_comment">
<li class="commetnt__item_com">
    <div class="commetnt__user_info">
        <span class="commetnt__user_photo">
          
        ${img}
        </span>
    
    
    </div>

    <div class="commetnt__box_com">
        <div class="commetnt__user_name"> 
            <strong>
                ${data.userName}
            </strong>
            (
            <span class="commetnt__date">${data.date}</span>
            <span class="commetnt__time">${data.time}</span>
            )
        </div>

        <p class="commetnt__comment">
           ${data.description}
            
        </p>        
    </div>
</li>
</ul>
</li>
`

	return html
}

function renderAnswer(answerArr) {
	paddingAnswers = paddingAnswers + 30
	let img = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>`
	if (answerArr.photo) {
		img = ` <img src="${answerArr.photo}" alt="User">`
	}
	const answer = `<li class="commetnt__item_answer "style="padding-left: ${paddingAnswers}px" >
    <div class="commetnt__user_info">
           ${img}
        </span>
    </div>

    <div class="commetnt__box_com">
        <div class="commetnt__user_name"> 
            <strong>
                ${answerArr.userName}
            </strong>
            (
            <span class="commetnt__date">${fdate(countDays)}</span>
            <span class="commetnt__time">${answerArr.time}</span>
            )
        </div>

        <p class="commetnt__comment">
           ${answerArr.description}
        </p>        
    </div>
</li>`
	return answer
}

function startComments() {
	commetnt__list.innerHTML = ''
	for (let i = 0; i < DATA.length; i++) {
		commetnt__list.innerHTML += renderComment(DATA[i])
		countDays--
		paddingAnswers = 0
	}
}

startComments()

commetntSent.addEventListener('click', e => {
	const newCommentText = commetntTex.value

	if (newCommentText.length < 10) {
		commentError.style.display = 'block'
	} else {
		commentError.style.display = 'none'

		// if (e.target === commetntSent) {
		const date = new Date()

		const newData = {
			userName: 'Пользователь',
			description: commetnt_tex.value,
			time: `${date.getHours()}:${date.getMinutes()}`,
			date: fdate(0),
			// photo: 'images/user.svg',
		}

		DATA.unshift(newData)

		localStorage.setItem('comments', JSON.stringify(DATA))
		const newComent = `<li class="commetnt__li_comennt">
<ul class="commetnt__ul_comment">
    <li class="commetnt__item_com">
        <div class="commetnt__user_info">
            <span class="commetnt__user_photo">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
            </span>
        
        
        </div>

        <div class="commetnt__box_com">
            <div class="commetnt__user_name"> 
                <strong>
                    ${newData.userName}
                </strong>
                (
                <span class="commetnt__date">${newData.date}</span>
                <span class="commetnt__time">${newData.time}</span>
                )
            </div>

            <p class="commetnt__comment">
                ${newData.description}
                
            </p>

            <div class="commetnt__info_com">
            </div>
        </div>
    </li>
</ul>
</li>`

		commetnt__list.insertAdjacentHTML('beforebegin', newComent)

		commetnt_tex.value = ''
	}
})
