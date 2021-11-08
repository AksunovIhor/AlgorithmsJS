//binary tree

//bubble sort
Array.prototype.bubbleSort = function(compare){
    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){

            if(compare(this[j], this[j + 1])){
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
};

//selection sort
Array.prototype.selectionSort = function (compare){
    for(let i = 0; i < this.length; i++){
        let minValue = this[i];

        for(let j = i + 1; j < this.length; j++){
            if(compare(this[j], this[minValue])){
                minValue = j;
            }

            if (minValue !== i) {
                let temp = this[i];
                this[i] = this[minValue];
                this[minValue] = temp;
            }
        }
    }
};