    // # = wall, O = hall, o = ball, P = player, = = stage
    //1.입력: 아래 내용을 문자열로 넘겨서 처리하는 함수를 작성한다.
    let map1 = [
        "#####",
        "#OoP#",
        "#####",
        "=====",
    ];
    let map2 = [
        "  #######  ",
        "###  O  ###",
        "#    o    #",
        "# Oo P oO #",
        "###  o  ###",
        " #   O  #  ",
        " ########  ",
        
    ];

    //2.위 값을 읽어 2차원 배열로 변환 저장한다.

    let arr = [0,1,2,3,4,5];
    const wall = 0;
    const hall = 1;
    const ball = 2;
    const player = 3;
    const stage = 4;
    const nothing = 5;

    let level1 = [
        [0,0,0,0,0],
        [0,1,2,3,0],
        [0,0,0,0,0],
        [4,4,4,4,4]
    ];
    /*3.출력할 내용
    아래와 같은 형태로 각 스테이지 정보를 출력한다.

    플레이어 위치는 배열 [0][0]을 기준으로 처리한다
    아래 출력 예시와 상관없이 기준에 맞춰서 얼마나 떨어진지 표시하면 된다
    스테이지 구분값은 출력하지 */

    let players1 = (2,4);
    let width1 = 5;
    let height1= 3;
    let hallNumber1= 1;
    let ballNumber1= 1;

    let level2 = [
        [0,0,0,0,0,0,0],
        [0,5,5,2,5,5,0],
        [0,1,2,3,2,1,0],
        [0,0,0,2,0,0,0],
        [0,5,5,1,5,5,0]
        [4,4,4,4,4,4,4]
    ];

    let players2 = (4,6);
    let width2 = 11;
    let height2 = 7;
    let hallNumber2 = 4;
    let ballNumber2 = 4;


    const number = parseInt(prompt("SOKOBAN>"),);

    function findPlayerCoords() {
            const y = map1.findIndex(row => row.includes(player))
            const x = map1[y].indexOf(player)
        
            return {
            x,
            y,
            above: map1[y - 1][x],
            below: map1[y + 1][x],
            sideLeft: map1[y][x - 1],
            sideRight: map1[y][x + 1],
            }
        };

        function move(playerCoords, direction) {
            if (isTraversible(adjacentCell[direction])) {
            movePlayer(playerCoords, direction)
            }
        
            if (isBlock(adjacentCell[direction])) {
            movePlayerAndBlocks(playerCoords, direction)
            }
        }

        function movePlayer(playerCoords, direction) {

            map1[playerCoords.y][playerCoords.x] = isVoid(levelOneMap[playerCoords.y][playerCoords.x])
            ? VOID
            : hall
        

            map1[getY(playerCoords.y, direction, 1)][getX(playerCoords.x, direction, 1)] = player

        }
            function countBlocks(blockCount, y, x, direction, board) {
                if (isBlock(board[y][x])) {
                blockCount++
                return countBlocks(blockCount, getY(y, direction), getX(x, direction), direction, board)
                } else {
                return blockCount
                }};
    const sokoban = new Sokoban();
    sokoban.render();
            
        document.addEventListener('keydown', event => {
        const playerCoords = sokoban.findPlayerCoords()

        switch (event.key) {
            case keys.up:
            case keys.w:
            sokoban.move(playerCoords, directions.up)
            break
            case keys.down:
            case keys.s:
            sokoban.move(playerCoords, directions.down)
            break
            case keys.left:
            case keys.a:
            sokoban.move(playerCoords, directions.left)
            break
            case keys.right:
            case keys.d:
            sokoban.move(playerCoords, directions.right)
            break
            default:
        }

            sokoban.render()
            })

            function render() {
                map.forEach((row, y) => {
                row.forEach((cell, x) => {
                    paintCell(context, cell, x, y)
                })
                })
            }
            function paintCell(context, cell, x, y) {
                // Create the fill
                context.beginPath()
                context.rect(x * multiplier + 5, y * multiplier + 5, multiplier - 10, multiplier - 10)
                context.fillStyle = colors[cell].fill
                context.fill()
            
                // Create the outline
                context.beginPath()
                context.rect(x * multiplier + 5, y * multiplier + 5, multiplier - 10, multiplier - 10)
                context.lineWidth = 10
                context.strokeStyle = colors[cell].stroke
                context.stroke()
            }