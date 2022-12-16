function insertDashes(str) {
    // write code here
    // split the string into an array of substrings
    let arr = str.split("");
    
    // map over array
    arr.map(element => {
        // if the element is not an empty substring
        if(element !== " ") {
            console.log("mapping");
            // then add a dash
            element + "-";
        }
    })
    
    return arr;
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});