import Store from "./store.js";
import View from "./view.js";
import Controller from "./controller.js";

// async function that loads data from photos.json and returns a Promise

let fetchData = async ()=>{
    try {
        let response = await fetch('../data/photos.json');
        let data = await response.json();
        return data;
    }
    catch(e){
        console.error(e);
    }
}

//Load data from a Rest end point and setup the UI

fetchData().then((photos)=>{
    const store = new Store(photos);
    const view = new View();
    const controller = new Controller(store, view);
});
