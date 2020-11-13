


    // Size Object
    Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    //  Template cards
    let zmTemplateCards = (args,index) => {
        return `
        <div class="category-product-main-painel">
                                            
            <div class="add-new-category-row"  id="buttons-cards-products${index+1}">
            <div class="add-new-left-col add-new-left-col-${index+1}" style="background-image:linear-gradient(${args.cards[index].backgroundGradient[0]},${args.cards[index].backgroundGradient[1]})">
                <i class="${args.cards[index].iconLeft}"></i>
            </div>
                <div class="add-new-right-col">
                    <div class="content-category-title-body">
                        <div class="add-new-title">${args.cards[index].name}</div>
                        <div class="add-new-message">${args.cards[index].total}</div>
                    </div>
                    <div class="line-right-card line-right-card-${index+1}" style="background-image:linear-gradient(${args.cards[index].backgroundGradient[0]},${args.cards[index].backgroundGradient[1]})">
                            <i class="${args.cards[index].iconRight} card-icon-info"></i>
                    </div>
                </div> 
            </div>
        </div> 
        `
    }
    // Content page
    let zmInOutContent = (args, zmSize)=> {
        let zmButtons = [];
        let zmTarget = [];
        for(let index = 0; index < zmSize; index++) {
                let zmDisplay = args.cards[index].display ? args.cards[index].display : "flex"; 
                zmButtons[index] = document.querySelector(`#buttons-cards-products${index+1}`);
                zmTarget[index] = document.querySelector(`.${args.cards[index].target}`);

            zmButtons[index].addEventListener("click",function() {
                    for(let index2 = 0; index2 < zmSize; index2++) {
                            if(document.defaultView.getComputedStyle(zmTarget[index]).display != zmDisplay)
                            zmTarget[index2].style.display = "none"
                    }

            zmTarget[index].style.animation =""

                if(document.defaultView.getComputedStyle(zmTarget[index]).display == "none") {
                        zmTarget[index].style.animation = "opacity-peroducts-cards 1s ease-in-out forwards"
                }
            zmTarget[index].style.display = zmDisplay;

           })
        }
    }

    // Effects buttons
    let zmButtonsEffect = (args) => {
        let cards = document.querySelectorAll(".category-product-main-painel");
        let divRight = [];
        let iconInner = [];
        let zmPrefix;
        for (let index = 0; index < cards.length; index++) {
                                
            divRight[index] = document.querySelector(`.line-right-card-${index+1}`);
            iconInner[index] = document.querySelector(`.line-right-card-${index+1} .card-icon-info`);

                cards[index].addEventListener("click", () => {   
                        resetElements(divRight,iconInner , index)
                        divRight[index].style.animation = "div-rigth 0.5s ease-in-out forwards"
                        iconInner[index].style.animation = "icon-info-show 0.5s ease-out forwards"
                })

                zmPrefix = args.cards[index].active ? index : 0;    

        }
                 
            divRight[zmPrefix].style.animation = "div-rigth 0.5s ease-in-out forwards"
            iconInner[zmPrefix].style.animation = "icon-info-show 0.5s ease-out forwards"
                 
            let resetElements = (div, icon , index) => {

            icon.filter((element) => {
                return element != iconInner[index];
            }).map((element , i)=> {

                    if(element.style.animation != "")  {
                        element.style.animation = ""
                        element.style.animation = "icon-info-show-reverse 0.5s ease-out forwards"                           
                        }
            });

            div.filter((element) => {
                return element != divRight[index];
            }).map((element , i)=> {

                    if(element.style.animation != "")  {
                        element.style.animation = ""
                        element.style.animation = "div-rigth-reverse 0.5s ease-in-out reverse forwards"                      
                    }
            });
            } 
}

    var loadAnimation = new (function() {
            this.init = function(args) {   
                
                const zmPrefiz = "zm";
                //MAIN CONTAINER
                const zmContainer = document.querySelector(`.${zmPrefiz}-cards`);
                
                let zmSize = Object.size(args.cards);

                    for(let index = 0; index < zmSize; index++) {
                        // cards
                        zmContainer.innerHTML += zmTemplateCards(args,index)
                    }              
                        zmInOutContent(args,zmSize)
                        zmButtonsEffect(args);     
            }    
    })