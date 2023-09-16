

function c1() 
{
    var abc = document.getElementById("id1");

    abc.innerHTML = `
    <ul class="navbar-nav mr-auto" id="id1">
        <li class="nav-item active">
            <a class="nav-link" href="#home" onclick="c1()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#about" onclick="c2()">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#product" onclick="c3()">Product <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#review" onclick="c4()">Review <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact" onclick="c5()">Contact <span class="sr-only">(current)</span></a>
        </li>
    </ul>
    `;
}
function c2()
{
    var abc = document.getElementById("id1");

    abc.innerHTML = `
    <ul class="navbar-nav mr-auto" id="id1">
        <li class="nav-item">
            <a class="nav-link" href="#home" onclick="c1()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#about" onclick="c2()">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#product" onclick="c3()">Product <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#review" onclick="c4()">Review <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact" onclick="c5()">Contact <span class="sr-only">(current)</span></a>
        </li>
    </ul>
    `;
}

function c3()
{
    var abc = document.getElementById("id1");

    abc.innerHTML = `
    <ul class="navbar-nav mr-auto" id="id1">
        <li class="nav-item">
            <a class="nav-link" href="#home" onclick="c1()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#about" onclick="c2()">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#product" onclick="c3()">Product <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#review" onclick="c4()">Review <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact" onclick="c5()">Contact <span class="sr-only">(current)</span></a>
        </li>
    </ul>
    `;
}

function c4()
{
    var abc = document.getElementById("id1");

    abc.innerHTML = `
    <ul class="navbar-nav mr-auto" id="id1">
        <li class="nav-item">
            <a class="nav-link" href="#home" onclick="c1()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#about" onclick="c2()">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#product" onclick="c3()">Product <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#review" onclick="c4()">Review <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#contact" onclick="c5()">Contact <span class="sr-only">(current)</span></a>
        </li>
    </ul>
    `;
}

function c5()
{
    var abc = document.getElementById("id1");

    abc.innerHTML = `
    <ul class="navbar-nav mr-auto" id="id1">
        <li class="nav-item">
            <a class="nav-link" href="#home" onclick="c1()">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#about" onclick="c2()">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#product" onclick="c3()">Product <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#review" onclick="c4()">Review <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#contact" onclick="c5()">Contact <span class="sr-only">(current)</span></a>
        </li>
    </ul>
    `;
}