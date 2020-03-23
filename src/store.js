export default class Store {
    // Store to hold the photos
    constructor(photos){
        this.photos = photos;
        this.index = 0;
    }

    /**
	 * Find items with properties matching those on query.
	 *
	 * @param {ItemQuery} query Query to match
	 * @param {function(ItemList)} callback Called when the query is done
	 */
    find = (query, callback)=>{
		const photos = this.photos;
		callback(photos);
    }

    updateCurrentIndex = (id,callback)=>{
        if(id !== 'prev' && id !== 'next'){
            id = id.slice(0,-1);
            this.photos.forEach((item,index)=>{
                if( item.id === id)
                    this.index = index;
            });
            callback(this.photos[this.index],this.index,this.photos.length);
        }
        if(id === 'next' && this.index < this.photos.length-1){
            this.index++;
            callback(this.photos[this.index],this.index,this.photos.length);
            return;
        }

        if(id === 'prev' && this.index > 0){
            this.index--;
            callback(this.photos[this.index],this.index,this.photos.length);
            return;
        }
    }

}

