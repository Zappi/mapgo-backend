/**
 * Node class.
 * @author Aleksi Huotala
 */
class Node {

    /**
     * Node id
     */
    public number : number;

    /**
     * Current weight
     */
    public weight : number;

    constructor(num : number, w : number) {
        this.weight = w;
        this.number = num;
    }
}

export default Node;