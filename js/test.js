/*javascript click next div*/

var showing = [1, 0, 0, 0];
var rejsebox = ['rejBox1', 'rejBox2', 'rejBox3', 'rejBox4'];
function next() {
    var qElems = [];
    for (var i = 0; i < rejsebox.length; i++) {
        qElems.push(document.getElementById(rejsebox[i]));   
    }
    for (var i = 0; i < showing.length; i++) {
        if (showing[i] == 1) {
            qElems[i].style.display = 'none';
            showing[i] = 0;
            if (i == showing.length - 1) {
                qElems[0].style.display = 'block';
                showing[0] = 1;
            } else {
                qElems[i + 1].style.display = 'block';
                showing[i + 1] = 1;
            }
            break;
        }
    }      
}