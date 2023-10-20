// In this Kata, you will be given a string that has lowercase letters and numbers. 
// Your task is to compare the number groupings and return the largest number. 
// Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number 
// groupings.

function solve(s) {
    return Math.max(...s.match(/\d+/g));
};

console.log(solve('wds0q8pv8xdhiaeuzn98uuq6d398maq4a4gs56t4lzv1si6rp0xl35g9rteru9tjz6rppkfu1ezdrjzslyeczz5mkvn6o9bl01kqz9bg1y8ns816himpkicsh7057o2s65kc7xvw3k2iw8gpa8s9snx3lisjduetvlq341jyeqhxtj7z43te7n2zi5c8aspxus4m'));
