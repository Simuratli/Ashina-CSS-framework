# Ashina CSS framework

> This CSS framework developed by Simuratli and it is free for use.

# Ashina included 
* [Use](#use)
* [Navbar](#navbar)
* [Forms](#forms)
* [Buttons](#buttons)
* [Backgoround color](#bgcoolor)
* [Text color](#textcoolor)
* [Cards](#cards)
* [Flexbox](#flexbox)


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

<a href="#card"><img src="https://i.hizliresim.com/PNNkXK.png" title="Top image card" alt="Top image card"></a>
