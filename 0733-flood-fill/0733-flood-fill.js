/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
        if(image[sr][sc] == color) return image;
         fill(image, sr, sc, color, image[sr][sc]);
    return image;
}
    var fill = function(image, sr, sc, color, cur) {
    // If sr is less than 0 or greater equals to the length of image...
    // Or, If sc is less than 0 or greater equals to the length of image[0]...
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return;
    // If image[sr][sc] is not equal to previous color...
    if(cur != image[sr][sc]) return;
    // Update the image[sr][sc] as a color...
    image[sr][sc] = color;
    // Make four recursive calls to the function with (sr-1, sc), (sr+1, sc), (sr, sc-1) and (sr, sc+1)...
    fill(image, sr-1, sc, color, cur);
    fill(image, sr+1, sc, color, cur);
    fill(image, sr, sc-1, color, cur);
    fill(image, sr, sc+1, color, cur);
};