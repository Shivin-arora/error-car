class Game{
    constructor(){



    }

getState(){
var gamestateref = database.ref('gameState');
gamestateref.on("value",function(data){
    gameState = data.val();
})
}


update(state){
    database.ref('/').update({
        gameState : state
    })
}

start(){
    if(gameState === 0){
        form = new Form();
        form.display();

        player = new Player();
        player.getCount();
    }
    
}

play(){
     form.hide();
     textSize(30);
    text("Game is starting...",400,300);
    Player.getPlayersInfo();
    if(playersData!==undefined){
        var ypos=150;
        for(var index in playersData){
            text(playersData[index].name+":"+playersData[index].distance,200,ypos);
            ypos += 50;
        }
       
    }
}
                                                                                                             

}