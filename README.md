# Ashina CSS framework

> This CSS framework developed by Simuratli and it is free for use.

# Ashina included 
* [Use](#use)
* [Navbar](#navbar)
* [Forms](#forms)
* [Containers](#containers)
* [Cards](#cards)
* [Buttons](#buttons)
* [Backgoround color](#bgcoolor)
* [Text color](#textcoolor)
* [Flex system](#flexbox)


## Navbar 

```html

  <div class="navbarContainer bgColorDanger">
                <div class="logo">
                    <h1>Ashina </h1>
                </div>
                <div class="collapse">
                    <div class="navbarList">
                        <ul class="listElement">
                            <li class="listItem"><a href="#">Main</a></li>
                            <li class="listItem"><a href="#">Content</a></li>
                            <li class="listItem"><a href="#">Dropdown</a></li>
                            <li class="listItem"><a href="#">Disable</a></li>
                        </ul>
                    </div>
                    <div class="navbarSearch">
                        <form action="">
                            <input class="formElementNav" placeholder="Search" type="text">
                            <button class="infoButton"><i class="fa fa-search">Search</i></button>
                        </form>
                    </div>
                </div>
                <div class="hamburger">
                    <div class="hamLine"></div>
                    <div class="hamLine"></div>
                    <div class="hamLine"></div>
                </div>
            </div>
```
*It seen like that* 
<a href="#navbar"><img src="https://i.hizliresim.com/6INBa9.png" title="Navbar" alt="navbar"></a>



## Forms

#### There have a 2 type of form 
* Login 
* Register

# Login

```html
  <div class="formContainer">
      <div class="text-center">
          <h1>Login form</h1>
       </div>
        <form class="form">
            <label class="label">Name
                <input class="formElement" placeholder="Name" type="text">
            </label>
            <label class="label">Surname
                <input class="formElement" placeholder="Name" type="text">
            </label>
            <br>
            <button class="successButton">Log in</button> 
            <a class="fPass" href="#">Forgot password ?</a>
        </form>
    </div>
```

#### Login form
<a href="#form"><img src="https://i.hizliresim.com/dR4NNY.png" title="Login" alt="Login"></a>

### Register form
```html
<div class="formContainer">
     <div class="text-center">
        <h1>Register form</h1>
     </div>
    <form class="form" action="">
        <label class="label">Email
            <input class="formElement" placeholder="Email" type="email">
        </label>
        <label class="label">Password
            <input class="formElement" placeholder="Password" type="password">
        </label>
        <label class="label">Password again
            <input class="formElement" placeholder="Password again" type="password">
        </label>
        <br>
        <button class="infoButton">Register</button> <a class=" fPass " href="# ">Do you have a account ?</a>
    </form>
 </div>
```

#### Register
<a href="#form"><img src="https://i.hizliresim.com/BPeusv.png" title="Register" alt="Register"></a>

# Cards
> There have a 3 type of cards
* Left image card
* Top image card
* Simple card

## Simple card
> the template of simple card given below

```html
<div class="card ">
    <div class="card-body">
        <h1 class="card-title">
            Card title lor
        </h1>
        <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem soluta ipsam ad ea iste expedita, dolorem dolore repudiandae vel neque ipsa atque molestiae ipsum. Asperiores ullam laboriosam rem expedita est?
        </p>
        <div class="card-footer">
            <p>-Simuratli Elcan</p>             
        </div>
    </div>
</div>
```
### Simple card example image
<a href="#card"><img src="https://i.hizliresim.com/FrQDsq.png" title="Simple card" alt="Simple card"></a>


## Top image card
> Code example of Top image card

```html
<div class="card">
    <div class="cardImg">
        <img src="/" alt="">
    </div>
    <div class="card-body">
        <h1 class="card-title">Card text</h1>
         <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sint magni perferendis laudantium rerum aliquid nostrum quos, accusantium fugit asperiores quidem veniam, unde a quaerat! Blanditiis dicta vel obcaecati natus!</p>
    </div>
</div>
```
> in here you can also use div item with class *card-footer* (after card-body div) for adding footer element
### Top image card seen like that

<a href="#card"><img src="https://i.hizliresim.com/PNNkXK.png" title="Top image card" alt="Top image card"></a>


## Left image card
> Code example of Left image card

```html
<div class="card flex">
    <div class="cardImg">
        <img src="/" alt="">
    </div>
    <div class="card-body">
        <h1 class="card-title">Card text</h1>
         <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sint magni perferendis laudantium rerum aliquid nostrum quos, accusantium fugit asperiores quidem veniam, unde a quaerat! Blanditiis dicta vel obcaecati natus!</p>
    </div>
</div>
```
>YOU CAN ONLY ADD THE *FLEX* CLASS TO THE CARD DIV YOU TURN YOUR TOP IMAGE CARD TO THE LEFT IMAGE CARD
> in here you can also use div item with class *card-footer* (inside  card-body div) for adding footer element

### Top image card seen like that

<a href="#card"><img src="https://i.hizliresim.com/6WXJD5.png" title="Top image card" alt="Top image card"></a>



# Containers 

#### There are 3 type of container
* Large
* Medium
* Small 

## Large Container
```html
<div class='fullContainer'></div>
```
it cover width:100% of html page

## Medium Container 
```html
<div class='container'></div>
```
 it cover width:95% of html page

 ## Small Container 
```html
<div class='smallContainer'></div>
```
 it cover width:80% of html page


# Buttons
    There have 4 type of buttons

* Normal buttons
* Rounded buttons
* Outlined buttons
* Small buttons


## Normal Buttons

```html
<button class="infoButton">Info</button>
<button class="warnButton">Warning</button>
<button class="dangerButton">Danger</button>
<button class="successButton">Success</button>
<button class="gradientButton">Gradiend</button>
```


<a href="#buttons"><img src="https://i.hizliresim.com/0bLiuT.png" title="Buttons" alt="Buttons"></a>


## Rounded Buttons
> you can make your button rounded only added rounded class


```html
<button class="infoButton rounded ">Info</button>
<button class="warnButton rounded">Warning</button>
<button class="dangerButton rounded">Danger</button>
<button class="successButton rounded">Success</button>
<button class="gradientButton rounded">Gradiend</button>
```

<a href="#buttons"><img src="https://i.hizliresim.com/i5qHix.png" title="Buttons" alt="Buttons"></a>


## Outlined Buttons


```html
<button class="outline-info ">Outline Info</button>
<button class="outline-success">Outline Success</button>
<button class="outline-danger">Outline-danger</button>
<button class="outline-warn">Outline-warn</button>
```

<a href="#buttons"><img src="https://i.hizliresim.com/B3tiwv.png" title="Buttons" alt="Buttons"></a>




## Small Buttons
> you can make your button SMALL only added rounded class

```html
<button class="outline-info smallButton ">Outline Info</button>
<button class="outline-success smallButton">Outline Success</button>
<button class="outline-danger smallButton">Outline-danger</button>
<button class="outline-warn smallButton">Outline-warn</button>
<button class="infoButton smallButton">Info</button>
<button class="warnButton smallButton">Warning</button>
<button class="dangerButton smallButton">Danger</button>
<button class="successButton smallButton">Success</button>
<button class="gradientButton smallButton">Gradiend</button>
```

<a href="#buttons"><img src="https://i.hizliresim.com/ReFx4y.png" title="Buttons" alt="Buttons"></a>


# Background Colors
> Using different classes you can made colorful your template
> Ashina hava a 4 main color and 1 gradient color

```shell
    .bgColorDanger 
    .bgColorInfo
    .bgColorSuccess
    .bgColorWarn
    .bgColorGradient
```

<a href="#buttons"><img src="https://i.hizliresim.com/qMnwVf.jpg" title="Background color" alt="Background color"></a>

# Text Color

> There have 2 main text color Black and white

```html
<p class='textDark'></p>
<p class='textWhite'></p>
```


# Flex system
The Ashina included flex system with 12 columns.

```shell
.col-1
.col-2
.col-3
.col-4
.col-5
.col-6
.col-7
.col-8
.col-9
.col-10
.col-11
.col-12
```

#### all this divs must be created in the <div> which have a .row class

```html
<div class="row">
    <!-- <div class="col-1"> 1</div>
    <div class="col-2"> 2</div>
    <div class="col-3"> 3</div>
    <div class="col-4"> 4</div>
    <div class="col-5"> 5</div>
    <div class="col-6"> 6</div>
    <div class="col-7"> 7</div>
    <div class="col-8"> 8</div>
    <div class="col-9"> 9</div>
    <div class="col-10"> 10</div>
    <div class="col-11"> 11</div>
    <div class="col-12"> 12</div> -->
</div>
```

<a href="#buttons"><img src="https://i.hizliresim.com/EjRcOL.jpg" title="Flex " alt="Flex"></a>
