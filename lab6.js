function left_col(){
    document.getElementById('leftcol').style.width = '90%';
    document.getElementById('rightcol').style.width = '10%';
    document.getElementById('dog').style.display = 'none';
    document.getElementById('cat').style.display = 'block';
    document.getElementById('dog').style.width = '70%';
    document.getElementById('cat').style.width = '70%';
}

function center_col(){
    document.getElementById('leftcol').style.width = '50%';
    document.getElementById('rightcol').style.width = '50%';
    document.getElementById('dog').style.display = 'block';
    document.getElementById('cat').style.display = 'block';
    document.getElementById('dog').style.width = '90%';
    document.getElementById('cat').style.width = '90%';
}

function right_col(){
    document.getElementById('leftcol').style.width = '10%';
    document.getElementById('rightcol').style.width = '90%';
    document.getElementById('dog').style.display = 'block';
    document.getElementById('cat').style.display = 'none';
    document.getElementById('dog').style.width = '70%';
    document.getElementById('cat').style.width = '70%';
}