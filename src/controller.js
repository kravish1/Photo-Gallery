import Store from "./store.js";
import View from "./view.js";

export default class Controller {
    constructor(store, view) {
          /**
            * @param  {!Store} store A Store instance
            * @param  {!View} view A View instance
          */
        this.store = store;
        this.view = view;
        view.bindAddModalForItem(this.updateCurrentIndex.bind(this));
        view.bindControlsForItem(this.updateCurrentIndex.bind(this));
        this.showItems();
      }

      /* Display items from the Store */

      showItems = ()=>{
        this.store.find({}, items => this.view.showItems(items));
      }
      
      /* Updates the index of the current photo to the store */
      updateCurrentIndex = (id)=>{
          this.store.updateCurrentIndex(id, (item,index,total) => this.view.updateCurrentPhoto(item,index,total));
      }
}
