/**
 * @param {character[][]} board
 * @return {number}
 */
 //logic
 //1st find rook then store its position and then check for pawn('p) in all direction by fixing one at each time either row or col then find it in left/right(fix row) or find it in up/down(fix col) 
var numRookCaptures = function(board) {
    
    let row=8;
    let col=8;
    let count=0;

    let rook_x=-1;
    let rook_y=-1;

    for(let r=0; r<8; r++){

        for(c=0; c<8; c++){

            if(board[r][c] =='R'){
                rook_x=r;
                rook_y=c;
            }
        }
    }
    //now we found the rook and will check in all 4 directions up,down,left,right from rook position that is rook_x,rook_y

    //search in up
    for(let r=rook_x-1; r>=0; r--){//we fix rook_y
        
        if(board[r][rook_y]=='p'){
            count++;
            break;
        }
        if(board[r][rook_y]=='B') break;
    }
    //search in down
    for(let r=rook_x+1; r<=7; r++){//we fix rook_y
        
        if(board[r][rook_y]=='p'){
            count++;
            break;
        }
        if(board[r][rook_y]=='B') break;
    }
    
    //search in left
    for(let c=rook_y-1; c>=0; c--){//we fix rook_x
        
        if(board[rook_x][c]=='p'){
            count++;
            break;
        }
        if(board[rook_x][c]=='B') break;
    }
    //search in right
    for(let c=rook_y+1; c<=7; c++){//we fix rook_x
        
        if(board[rook_x][c]=='p'){
            count++;
            break;
        }
        if(board[rook_x][c]=='B') break;
    }

    return count;
};