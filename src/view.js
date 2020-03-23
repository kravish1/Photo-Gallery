export default class View {
    constructor(){
        this.$gallery = document.querySelector(".gallery");
        this.$modal = document.querySelector(".modal-wrapper");
        this.$closeButton = document.querySelector(".close");
        this.$body = document.querySelector("body");
        this.$currentPhoto = document.querySelector(".img-container img");
        this.$leftControl = document.querySelector(".modal-control-left");
        this.$rightControl = document.querySelector(".modal-control-right");
        this.$photoCount = document.querySelector(".photo-count");
        this.addClickHandler();
        this.addKeyHandler();
    }
     /**
      * Click Handlers for Photo / Modal.
      */
    addClickHandler = ()=>{
        /**
        * Click Handlers for Close button to close Modal
        * @param {EventTarget} target model
        */
        this.$closeButton.addEventListener('click',({target})=>{
            this.$modal.classList.remove('active');
        });

        /**
        * Click Handlers to close the model by clicking the background.
        * @param {EventTarget} target background
        */
        this.$modal.addEventListener('click',({target})=>{
            if(target.classList.contains('modal-control-right') || target.classList.contains('modal-control-left'))
                return;
            if(target.nodeName !== 'IMG')
                this.$modal.classList.remove('active');
        });
    }

     /**
      * Keydown Handlers for Modal.
      */
    addKeyHandler = ()=>{
        /**
        * Keydown Handlers to close the model by clicking the esc key.
        * @param {Event} event 
        */
        this.$body.addEventListener('keydown',(event)=>{
             if(event.keyCode === 27)
                 this.$modal.classList.remove('active');            
        });
    }
    /**
    * showItems to populate the UI with photo grid
    * @param items photos 
    */
    showItems = (items)=>{
        const template = items.reduce(
          (a, item) =>
            a +
            `
            <div class="photo">
                <img src=${item.urls.regular} data-id=${item.id}/>
            </div>
            `,
          ""
        );
        this.$gallery.innerHTML = template;
      }

      bindAddModalForItem = (handler)=>{
        /**
        * Click Handlers for Photo to activate Modal.
        * @param {EventTarget} target photo item
        */
       this.$gallery.addEventListener('click',({target})=>{
            if(target.nodeName === 'IMG'){
                handler(target.getAttribute("data-id"));
                this.$modal.classList.add('active');
            }
        });
      }

      bindMouseControlsForItem = (handler)=>{
        /**
        * Click Handlers for Modal / Photo pagination.
        * @param {EventTarget} target photo item
        */
       this.$rightControl.addEventListener('click',({target})=>{
                handler("next");
        });
        this.$leftControl.addEventListener('click',({target})=>{
                handler("prev");
        });
      }

      bindKeyboardControlsForItem = (handler)=>{
        /**
        * Keyup Handlers for Modal / Photo pagination.
        * @param {EventTarget} event photo item
        */
       this.$body.addEventListener('keyup',(event)=>{
            if(event.keyCode === 39)
                handler("next");
            if(event.keyCode === 37)
                handler("prev");
        });
      }

      updateCurrentPhoto = (target,index,total)=>{
        this.$currentPhoto.setAttribute('src',target.urls.regular);
        this.$photoCount.innerHTML = `Showing ${index + 1} of ${total}`;
      }
}