document.addEventListener("DOMContentLoaded",function(){
    console.log("Hi Bart");

    function GameOfLife  (boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;
        this.board = document.querySelector('#board');
        this.cells;
    }
//metoda do tworzenia planszy
    GameOfLife.prototype.createBoard = function() {
        this.cells = [];
        let row = this.width* 10;
        this.board.style.width = row + 'px';
        let col =  this.height* 10;
        this.board.style.height= col + 'px';
        nrOfCells = row*col/100;
        this.board.style.backgroundColor = 'red';
        for (let i = 0; i < nrOfCells; i++) {
            let newDiv = document.createElement("div");
            this.board.append(newDiv);
            this.cells.push(newDiv) 
            this.cells[i].addEventListener('mouseover', function () {
                newDiv.classList.toggle('live')
            });
        }
    };

//przeliczanie współrzędnych X i Y na index
    GameOfLife.prototype.indexCounter = function(x, y){
        let index;
        index  = x + (y *this.width);
        return index;
    };
//metoda zmieniająca stan komórce o podanych wspólrzednych
    GameOfLife.prototype.setCellState = function(x, y, state){
        let index = game.indexCounter(x,y);
        let cell = this.cells[index];
        if (state === 'live' ){
            cell.classList.add('live');
            }else{
            cell.classList.remove('live')
        }
    };
//wybieram 5 komórek które ożywiam - HELLO WORLD !!!
    GameOfLife.prototype.firstGlider = function(){

        // H
        game.setCellState(4,4, 'live');
        game.setCellState(4,5, 'live');
        game.setCellState(4,6,'live');
        game.setCellState(4,7, 'live');
        game.setCellState(4,8, 'live');
        game.setCellState(4,9, 'live');
        game.setCellState(4,10, 'live');
        game.setCellState(4,11, 'live');
        game.setCellState(4,12, 'live');
        game.setCellState(4,13, 'live');
        game.setCellState(4,14, 'live');

        game.setCellState(5,9, 'live');
        game.setCellState(6,9, 'live');
        game.setCellState(7,9, 'live');
        game.setCellState(8,9, 'live');


        game.setCellState(9,4, 'live');
        game.setCellState(9,5, 'live');
        game.setCellState(9,6,'live');
        game.setCellState(9,7, 'live');
        game.setCellState(9,8, 'live');
        game.setCellState(9,9, 'live');
        game.setCellState(9,10, 'live');
        game.setCellState(9,11, 'live');
        game.setCellState(9,12, 'live');
        game.setCellState(9,13, 'live');
        game.setCellState(9,14, 'live');

        //E
        game.setCellState(12,4, 'live');
        game.setCellState(12,5, 'live');
        game.setCellState(12,6,'live');
        game.setCellState(12,7, 'live');
        game.setCellState(12,8, 'live');
        game.setCellState(12,9, 'live');
        game.setCellState(12,10, 'live');
        game.setCellState(12,11, 'live');
        game.setCellState(12,12, 'live');
        game.setCellState(12,13, 'live');
        game.setCellState(12,14, 'live');

        game.setCellState(13,4, 'live');
        game.setCellState(14,4, 'live');
        game.setCellState(15,4, 'live');
        game.setCellState(16,4, 'live');


        game.setCellState(13,9, 'live');
        game.setCellState(14,9, 'live');
        game.setCellState(15,9, 'live');


        game.setCellState(13,14, 'live');
        game.setCellState(14,14, 'live');
        game.setCellState(15,14, 'live');
        game.setCellState(16,14, 'live');


        //L

        game.setCellState(20,4, 'live');
        game.setCellState(20,5, 'live');
        game.setCellState(20,6,'live');
        game.setCellState(20,7, 'live');
        game.setCellState(20,8, 'live');
        game.setCellState(20,9, 'live');
        game.setCellState(20,10, 'live');
        game.setCellState(20,11, 'live');
        game.setCellState(20,12, 'live');
        game.setCellState(20,13, 'live');
        game.setCellState(20,14, 'live');

        game.setCellState(21,14, 'live');
        game.setCellState(22,14, 'live');
        game.setCellState(23,14, 'live');
        game.setCellState(24,14, 'live');




        //L

        game.setCellState(28,4, 'live');
        game.setCellState(28,5, 'live');
        game.setCellState(28,6,'live');
        game.setCellState(28,7, 'live');
        game.setCellState(28,8, 'live');
        game.setCellState(28,9, 'live');
        game.setCellState(28,10, 'live');
        game.setCellState(28,11, 'live');
        game.setCellState(28,12, 'live');
        game.setCellState(28,13, 'live');
        game.setCellState(28,14, 'live');

        game.setCellState(29,14, 'live');
        game.setCellState(30,14, 'live');
        game.setCellState(31,14, 'live');
        game.setCellState(32,14, 'live');


        // O


        game.setCellState(39,4, 'live');
        game.setCellState(38,4, 'live');
        game.setCellState(37,4, 'live');
        game.setCellState(36,5, 'live');
        game.setCellState(40,5, 'live');
        game.setCellState(36,6,'live');
        game.setCellState(40,6, 'live');
        game.setCellState(36,7, 'live');
        game.setCellState(40,7, 'live');
        game.setCellState(36,8, 'live');
        game.setCellState(40,8, 'live');
        game.setCellState(36,9,'live');
        game.setCellState(40,9, 'live');
        game.setCellState(36,10, 'live');
        game.setCellState(40,10, 'live');
        game.setCellState(36,11,'live');
        game.setCellState(40,11, 'live');
        game.setCellState(36,11, 'live');
        game.setCellState(40,12, 'live');
        game.setCellState(36,12, 'live');
        game.setCellState(36,13, 'live');
        game.setCellState(40,13, 'live');
        game.setCellState(39,14, 'live');
        game.setCellState(38,14, 'live');
        game.setCellState(37,14, 'live');


        //W
        game.setCellState(46,4, 'live');
        game.setCellState(46,5, 'live');
        game.setCellState(46,6,'live');
        game.setCellState(46,7, 'live');
        game.setCellState(46,8, 'live');
        game.setCellState(46,9, 'live');
        game.setCellState(46,10, 'live');
        game.setCellState(46,11, 'live');
        game.setCellState(46,12, 'live');
        game.setCellState(46,13, 'live');
        game.setCellState(46,14, 'live');

        game.setCellState(47,14, 'live');
        game.setCellState(48,13, 'live');
        game.setCellState(49,12, 'live');
        game.setCellState(50,13, 'live');
        game.setCellState(51,14, 'live');

        game.setCellState(52,4, 'live');
        game.setCellState(52,5, 'live');
        game.setCellState(52,6,'live');
        game.setCellState(52,7, 'live');
        game.setCellState(52,8, 'live');
        game.setCellState(52,9, 'live');
        game.setCellState(52,10, 'live');
        game.setCellState(52,11, 'live');
        game.setCellState(52,12, 'live');
        game.setCellState(52,13, 'live');
        game.setCellState(52,14, 'live');
        //O
        game.setCellState(56,4, 'live');
        game.setCellState(57,4, 'live');
        game.setCellState(58,4, 'live');
        game.setCellState(55,5, 'live');
        game.setCellState(59,5, 'live');
        game.setCellState(55,6,'live');
        game.setCellState(59,6, 'live');
        game.setCellState(55,7, 'live');
        game.setCellState(59,7, 'live');
        game.setCellState(55,8, 'live');
        game.setCellState(59,8, 'live');
        game.setCellState(55,9,'live');
        game.setCellState(59,9, 'live');
        game.setCellState(55,10, 'live');
        game.setCellState(59,10, 'live');
        game.setCellState(55,11,'live');
        game.setCellState(59,11, 'live');
        game.setCellState(55,11, 'live');
        game.setCellState(59,12, 'live');
        game.setCellState(55,12, 'live');
        game.setCellState(55,13, 'live');
        game.setCellState(59,13, 'live');
        game.setCellState(56,14, 'live');
        game.setCellState(57,14, 'live');
        game.setCellState(58,14, 'live');


        //R
        game.setCellState(62,4, 'live');
        game.setCellState(62,5, 'live');
        game.setCellState(62,6,'live');
        game.setCellState(62,7, 'live');
        game.setCellState(62,8, 'live');
        game.setCellState(62,9, 'live');
        game.setCellState(62,10, 'live');
        game.setCellState(62,11, 'live');
        game.setCellState(62,12, 'live');
        game.setCellState(62,13, 'live');
        game.setCellState(62,14, 'live');

        game.setCellState(63,4, 'live');
        game.setCellState(64,4, 'live');
        game.setCellState(65,4, 'live');
        game.setCellState(66,5, 'live');
        game.setCellState(66,6, 'live');
        game.setCellState(66,7, 'live');
        game.setCellState(66, 8,'live');
        game.setCellState(65,9, 'live');
        game.setCellState(64,9, 'live');
        game.setCellState(63,9, 'live');
        game.setCellState(65,10, 'live');
        game.setCellState(66,11, 'live');
        game.setCellState(66,12, 'live');
        game.setCellState(66,13, 'live');
        game.setCellState(66,14, 'live');


        //L
        game.setCellState(69,4, 'live');
        game.setCellState(69,5, 'live');
        game.setCellState(69,6,'live');
        game.setCellState(69,7, 'live');
        game.setCellState(69,8, 'live');
        game.setCellState(69,9, 'live');
        game.setCellState(69,10, 'live');
        game.setCellState(69,11, 'live');
        game.setCellState(69,12, 'live');
        game.setCellState(69,13, 'live');
        game.setCellState(69,14, 'live');


        game.setCellState(70,14, 'live');
        game.setCellState(71,14, 'live');
        game.setCellState(72,14, 'live');
        game.setCellState(73,14, 'live');

        //D


        game.setCellState(77,4, 'live');
        game.setCellState(77,5, 'live');
        game.setCellState(77,6,'live');
        game.setCellState(77,7, 'live');
        game.setCellState(77,8, 'live');
        game.setCellState(77,9, 'live');
        game.setCellState(77,10, 'live');
        game.setCellState(77,11, 'live');
        game.setCellState(77,12, 'live');
        game.setCellState(77,13, 'live');
        game.setCellState(77,14, 'live');


        game.setCellState(78,4, 'live');
        game.setCellState(79,4, 'live');
        game.setCellState(80,5, 'live');
        game.setCellState(81,6, 'live');

        game.setCellState(81,6, 'live');
        game.setCellState(81,7, 'live');
        game.setCellState(81,8, 'live');
        game.setCellState(81,9, 'live');
        game.setCellState(81,10, 'live');
        game.setCellState(81,11, 'live');
        game.setCellState(81,12, 'live');

        game.setCellState(78,14, 'live');
        game.setCellState(79,14, 'live');
        game.setCellState(80,13, 'live');
        game.setCellState(81,12, 'live');



        //!
        game.setCellState(87,4, 'live');
        game.setCellState(87,5, 'live');
        game.setCellState(87,6,'live');
        game.setCellState(87,7, 'live');
        game.setCellState(87,8, 'live');
        game.setCellState(87,9, 'live');
        game.setCellState(87,10, 'live');

        game.setCellState(87,13, 'live');
        game.setCellState(87,14, 'live');

        //!
        game.setCellState(91,4, 'live');
        game.setCellState(91,5, 'live');
        game.setCellState(91,6,'live');
        game.setCellState(91,7, 'live');
        game.setCellState(91,8, 'live');
        game.setCellState(91,9, 'live');
        game.setCellState(91,10, 'live');

        game.setCellState(91,13, 'live');
        game.setCellState(91,14, 'live');

        //!
        game.setCellState(95,4, 'live');
        game.setCellState(95,5, 'live');
        game.setCellState(95,6,'live');
        game.setCellState(95,7, 'live');
        game.setCellState(95,8, 'live');
        game.setCellState(95,9, 'live');
        game.setCellState(95,10, 'live');

        game.setCellState(95,13, 'live');
        game.setCellState(95,14, 'live');

    };




    GameOfLife.prototype.computeCellNextState = function(x, y) {
// zliczam "żywych" sąsiadów
        let sum= 0 ;
        for (let i = -1; i < 2; i++){
            for (let j = -1; j < 2; j++) {

                if (this.cells[game.indexCounter(x + i, y + j)]=== undefined){
                    sum+=0
                }else{
                    if (this.cells[game.indexCounter(x + i, y + j)]
                        .classList.value === 'live') {
                        sum += 1;
                    } else {
                        sum += 0
                    }
                }
            }
        }
        if ((this.cells[game.indexCounter(x , y )].classList.value === 'live')){
            sum =  sum -1;
        }
// zmieniam stan bieżącej komórki w zależności od jej sąsiadów
        let index = game.indexCounter(x, y);
        // console.log('index' + ' '+index);
        // console.log('liczba sąsiadów'+' '+sum);
            let state = this.cells[index];
            let neighbors =  sum;
            if (state.classList.value !== 'live' && neighbors === 3) {
                // console.log('I will be alive');
                return 1;
            }else if(state.classList.value === 'live' && (neighbors < 2 || neighbors> 3)) {
                // console.log('I will die');
                return 0;
            } else {
                if (state.classList.value === 'live'){
                    // console.log('I will live');
                    return 1;
                } else
                    // console.log("I won't born");
                return 0;

            }
    };

    GameOfLife.prototype.computeNextGeneration = function(){
        let futureStateArr = [];
        // console.log(parseInt(this.height), parseInt(this.width));
        for (let i = 0; i< parseInt(this.height); i++) {
            for (let j = 0; j < parseInt(this.width); j++) {
            futureStateArr.push(game.computeCellNextState(j, i))
            }
        }
        return futureStateArr;
    };
    GameOfLife.prototype.printNextGeneration =  function() {
        let futureStateArr = game.computeNextGeneration();
        for (let i = 0; i < futureStateArr.length; i++) {
            if (futureStateArr[i] === 1) {
                this.cells[i].classList.add('live');
            } else this.cells[i].classList.remove('live');
        }
    };

    let game;

    let play = document.querySelector('#play');
    let pause = document.querySelector('#pause');

    game = new GameOfLife ('100', '21');
    game.createBoard();
    game.firstGlider();




    play.addEventListener('click',function (e) {
        var rotationInterval = setInterval(function () {
            game.printNextGeneration()

        }, 1000);


        pause.addEventListener('click',function (e) {
            e.preventDefault();
            clearInterval(rotationInterval)
        });
    });



    });

