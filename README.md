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
        <form class="form" action="">
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

    *Login form*
    <a href="#navbar"><img src="https://i.hizliresim.com/dR4NNY.png" title="Login" alt="Login"></a>