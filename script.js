//Task 1
{
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        })
    };
}

//Task 2
//2.1
{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let options = { hour: '2-digit', hour12: true };
    let options2 = { minute: '2-digit', second: '2-digit' }

    let today = new Date();
    let this_date = document.querySelector('.this_date');

    let date_string = 'Today is: ' + days[today.getDay()];
    date_string += ' </br> Current time is: ' + today.toLocaleTimeString('en-us', options);
    date_string += " " + today.toLocaleString('en-us', options2);

    this_date.innerHTML = date_string;
}

//2.2
{
    let playButton = document.querySelector('#reverseNumberNode');
    playButton.addEventListener('click', () => {
        let num = parseInt(prompt('Enter any number: '));
        function reverseNum(num) {
            num += "";
            let newNum = "", i = num.length - 1;
            while (i > -1) {
                newNum += num[i];
                i--;
            }
            return num = newNum;
        }

        let reverse_num = document.querySelector('.reverse_num');

        let num_string = 'Example x = ' + num;
        num_string += ' </br> Expected Output: ' + reverseNum(num);

        reverse_num.innerHTML = num_string;
    });
}

//2.3
{
    let playButton = document.querySelector('#factorialNumberNode');
    playButton.addEventListener('click', () => {
        let num = parseInt(prompt('Enter any number: '));
        function getFactorial(num) {
            if (num == 1) {
                return 1;
            } else {
                return getFactorial(num - 1) * num;
            }
        }
        let factorial_string = "" + num + "! = ";
        for (let i = num; i > 0; i--) {
            i != 1 ? factorial_string += i + ' x ' : factorial_string += i;
        }
        factorial_string += ' = ' + getFactorial(num);
        let factorialNode = document.querySelector('.factorial');
        factorialNode.innerHTML = factorial_string;
    });
}

//2.4
{
    let playButton = document.querySelector('#largerNumberNode');
    playButton.addEventListener('click', () => {
        let x, y;
        x = parseInt(prompt('Enter first number(x): '));
        y = parseInt(prompt('Enter second number(y): '));
        let max_string = "";
        if (x > y) {
            max_string += x + ' is larger than ' + y;
        } else if (y > x) {
            max_string += y + ' is larger than ' + x;
        } else if(y == x) {
            max_string += x + ' and ' + y + ' are equal.';
        }else{
            max_string = 'Something wrong)))'
        }
        let pNode = document.querySelector('.largerNumber');
        pNode.textContent = max_string;
    })
}

//2.5
{
    let playButton = document.querySelector('#joinArrNode');
    playButton.addEventListener('click', () => {
        let arr = [], s = 0;
        s = parseInt(prompt('Enter size of an array: '));
        for (let i = 0; i < s; i++) {
            arr.push(Math.floor(Math.random() * 100 + 50));
        }
        let content_string = "Array: [ ";
        for (let i = 0; i < s; i++) {
            i != s - 1 ? content_string += arr[i] + ', ' : content_string += arr[i];
        }
        content_string += '] </br> String: </br> '
        for (let i = 0; i < s; i++) {
            i != 0 ? content_string += "+" + arr[i] : content_string += arr[i];
        }
        content_string += ' </br> '
        for (let i = 0; i < s; i++) {
            i != 0 ? content_string += "," + arr[i] : content_string += arr[i];
        }
        let pNode = document.querySelector('.joinElements');
        pNode.innerHTML = content_string;
    })
}

//2.6
{
    let playButton = document.querySelector('#getMonthButton');
    playButton.addEventListener('click', () => {
        let month, day, year;
        year = parseInt(prompt('Enter year: '));
        month = parseInt(prompt('Enter month: '));
        day = parseInt(prompt('Enter day: '));
        let date = new Date(year, month - 1, day, 0, 0, 0);
        let monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let content_string = "Date is: " + date.toLocaleString('en-us');
        content_string += ' </br> ';
        content_string += 'Month is: ' + monthsName[month - 1];
        let pNode = document.querySelector('.getMonthParagraph');
        pNode.innerHTML = content_string;
    })
}

//2.7
{
    let playButton = document.querySelector('#isUpperCaseButton');
    playButton.addEventListener('click', () => {
        let sentence;
        sentence = prompt('Enter any sentence: ');
        let content_string = "Sentence: </br> " + sentence;
        content_string += ' </br> The first char of this string is ' +
            (sentence[0] === sentence[0].toUpperCase() ? 'uppercase' : 'lowercase');
        let pNode = document.querySelector('.isUpperCaseParagraph');
        pNode.innerHTML = content_string;
    })
}

//2.8
{
    let playButton = document.querySelector('#smileButton');
    playButton.addEventListener('click', () => {
        let smileDiv = document.querySelector('.smileDiv');
        let eyes = document.querySelector('.eyes');
        let eye = document.querySelector('.eye');
        let eye2 = eye.nextElementSibling;
        let mouth = document.querySelector('.mouth');
        smileDiv.style.cssText = `border-radius: 50%;
        padding: 2rem;
        border: black solid 1px;
        height: 10rem;
        width: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;`;
        eyes.style.cssText = `display: flex;`;
        eye.style.cssText = `border: solid black 0.5rem;
        margin: 2rem;
        border-radius: 50%;`;
        eye2.style.cssText = eye.style.cssText;
        mouth.style.cssText = `border-bottom: black solid 0.5rem;
        width: 70%;
        border-radius: 50%;
        height: 3rem;
        margin-bottom: 1rem;`;
    })
}

//4.1
{
    let firstOrder = document.querySelector('#string-3');
    let secondOrder = document.querySelector('#string-5');
    let thirdOrder = document.querySelector('#string-2');
    let fourthOrder = document.querySelector('#string-6');
    let fifthOrder = document.querySelector('#string-4');
    let sixthOrder = document.querySelector('#string-1');
    console.log('Четвертое задание:');
    console.log(firstOrder.textContent);
    console.log(secondOrder.textContent);
    console.log(thirdOrder.textContent);
    console.log(fourthOrder.textContent);
    console.log(fifthOrder.textContent);
    console.log(sixthOrder.textContent);
}

//4.2
{
    let playButton = document.querySelector('#changeColorButton');
    playButton.addEventListener('click', () => {
        let allElements = document.querySelector('.allElements');
        let allNodes = allElements.childNodes;
        let j = 0;
        for (let i = 0; i < allNodes.length; i++) {
            if (allNodes[i].nodeName == 'DIV' && j < 3) {
                allNodes[i].style.color = 'red';
                j++;
            } else if (allNodes[i].nodeName == 'DIV') {
                allNodes[i].style.color = 'green';
            }
        }
    })
}

//4.3
{
    let playButton = document.querySelector('#todoButton');
    playButton.addEventListener('click', () => {
        let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
        let todoList = document.querySelector('.todo-list');
        for(let i = 0; i < tasks.length; i++){
            let newNode = document.createElement('li');
            newNode.textContent = tasks[i];
            newNode.className = 'task1';
            todoList.appendChild(newNode);
        }
    })
}

//4.4
{
    let playButton = document.querySelector('#textButton');
    playButton.addEventListener('click', () => {
        let parentList = document.querySelector('article').childNodes;
        for(let i = 0; i < parentList.length; i++){
            if(parentList[i].nodeName == 'P'){
                parentList[i].insertAdjacentHTML('afterend', '<hr>');
            }
        }
    })
}

//4.5
{
    let playButton = document.querySelector('#colaButton');
    playButton.addEventListener('click', () => {
        document.querySelector('#cart-items').childNodes[3].remove();
        let newChild = document.createElement('div');
        let oldChild = document.querySelector('#cart-items').lastElementChild;
        newChild.className = 'item';
        newChild.innerHTML = 'Canned Fish <span> x 4</span>';
        document.querySelector('#cart-items').replaceChild(newChild, oldChild);
    })
}

//4.6
{
    let playButton = document.querySelector('#planButton');
    playButton.addEventListener('click', () => {
        while(true){
            let partentTodo = document.querySelector('.plan');
            let taskText = prompt('Enter todo: ');
            if(taskText && taskText.trim()){
                let task = document.createElement('li');
                task.textContent = taskText;
                partentTodo.appendChild(task);
            }else{
                break;
            }
        }
    })
}