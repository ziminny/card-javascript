

## Documentação


HTML

```html    
        <!-- CARDS-->
        <div class="zm-cards" style="margin-top: 30px;"></div>  
       
         <!-- CONTEUDO --> 
         <div class="m-content">
                <div class="item1 zm-display-flex">
                    <div style="width: 100%; margin:0 auto; text-align:center">Content categories</div>
                </div>
            
                <div class="item2 zm-display-none ">
                    <div style="width: 100%; margin:0 auto; text-align:center">Content products</div>
                </div>
            
                <div class="item3 zm-display-none">    
                    <div style="width: 100%; margin:0 auto; text-align:center">Content Cart</div> 
                </div>
         </div>
```



Javascript

```javascript
 <script src="js/zm-cards.js"></script>
    <script type="text/javascript">

    loadAnimation.init({
            cards: [
                    {
                        iconLeft: "fas fa-list", //icone da esquerda primeiro card
                        iconRight: "fas fa-info-circle", //icone da direita primeiro card
                        backgroundGradient:[ "#0D91D1" , "#1479ac"], // background do primeiro card
                        target:"item1", //mostra o conteudo da div com a class item1
                        total: "25",
                        name:"Categories",
                        active: true, // iniciara nesta página 
                    },
                    {
                        iconLeft: "fab fa-product-hunt",
                        iconRight: "fas fa-info-circle",
                        backgroundGradient:["#69306D","#86358b"],
                        target:"item2",
                        total: "25",
                        name:"Products",     
                    },
                    {
                        iconLeft: "fas fa-cart-arrow-down",
                        iconRight: "fas fa-info-circle",
                        backgroundGradient:["#EA8C55" ,"#c77647"],
                        target:"item3",
                        total: "2",
                        name:"Car",
                    },
                    //.....
                    
            ]
    })
</script>
```



