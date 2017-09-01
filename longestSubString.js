var lengthOfLongestSubstring = function(s) {
    var res = 0;
    var str = '';
    var i = 0;
    var temp = [];
    
    while (i < s.length) {
        if (temp[s[i]]) {
            if (str.length > max) {
                res = str.length;
            }
            var start = str.indexOf(s[i]);
            str = str.substring(start + 1);
        }
        if (i < s.length) {
            str += s[i];
            temp[s[i]] = i + 1;
            i++;
        }
    } 
    if (str.length > max) {
        res = str.length;
    }  
    return res;
};
