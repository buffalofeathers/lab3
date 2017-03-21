var friends = ['Thomas','Jeff','Daniel','Steven','Tyler'];


document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn'); 
    btn.addEventListener('click', function() {

        var div = document.createElement('div');
        div.className = 'friend';
        div.style.backgroundColor = "red";
       
        
    for (var i = 0; i < friends.length; i++) {
        var friend = (friends[i]);
        var friendName = document.createElement('h3');
        var h3Text = document.createTextNode(friend)
        friendName.appendChild(h3Text);
        // h3Text.innerHTML = friend;
        div.appendChild(friendName);
        
 
            for (var j = 99; j > 0; j--) {
            
                if (j === 1) {
                    var para = document.createElement('p');
                    var myText = document.createTextNode(j + " line of code in the file," + j + " line of code," + (friends[i]) + " strikes one out, clears it all, no more lines of code in the file"); 
                    para.appendChild(myText);
                    div.appendChild(para);
                } else if (j === 2) {
                    var para = document.createElement('p');
                    var myText = document.createTextNode(j + " lines of code in the file," + j + " lines of code," + (friends[i]) + " strikes one out, clears it all, " + (j - 1) + " line of code in the file");
                    para.appendChild(myText);
                    div.appendChild(para);
                } else { 
                    var para = document.createElement('p');
                    var myText = document.createTextNode(j + " lines of code in the file," + j + " lines of code," + (friends[i]) + " strikes one out, clears it all, " + (j - 1) + " lines of code in the file");
                    para.appendChild(myText);
                    div.appendChild(para);
                }
            } 
             
             document.body.appendChild(div);
        }
    }); 
});



 