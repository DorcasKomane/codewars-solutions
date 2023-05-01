function alphabetWar(fight)
{
  let leftScore = 0;
  let rightScore = 0;
  
  for(let i = 0; i < fight.length; i++){
    let letter = fight[i];
    
    switch(letter){
      case 'w':
        leftScore += 4;
        break;
        
      case 'p':
        leftScore += 3;
        break;
        
      case 'b':
        leftScore += 2;
        break;
      
      case 's':
        leftScore += 1;
        break;
        
      case 'm':
        rightScore += 4;
        break;
        
      case 'q':
        rightScore += 3;
        break;
        
      case 'd':
        rightScore += 2;
        break;
      
      case 'z':
        rightScore += 1;
        break;
    }
  }
 
  if(leftScore > rightScore)
    return 'Left side wins!';
  else if(leftScore < rightScore)
    return 'Right side wins!';
  else 
    return 'Let\'s fight again!';
}

console.log(alphabetWar('wwwwwwz'));